import React, {useState} from 'react'




export default function Textform(props) {
    const handleupClick = () =>{
        console.log("uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("convert to UpperCAse","success")

    }
    const handlelowClick = () =>{
        console.log("lowercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText)

    }
    const handleclearClick = () =>{
        console.log("clear was clicked" +text);
        let newText = '';
        setText(newText)

    }
   // const handlecopyclick = () => {
    //    console.log("copy was clicked" +text);
    //    let newText = text.navigator.clipboard.writeText(text);
    //  setText(newText)
   // }
    const copyText = () => {
       navigator.clipboard.writeText(text);
    }
     //   setText(newText)
    //}
    //const speak = () => {
    //    let msg = new SpeechSynthesisUtterance();
     //   msg.text = text;
     //   window.speechSynthesis.speak(msg);
     // }        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
     const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
}
    //const HighlightNumbers = React.createClass({
        //render() {
      //  const content = 'Hey my number is 555:555:5555.';
       // return (
        //    <span>
       //     {reactStringReplace(content, ':', (match, i) => (
       //         <div className="spacer"></div>
         //   ))}
          //  </span>
      //  );
     //   },
  //  });


//i have added a download file button by which u can download the text as a file
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value);

    }
    const [text, setText] = useState('');
    // text = 'new text'; //wrong way to change the state
    // setText("new Text"); //right way to change the state
    return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="Mybox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="Mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={copyText}>copy text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
        <button className='btn btn-primary mx-2' onClick={downloadTxtFile}>Download Text</button>
    </div>
    <div className="container my-5">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} <b> Word </b>and {text.length} <b>Characters</b> </p>
        <p><b>{0.008 * text.split(" ").length} Minutes read</b></p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    
    </>
    )
}

