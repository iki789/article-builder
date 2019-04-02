import * as React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './App.scss';
import GloblaSettings from './Components/GlobalSettings/GlobalSettings'

class App extends React.Component {
  public render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col className="Config-pane">
            <GloblaSettings />
          </Col>
          <Col>
            GF
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
