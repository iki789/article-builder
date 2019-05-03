import React from 'react';

class TextViewer extends React.Component<ITextViewerProps>{
  
  public state = {
    value: this.props.value
  }
  
  public componentWillUpdate(nextProps: ITextViewerProps){
    if(this.state.value !== nextProps.value){
      this.state.value = nextProps.value;
    }
  }

  public render(){
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.value}} />
    )
  }
}

interface ITextViewerProps{
  value: string
}

export default TextViewer;