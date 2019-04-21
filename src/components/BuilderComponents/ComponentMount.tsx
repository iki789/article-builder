import React from 'react';
import { TextEditor, Video, Image, Button } from './index';

const ComponentMount = (props:{type?: string, data?: React.ReactElement | any}) => {
  let toMountComponent = <TextEditor value={<div>Write something here</div>} />;
  
  switch(props.type){
    case 'text':
      toMountComponent = <div dangerouslySetInnerHTML={{__html: props.data}} />;
      break;
    case 'image':
      toMountComponent = <Image src={props.data.src} caption={props.data.caption} url={props.data.url} />;
      break;
    case 'button':
      toMountComponent = <Button label={props.data.label} />;
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