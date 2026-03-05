import { useState } from "react"
import axios from "axios";
// import "./A"
function App(){

    const[text,setText]=useState("");
  const[video,setvideos]=useState([]);

const getVideos=async()=>{

  const res=await axios.post(
    "https://mood-api.onrender.com/mood",
    {text:text}
  );
setvideos(res.data);
}

return (
  <div className="app">
    <h1>Mood Based Recommender</h1>

    <input placeholder="How Is your mood ?" 
    onChange={(e)=>setText(e.target.value)}/>

    <button onClick={getVideos}>
      Predict
    </button>

    <div className="videos">
{ video.map(v=>(
      <iframe width="640" 
      key={v.id.videoId}
      height="360" 
      src={`https://www.youtube.com/embed/${v.id.videoId}`} 
      title="video"/>
))}
      </div>

  </div>
)
}

export default App;
