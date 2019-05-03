import React from 'react';

class TextViewer extends React.Component<ITextViewerProps>{
  
  public state = {
    value: this.props.value,
    theme: this.props.theme
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
    const headings = parsedStringToHtml.querySelectorAll('h1, h2, h3, h4');
    headings.forEach((heading: HTMLElement) => {
      heading.style.color = props.theme;
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