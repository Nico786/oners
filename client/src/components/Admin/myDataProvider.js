import { stringify } from "query-string";
import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  UPDATE_MANY,
  DELETE,
  DELETE_MANY,
} from "react-admin";

const myDataProvider = (apiUrl, httpClient) => {

  const convertDataRequestToHTTP = (type, resource, params) => {
    let url = "";
    const options = {};
    switch (type) {
      case GET_LIST: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        // handle full-text
        /*if (params.filter.q) {
                    params.filter["$text"] = { "$search": params.filter.q};
                    delete params.filter.q;
                }*/
        const query = {
          sort: JSON.stringify({ [field]: order === "ASC" ? 0 : 1 }),
          skip: (page - 1) * perPage,
          limit: perPage,
          /*range: JSON.stringify([
                        (page - 1) * perPage,
                        page * perPage - 1,
                    ]),*/
          query: JSON.stringify(params.filter),
        };
        url = `${apiUrl}/${resource}?${stringify(query)}`;
        break;
      }
      case GET_ONE:
        url = `${apiUrl}/${resource}/${params.id}`;
        break;
      case GET_MANY: {
        const query = {
          filter: JSON.stringify({ id: params.ids }),
        };
        url = `${apiUrl}/${resource}?${stringify(query)}`;
        break;
      }
      case GET_MANY_REFERENCE: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
          sort: JSON.stringify({ [field]: order === "ASC" ? 0 : 1 }),
          skip: (page - 1) * perPage,
          limit: perPage,
          /*range: JSON.stringify([
                        (page - 1) * perPage,
                        page * perPage - 1,
                    ]),*/
          query: JSON.stringify({
            ...params.filter,
            [params.target]: params.id,
          }),
        };
        url = `${apiUrl}/${resource}?${stringify(query)}`;
        break;
      }
      case UPDATE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = "PUT";
        options.data = JSON.stringify(params.data);
        break;
      case CREATE:
        url = `${apiUrl}/${resource}`;
        options.method = "POST";
        options.data = JSON.stringify(params.data);
        break;
      case DELETE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = "DELETE";
        break;
      default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
    return { url, options };
  };


  const convertHTTPResponse = (response, type, resource, params) => {
    const { headers, data } = response;
    console.log(type, response);
    switch (type) {
      case GET_LIST:
      case GET_MANY:
      case GET_MANY_REFERENCE:
        return {
          data: data.map((item) => {
            item.id = item._id;
            delete item._id;
            return item;
          }),
          total: parseInt(headers["x-total-count"], 0),
        };
      case DELETE:
      case DELETE_MANY:
        return { data: params };
      default:
        if (data && data._id) {
          data.id = data._id;
          delete data._id;
        }
        return { data };
    }
  };

  return (type, resource, params) => {
    if (type === UPDATE_MANY) {
      return Promise.all(
        params.ids.map((id) =>
          httpClient(`${apiUrl}/${resource}/${id}`, {
            method: "PUT",
            body: JSON.stringify(params.data),
          })
        )
      ).then((responses) => ({
        data: responses.map((response) => response.json),
      }));
    }
    
    if (type === DELETE_MANY) {
      return Promise.all(
        params.ids.map((id) =>
          httpClient(`${apiUrl}/${resource}/${id}`, {
            method: "DELETE",
          })
        )
      ).then((responses) => ({
        data: responses.map((response) => response.json),
      }));
    }

    const { url, options } = convertDataRequestToHTTP(type, resource, params);

    return httpClient(url, options).then((response) =>
      convertHTTPResponse(response, type, resource, params)
    );
  };
};

export default myDataProvider;