import React from 'react';
import { connect } from 'react-redux';
import { TextEditor, Video, Image, Button } from '../index';
import { ICol } from 'src/containers/Preview/Preview';

const ComponentMount: React.StatelessComponent<IComponentMount> = (props: IComponentMount) => {
  let toMountComponent = <TextEditor value={<div>Write something here</div>} />;
  
  switch(props.type){
    case 'text':
      toMountComponent = <div dangerouslySetInnerHTML={{__html: props.data}} />;
      break;
    case 'image':
      toMountComponent = <Image src={props.data.src} caption={props.data.caption} url={props.data.url} />;
      break;
    case 'button':
      toMountComponent = <Button label={props.data.label} url={props.data.url} block={props.data.block} type={props.data.type} />;
      break;
    case 'video':
      toMountComponent = <Video src={props.data.src} title={props.data.title} poster={props.data.poster} />;
      break;
    default:
      toMountComponent = (
        <div>
          Select a Component to edit
        </div>
      )
  }
  // const isActive:boolean = props.activeCol && props.activeCol.id === props.colId; 
  return (
    <div>
      { toMountComponent }
    </div>
  );
}

interface IComponentMount{
  type?: string, 
  data?: React.ReactElement | any,
  colId?: number,
  activeCol: ICol
}

const mapPropsToState = (state: any) => {
  return {
    activeCol: state.rootReducer.activeCol
  }
}

export default connect(mapPropsToState)(ComponentMount);