import React , {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to Uppercase","success");
    }

    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to Lowercase","success");
    }

    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Clear Text","success");
    }

    const handleCopy = () =>{
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
        props.showAlert("Copy Text","success");
    }
    const handleExtraSpaces = () =>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("Remove Extra spaces","success");
    }




    const handleOnChange = (event)=>{
        //console.log("On change")
        setText(event.target.value);
    }

    

    // const speak = () => {
    //     let msg = new SpeechSynthesisUtterance();
    //     msg.text = text;
    //     window.speechSynthesis.speak(msg);
    //   }







    const[text,setText] = useState('');
    //text = "new text"; wrong way to change th state
    //setText("new text"); correct wau=y to change th state 



  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>  
    <h1 className='mb-3'>{props.heading}</h1>   
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="10"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
    <button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove extra spaces from text</button>
    {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}
    </div>
    <div className='container my-5' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
        <h2>Preview</h2>
        <p >{text.length>0?text:" Nothing preview"}</p>
    </div>
    </>
  )
}
