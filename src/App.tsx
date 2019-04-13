import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from './store/reducers';
import { HIDE_MODAL, SHOW_MODAL } from './store/actions/app';
import { Container, Col, Row } from 'react-bootstrap';
import './App.scss';

import GloblaSettings from './containers/GlobalSettings/GlobalSettings'
import Preview from './containers/Preview/Preview';
import Modal from './components/UI/Modal/Modal';
import ComponentList from './components/BuilderComponents/BuilderComponentList/index';

class App extends React.Component<IAppProps, IAppState> {
  
  public hideModal = () => {
    this.props.onHideModal();
  }

  public render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col className="Config-pane">
            <GloblaSettings />
          </Col>
          <Col>
          <Preview />
          <Modal show={this.props.modalVisible} onHide={this.hideModal} title="Components" size="lg">
          <ComponentList />
          </Modal> 
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    modalVisible: state.rootReducer.showModal
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    onHideModal: () => dispatch(HIDE_MODAL()),
    onShowModal: () => dispatch(SHOW_MODAL())
  }
}

interface IAppProps{
  modalVisible: boolean,
  onHideModal: () => void,
  onShowModal: () => void
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
