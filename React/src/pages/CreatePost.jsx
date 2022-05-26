import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [hero, setHero] = useState({
    name: "",
    alias: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHero({ ...hero, [e.target.name]: e.target.value })
  }

  const postHero = async (e) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8000/heroes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(hero)
    }).then((e) => {
      setHero({ name: "", alias: "" })
      console.log(e)
      navigate("/")
    })
  }

  return (
    <div className="home_1">
      <div className="home_2">
        <div className="home_3"><h3>Submit your hero</h3></div>
        <div className="home_5">
          <form>
            <label >Name</label>
            <input type="text" name="name" onChange={handleChange} autoComplete="off"></input>
            <label >Alias</label>
            <input type="text" name="alias" onChange={handleChange} autoComplete="off"></input>
            <div className="home_6"><button onClick={postHero}>Submit</button></div>
          </form>
        </div>
      </div>
      <div className="home_0"></div>
    </div>
  );
}

export default CreatePost;
