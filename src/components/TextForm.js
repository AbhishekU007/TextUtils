import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared", "success");
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Spaces", "success");
    }

    const[text, setText] = useState('Enter text here');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="5"></textarea>
            </div>

            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your test summary</h2>
            <p>{text.split(" ").length} words</p>
            <p>{text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>

            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter something to preview it here.."}</p>
        </div>
        </>
  )
}
