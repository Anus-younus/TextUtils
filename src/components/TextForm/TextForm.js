import React from 'react'
import { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
    }
    const handleMoClick = (e) => {
        setText(e.target.value)
    }
    const clearText = () => {
        setText("")
    }
    const removeSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const copyText = () => {
        navigator.clipboard.writeText(text)
    }
  return (
    <>
        <div className={`mb-3 bg-${props.mode === "dark"? "dark": "light"} text-${props.mode === "dark"? "light": "dark"}`}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Yext here</label>
        <textarea value={text} onChange={handleMoClick} className={`form-control bg-${props.mode === "dark"? "dark": "light"}`}id="exampleFormControlTextarea1" rows="8"></textarea>
        <button disabled={text === ""} onClick={handleUpClick} className="btn btn-primary mx-3 my-3">Convert to UpperCase</button>
        <button disabled={text === ""} onClick={handleLoClick} className="btn btn-primary mx-3 my-3">Convert to LowerCase</button>
        <button disabled={text === ""} onClick={clearText} className="btn btn-primary mx-3 my-3">Clear Text</button>
        <button disabled={text === ""} onClick={removeSpaces} className="btn btn-primary mx-3 my-3">Remove Spaces</button>
        <button disabled={text === ""} onClick={copyText} className="btn btn-primary mx-3 my-3">Copy Text</button>
        <p className='my-4'>Words {text.split(" ").filter((ele) => {return ele.length !== 0}).length} charcters {text.length}</p>
        <p>{0.008 * text.split(" ").filter((ele) => {return ele.length !== 0}).length} time to read</p>
        <h1>Preview Text</h1>
        <p>{text === ""? "Enter some text to Preview": text}</p>
        </div>
    </>
  )
}

export default TextForm
