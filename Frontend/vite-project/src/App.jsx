import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [text, setText] = useState("");
  const [video, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getVideos = async () => {

    try {
      setLoading(true);

      const res = await axios.post(
        "https://mood-based-youtube-recommend-3.onrender.com/mood",
        { text: text }
      );

      setVideos(res.data);
    } catch (err) {
      console.log(err);
      alert("Error fetching videos");
    }

    setLoading(false);
  };

  return (
    <div className="app">

      <h1>🎵 Mood Based YouTube Recommender</h1>

      <div className="search-box">

        <input
          placeholder="How is your mood today?"
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={getVideos}>
          Predict Mood
        </button>

      </div>

      {loading && <div className="loader"></div>}

      <div className="videos">

        {video.map((v) => (
          <iframe
            key={v.id.videoId}
            src={`https://www.youtube.com/embed/${v.id.videoId}`}
            title="video"
          />
        ))}

      </div>

    </div>
  );
}

export default App;
