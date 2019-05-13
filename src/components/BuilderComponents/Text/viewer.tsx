import React from 'react';
import color from 'color';

class TextViewer extends React.Component<ITextViewerProps>{
  
  public state = {
    value: this.props.value,
    theme: this.props.theme
  }
  
  public componentWillMount(){
    this.state.value = this.addThemeColorToHtml(this.props);
  }

  public componentWillUpdate(nextProps: ITextViewerProps){
    if(this.state.value !== nextProps.value){
      this.state.value = this.addThemeColorToHtml(nextProps);
    }
  }

  public render(){
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.value}} />
    )
  }

  private addThemeColorToHtml = (props: ITextViewerProps): string => {
    const parsedStringToHtml = document.createElement('div');
    parsedStringToHtml.innerHTML = props.value ;
    const elements = parsedStringToHtml.querySelectorAll('h1, h2, h3, h4, blockquote');
    elements.forEach((tag: HTMLElement) => {
      if(tag.nodeName === 'H1' || tag.nodeName === 'H2' || tag.nodeName === 'H3' || tag.nodeName === 'H4'){
        tag.style.color = props.theme;
      }
      if(tag.nodeName === 'BLOCKQUOTE'){
        tag.style.backgroundColor = color(props.theme).alpha(0.1).toString()
        tag.style.borderColor = props.theme
      }
    });
    // Return string
    return parsedStringToHtml.outerHTML;
  }

}

interface ITextViewerProps{
  value: string,
  theme: string
}

export default TextViewer;