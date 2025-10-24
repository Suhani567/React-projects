import { useState } from 'react'
import './App.css'

function App() {
  const [name,setName] = useState("");
  const [feedback,setFeedback] = useState("");
  const [submitted,setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.trim() === "" || feedback.trim() === "") return alert("Please fill both the fields");
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setFeedback("");
    setSubmitted(false);
  };

  return (
   <div className="container">
    <h1>Feedback Form</h1>
    {!submitted ? (
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Your name..' 
        value={name}
        onChange={(e) => setName(e.target.value)}/>

        <textarea placeholder='Your feedback..'
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}></textarea>

        <button type='submit'>Submit</button>
      </form>
    ):(
      <div className="thankyou">
        <h2>Thank You, {name}!</h2>
        <p>Your feedback: "{feedback}"</p>
        <button onClick={handleReset}> Submit Another</button>
      </div>
    )}
   </div>
  )
}

export default App
