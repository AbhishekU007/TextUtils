import React, { useState } from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
        color: '#212121',
        backgroundColor: 'white'
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")

    const toggleStyle = () =>{
        if(myStyle.color === '#212121'){
            setMyStyle({
                color: 'white',
                backgroundColor: '#212121',
            })
            setbtnText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color: '#212121',
                backgroundColor: 'white'
            })
            setbtnText("Enable Dark Mode");
        }
    }


  return (
    <div className="container" style={myStyle}>
        <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is TextUtils?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a simple web application designed to help you with quick and basic text formatting. Whether you want to convert your text to uppercase, lowercase, or clean up unnecessary spaces, TextUtils makes it effortless.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            What can I do with TextUtils?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            With TextUtils, you can:
            <ul><li>Convert text to uppercase or lowercase.</li>
            <li>Remove extra spaces between words.</li>
            <li>Copy the formatted text with just one click.</li></ul>
            It's an easy-to-use tool for anyone who works with text regularly.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            How do I use TextUtils?
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Using TextUtils is straightforward:

            <ul><li>Enter or paste your text into the input box.</li>
            <li>Choose the operation you want (e.g., convert to uppercase).</li>
            <li>Instantly view the formatted text and copy it if needed.</li></ul>
            </div>
            </div>
        </div>
        </div>

        <div className="container">
            <button onClick={toggleStyle} type='button' className='btn btn-dark my-3'>{btnText}</button>
        </div>

    </div>
  )
}
