import React from 'react';

class TextViewer extends React.Component<ITextViewerProps>{
  
  public state = {
    value: this.props.value
  }
  
  public componentWillUpdate(nextProps: ITextViewerProps){
    if(this.state.value !== nextProps.value){
      this.state.value = this.parseHtmlStringToAddThemeColor(nextProps.value);
    }
  }

  public render(){
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.value}} />
    )
  }

  private parseHtmlStringToAddThemeColor = (HtmlString: string): string => {
    const parsedStringToHtml = document.createElement('div');
    parsedStringToHtml.innerHTML = HtmlString ;
    const headings = parsedStringToHtml.querySelectorAll('h1, h2, h3, h4');
    headings.forEach((heading: HTMLElement) => {
      heading.style.color = "red";
    });
    // Return string
    return parsedStringToHtml.outerHTML;
  }

}

interface ITextViewerProps{
  value: string
}

export default TextViewer;