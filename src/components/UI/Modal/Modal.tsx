import React from 'react'

import './Modal.scss';
import { Modal } from 'react-bootstrap';

interface IModalProps{
  children?: any;
  show?: boolean;
  title?: string;
  size?: "sm"|"lg"|"xl";
  onHide?: any;
}

interface IModalState{
  show?: boolean
}

export default class WrapperModal extends React.Component<IModalProps, IModalState> {
  public state: IModalState = {
    show: true
  }

  public render() {
    return (
      <div className="ModalComponent">
        <Modal show={this.state.show} {...this.props}>
          <Modal.Body>
            <Modal.Title>{this.props.title}</Modal.Title>  
            {this.props.children}
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

