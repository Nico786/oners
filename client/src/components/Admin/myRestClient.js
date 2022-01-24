// Convert a MongoDB entity which has an _id property
// to an entity with an id property as react-admin expect
const convertToReactAdmin = ({ _id, ...item }) => ({
  id: _id,
  ...item,
});

// Decorate the simple rest client so that it convert the data from the API
// in the format expected by react-admin
const mongoDBClient = (dataProvider) => async (type, resource, params) => {
  // Execute the API call and wait for it to respond
  // It will always return an object with a data, and sometime a total (GET_LIST and GET_MANY)
  const { data, total } = await dataProvider(type, resource, params);

  switch (type) {
    case "GET_LIST":
    case "GET_MANY":
    case "GET_MANY_REFERENCE":
      return {
        data: data.map(convertToReactAdmin),
        total, // For GET_MANY, total will be undefined
      };
    case "GET_ONE":
    case "CREATE":
    case "UPDATE":
    case "DELETE":
      return { data: convertToReactAdmin(data) };
    default:
      return { data };
  }
};

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  options.headers.set("x-access-token", localStorage.getItem("token"));
  return fetchUtils.fetchJson(url, options);
};

const restClient = simpleRestClient(API_URL, httpClient);

export default MongoDBClient(restClient);