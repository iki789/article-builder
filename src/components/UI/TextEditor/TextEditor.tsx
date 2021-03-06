import * as React from "react";
import "./TextEditor.scss";
import ReactQuill from "react-quill";

class TextEditor extends React.Component<ITextEditorProps> {
  public QuillRef: React.RefObject<ReactQuill>;

  constructor(props: ITextEditorProps) {
    super(props);
    this.QuillRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  public componentDidMount() {
    if (this.QuillRef.current) {
      this.QuillRef.current.focus();
    }
  }

  public handleChange(value: any) {
    this.props.onChange(value);
  }

  public render() {
    const modules = {
      toolbar: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
        [{ header: [1, 2, 3, 4, false] }],
      ],
    };

    const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
    ];

    return (
      <div>
        <ReactQuill
          ref={this.QuillRef}
          formats={formats}
          modules={modules}
          value={this.props.value}
          onChange={this.handleChange}
          theme="snow"
        />
      </div>
    );
  }
}

export default TextEditor;

interface ITextEditorProps {
  value: string;
  onChange: (value: string) => any;
}
