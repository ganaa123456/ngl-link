import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [zurwas, setZurwas] = useState("");
  const [bottomText, setBottomText] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const response = await Axios.post("http://localhost:8000/api/v1/message", {
      message: zurwas,
    });

    if (!zurwas) {
      setBottomText(<div>Талбар хоосон байна</div>);
    } else {
      setBottomText(<div>Илгээгдсэн</div>);
      setZurwas(" ");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submit(e);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submit} className="form-container">
        <p>Хэлэхийг хүссэн зүйлээ үлдээнэ үү</p>
        <textarea
          value={zurwas}
          name="text"
          onChange={(e) => setZurwas(e.target.value)}
          onKeyDown={handleKeyDown}
        />{" "}
        <br />
        <input className="button" type="submit" value="илгээх" />
        <div style={{ marginTop: 8 }}>{bottomText}</div>
      </form>
    </div>
  );
}

export default App;
