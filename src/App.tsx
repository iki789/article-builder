import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from './store/reducers';
import { HIDE_MODAL, SHOW_MODAL } from './store/actions/app';
import { Container, Col, Row } from 'react-bootstrap';
import './App.scss';

import GloblaSettings from './containers/GlobalSettings/GlobalSettings'
import Preview, { ICol } from './containers/Preview/Preview';
import Modal from './components/UI/Modal/Modal';
import ComponentList from './components/BuilderComponents/BuilderComponentList/index';
import { ComponentMount } from './components/BuilderComponents';

class App extends React.Component<IAppProps, IAppState> {
  
  public hideModal = () => {
    this.props.onHideModal();
  }

  public showModal = () => {
    this.props.onShowModal();
  }

  public render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col className="Config-pane">
            <div className="wrapper">
              <GloblaSettings />
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="ComponentEditorWrapper">
                { <ComponentMount type={this.props.activeCol.type} /> }
                </div>
              </div>
            </div>
          </Col>
          <Col>
          <Preview />
          <div className="AddComponentButton" onClick={this.showModal}>
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg id='Add' transform='translate(-919 -442)'%3E%3Ccircle id='Ellipse_226' data-name='Ellipse 226' cx='20' cy='20' r='20' transform='translate(919 442)' fill='%23bce0fd'/%3E%3Cg id='_' data-name='+' transform='translate(630 343)'%3E%3Cpath id='Union_1' data-name='Union 1' d='M-4613,16V9h-7V7h7V0h2V7h7V9h-7v7Z' transform='translate(4921 111)' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A" />
          </div>
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
    modalVisible: state.rootReducer.showModal,
    activeCol: state.rootReducer.activeCol
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
  onShowModal: () => void,
  activeCol: ICol
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
