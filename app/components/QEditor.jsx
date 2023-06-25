import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
var icons = ReactQuill.Quill.import("ui/icons");
icons.bold = null;
icons.italic = null;
icons.underline = null;
icons.list = null;
icons.align = null;
icons["list-ordered"] = null;
icons["list-bullet"] = null;
icons["align-center"] = null;
icons["align-right"] = null;
icons["align-justify"] = null;
icons["align-left"] = null;
import BoldIcon from "../../public/assets/toolbar/bold.svg";
import ItalicIcon from "../../public/assets/toolbar/italic.svg";
import UnderlineIcon from "../../public/assets/toolbar/underline.svg";
import ListIcon from "../../public/assets/toolbar/number.svg";
import AlignIcon from "../../public/assets/toolbar/dot.svg";
import AlignCenterIcon from "../../public/assets/toolbar/center.svg";
import AlignRightIcon from "../../public/assets/toolbar/right.svg";
import AlignJustifyIcon from "../../public/assets/toolbar/justify.svg";
import Image from "next/image";

const QuillEditor = ({ data, setData }) => {
  console.log(data);

  const modules = {
    // syntax: true,
    toolbar: {
      container: "#toolbar",
    },
  };

  const formats = ["bold", "italic", "underline", "list", "align"];

  return (
    <div>
      <div className="flex items-center gap-3 " id="toolbar">
        {}
        <button className="ql-bold hover:bg-secondary ">
          <Image src={BoldIcon} alt="bold" />
        </button>
        <button className="ql-italic hover:bg-secondary">
          <Image src={ItalicIcon} alt="ItalicIcon" />
        </button>
        <button className="ql-underline hover:bg-secondary">
          <Image src={UnderlineIcon} alt="UnderlineIcon" />
        </button>
        <button className="ql-list" value="ordered">
          <Image src={ListIcon} alt="ListIcon" />
        </button>
        <button className="ql-list hover:bg-secondary" value="bullet">
          <Image src={AlignIcon} alt="AlignIcon" />
        </button>
        <button className="ql-align hover:bg-secondary" value="center">
          <Image src={AlignCenterIcon} alt="AlignCenterIcon" />
        </button>
        <button className="ql-align hover:bg-secondary" value="right">
          <Image src={AlignRightIcon} alt="AlignRightIcon" />
        </button>
        <button className="ql-align hover:bg-secondary" value="justify">
          <Image src={AlignJustifyIcon} alt="AlignJustifyIcon" />
        </button>
      </div>
      <ReactQuill
        modules={modules}
        value={data}
        onChange={setData}
        formats={formats}
        theme="snow"
      />
    </div>
  );
};

export default QuillEditor;
