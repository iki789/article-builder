import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import './TextEditor.scss';
import ReactQuill from 'react-quill';

class TextEditor extends React.Component<ITextEditorProps>{
  constructor(props: ITextEditorProps) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }
  
  public handleChange(value:any) {
    this.setState({ text: value })
  }

  public render(){
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['link', 'image'],
        ['clean'],
        [{ 'header': [1, 2, 3, 4, false] }],
      ],
    };
  
    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ];
    
    const editorValue = ReactDOMServer.renderToStaticMarkup(this.props.value);

    return (
      <div>
        <ReactQuill
          formats={formats}
          modules={modules} 
          value={editorValue}
          onChange={this.handleChange}
          theme="snow"/> 
      </div>
    )
  }
}

export default TextEditor;

interface ITextEditorProps{
  value: React.ReactElement<any>
}