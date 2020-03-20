import React, { Component } from "react";
import Quill from "quill";
import {} from "quill";
import "./editor.css";
import "./quill.snow.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      delta: {}
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const toolbarOptions = [];
    const quill = new Quill(".ql-editor", {
      modules: {
        toolbar: [
          [{ size: ["small", false, "large", "huge"] }],
          [{ header: 1 }, { header: 2 }],
          [{ color: [] }, { background: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          ["blockquote", "code-block"],
          [{ align: [] }],
          toolbarOptions,
          ["image", "code-block"],
          ["clean"]
        ]
      },
      syntax: true,
      readOnly: false,
      placeholder: "write the content here..",
      theme: "snow"
    });

    quill.on("text-change", function(eventName, ...args) {
      document.getElementById("preview").innerHTML = quill.root.innerHTML;
    });
  }

  onChange(evt) {
    //  event to publish the article
  }

  render() {
    return (
      <div className="m-3">
        <h2 className="title text-center">Text editor</h2>
        <div className="ql-editor"></div>
        <div className="col-sm-3 p-2 ml-auto">
          <button
            className="btn btn-info btn-sm btn-block shadow-sm"
            type="button"
            onClick={this.onChange}
          >
            Publish
          </button>
        </div>
        <h5 className="title text-center">Preview</h5>
        <hr />
        <div
          id="preview"
          className="ql-editor quill-container col-sm-12 text-break"
        >
          {this.state.content}
        </div>
      </div>
    );
  }
}

export default Editor;
