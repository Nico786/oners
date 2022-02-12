import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";


const Dashboard = () => {

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = '/adminlogin';
  }

  return (
    <>
      <Row>
        <Col>
          <button className="col-2 btn btn-danger float-end" onClick={handleLogout}>Deconnexion</button>
        </Col>
      </Row>
      <Card>
        <CardHeader title="Bienvenue ô Grand Admin" />
        <CardContent>
          <p>Clique sur le menu de gauche la section que tu souhaites modifier.</p>
          <ul>
            <li><b>Sections</b>: Pour modifier le contenu des paragraphes des sections</li>
            <li><b>Personnages</b>: modifier les informations des différents personnages. Si tu veux en ajouter un, les développeurs ont aussi besoin des images de ce personnage.</li>
            <li><b>Auteurs</b>: modifier les infos à propos de Morgan et Justin</li>
          </ul>
        </CardContent>
      </Card>
    </>
  )
}

export default Dashboard;