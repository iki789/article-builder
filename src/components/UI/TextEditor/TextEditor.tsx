import * as React from 'react';

import './TextEditor.scss';
import ReactQuill from 'react-quill';

class TextEditor extends React.Component{
  public state={
    text: ''
  }

  constructor(props:any) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
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

    return (
      <div>
        <ReactQuill
          formats={formats}
          modules={modules} 
          value={this.state.text}
          onChange={this.handleChange}
          theme="snow"/> 
      </div>
    )
  }
}

export default TextEditor;