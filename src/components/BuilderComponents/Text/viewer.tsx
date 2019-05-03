import React from 'react';

class TextViewer extends React.Component<ITextViewerProps>{
  
  public state = {
    value: this.props.value
  }
  
  public render(){
    return (
      <div>
        {this.state.value}
      </div>
    )
  }
}

interface ITextViewerProps{
  value: string
}

export default TextViewer;