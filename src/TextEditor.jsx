import React, { useCallback } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"
const TextEditor = () => {
    // const wrapperRef = useRef();
    const wrapperRef = useCallback((wrapper)=>{
        if(wrapper==null)return;
        wrapper.innerHTML = "";
        const editor = document.createElement("div");
        wrapper.append(editor);

        // return ()=>{
        //     // wrapperRef.innertHTML = '';
        // }
        new Quill('#container', {theme:'snow'});
    },[]);
  return (
    <div id='container' ref={wrapperRef}></div>
  )
}

export default TextEditor
