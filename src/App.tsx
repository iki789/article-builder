import * as React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './App.scss';
import GloblaSettings from './containers/GlobalSettings/GlobalSettings'
import Preview from './containers/Preview/Preview';
import Modal from './components/UI/Modal/Modal';
import ComponentList from './components/BuilderComponents/BuilderComponentList/index';

class App extends React.Component {
  public render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col className="Config-pane">
            <GloblaSettings />
          </Col>
          <Col>
          <Preview />
          <Modal show={true} title="Components" size="lg">
          <ComponentList />
          </Modal> 
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
