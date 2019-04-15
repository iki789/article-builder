import React from 'react';
import { TextEditor, Image, Video } from './index';

const ComponentMount = (props:{type: string, data?: any}) => {
  let toMountComponent = <TextEditor />;
  
  switch(props.type){
    case 'text':
      toMountComponent = <TextEditor />;
      break;
    case 'image':
      toMountComponent = <Image />;
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