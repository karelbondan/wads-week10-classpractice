import React, { useEffect, useState } from "react";

const Home = () => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/heroes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json())
      .then((res) => {
        setHero(res)
        console.log(hero)
      })
  }, [])

  return (

    <div className="home_1">
      <div className="home_2">
        <div className="home_3">
          <h3>Heroes</h3>
        </div>
        <div className="heroes_container">
          <div className="list">
            <ul className="list_item">
              {hero.length ?
                hero.map((pahlawan, index) => {
                  return <li key={`${index}_${pahlawan.name}`}>Name: {pahlawan.name}<br />Alias: {pahlawan.alias}</li>
                })
                :
                <li>No heroes yet</li>
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="home_0"></div>
    </div>


  );
}

export default Home;
