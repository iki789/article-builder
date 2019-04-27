import React from 'react';
import { TextEditor, ImageForm, VideoControl, ButtonControl } from './index';

const ComponentMount = (props:{type?: string, data?: React.ReactElement | any}) => {
  let toMountComponent: any ;
  switch(props.type){
    case 'text':
      toMountComponent = <TextEditor value={props.data} />;
      break;
    case 'image':
      toMountComponent = <ImageForm src={props.data.src} />;
      break;
    case 'video':
      toMountComponent = <VideoControl src={props.data.src} />;
      break;
    case 'button':
      toMountComponent = <ButtonControl label={props.data.label} url={props.data.url} block={props.data.block} />;
      break;
    default:
      toMountComponent = null
  }
  
  const handleRemove = () => {
    const remove:boolean = confirm("Are you sure you want to remove this component?");
    if(remove){
      // Do something
    }
  }

  return (
    <div>
      { toMountComponent ? toMountComponent : <div style={{textAlign: 'center'}}>Select a component to edit</div> }
      {/* Remove button */}
      { toMountComponent ? <div className="form-group mt-1"><button onClick={handleRemove} className="btn btn-sm btn-primary">Remove</button></div> : null }
    </div>
  );
}

export default ComponentMount;