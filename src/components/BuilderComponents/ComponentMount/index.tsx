import React from 'react';
import { connect } from 'react-redux';
import { TextEditor, TextViewer, Video, Image, Button, Embed } from '../index';
import { ICol } from 'src/containers/Preview/Preview';
import { ACTIVATE_COL, UNSET_COL } from '../../../store/actions/app';
import './ComponentMount.scss';

const ComponentMount: React.StatelessComponent<IComponentMountProps> = (props: IComponentMountProps) => {
  let toMountComponent = <TextEditor value={<div>Write something here</div>} />;
  
  switch(props.type){
    case 'text':
      toMountComponent = <TextViewer value={props.data} theme={props.theme} />;
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
    case 'embed':
      toMountComponent = <Embed code={props.data.code} />;
      break;
    default:
      toMountComponent = (
        <div>
          Select a Component to edit
        </div>
      )
  }
  const isActive:boolean = props.activeCol && props.activeCol.id === props.colId; 
  const classes: string[] = ['ComponentMount'];
  if(isActive){
    // classes.push('active');
  }
  const handleClick = () => {
    if(isActive){
      // props.deactivateCol();
    }else{
      const col: ICol = {
        id: props.colId || 0,
        type: props.type || 'text',
        data: props.data || null
      };
      props.activateCol(col)
    }
  }
  return (
    <div className={classes.join(' ')} onClick={handleClick}>
      { toMountComponent }
    </div>
  );
}

interface IComponentMountProps{
  type?: string, 
  data?: React.ReactElement | any,
  colId?: number,
  activeCol: ICol,
  theme: string,
  deactivateCol: () => void,
  activateCol: (col: ICol) => void
}

const mapStateToProps = (state: any) => {
  return {
    activeCol: state.rootReducer.activeCol,
    theme: state.PreviewReducer.settings.theme
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    deactivateCol: () => dispatch(UNSET_COL()),
    activateCol: (payload: ICol) => dispatch(ACTIVATE_COL(payload))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ComponentMount);