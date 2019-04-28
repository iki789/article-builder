import React from 'react';
import { connect } from 'react-redux';
import { UNSET_COL } from '../../store/actions/app';
import { REMOVE_COL } from '../../containers/Preview/store/actions';
import { TextEditor, ImageForm, VideoControl, ButtonControl } from './index';
import { ICol } from 'src/containers/Preview/Preview';

const ComponentMount = (props:IComponentFormMoutProps) => {
  let toMountComponent: any ;
  switch(props.type){
    case 'text':
      toMountComponent = <TextEditor value={props.data} />;
      break;
    case 'image':
      toMountComponent = <ImageForm src={props.data.src} caption={props.data.caption} url={props.data.url} />;
      break;
    case 'video':
      toMountComponent = <VideoControl src={props.data.src} title={props.data.title}  poster={props.data.poster} />;
      break;
    case 'button':
      toMountComponent = <ButtonControl label={props.data.label} url={props.data.url} type={props.data.type} block={props.data.block} />;
      break;
    default:
      toMountComponent = null
  }
  
  const handleRemove = () => {
    const remove:boolean = confirm("Are you sure you want to remove this component?");
    if(remove){
      props.removeCol(props.activeCol.id);
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

interface IComponentFormMoutProps{
  type?: string, 
  data?: React.ReactElement | any,
  removeCol: (id: number) => void,
  activeCol: ICol
}

const mapStateToProps = (state: any) => {
  return {
    activeCol: state.rootReducer.activeCol
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeCol: (id: number) => {
      dispatch(UNSET_COL());
      dispatch(REMOVE_COL(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentMount);