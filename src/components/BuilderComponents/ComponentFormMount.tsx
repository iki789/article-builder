import React from 'react';
import { TextEditor, ImageForm, Video } from './index';

const ComponentMount = (props:{type?: string, data?: React.ReactElement | any}) => {
  let toMountComponent = <TextEditor value={<div>Write something here</div>} />;
  
  switch(props.type){
    case 'text':
      toMountComponent = <TextEditor value={props.data} />;
      break;
    case 'image':
      toMountComponent = <ImageForm src={props.data.src} />;
      break;
    case 'video':
      toMountComponent = <Video />;
      break;
    default:
      toMountComponent = (
        <div>
          Select a Component to edit
        </div>
      )
  }
  return (
    <div>
      { toMountComponent }
    </div>
  );
}

export default ComponentMount;