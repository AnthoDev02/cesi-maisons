import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { GetAllPromos } from "../../Repositories/Promo";

import "./Dashboard.css";

const Dashboard = () => {
  const [isopen, setIsopen] = useState(false);
  const [allPromos, setAllPromos] = useState("");
  const [modifScore, setModifScore] = useState([]);

  useEffect(() => {
    GetAllPromos().then((response) => {
      setAllPromos(response.data);
      let modifScoreArray = [];
      for (var i = 0; i < response.data.length; i++) {
        modifScoreArray.push({ id: i, value: 0 });
      }
      setModifScore(modifScoreArray);
    });
  }, []);

  const promos = allPromos && allPromos.sort((a, b) => b.score - a.score);

  const handleScore = (index, action, onChange) => {
    const shallowModifScore = { ...modifScore };
    const shallowItem = { ...shallowModifScore[index] };

    if (onChange === undefined) {
        if (action === "increase") {
            if (shallowItem.value < 99)shallowItem.value++;
        } else {
          if (shallowItem.value > -99) shallowItem.value--;
        }
    } else {
        if (onChange.target.value.length < 4) {
            shallowItem.value = onChange.target.value;
            shallowModifScore[index] = shallowItem;
        }
    }

    shallowModifScore[index] = shallowItem;
    setModifScore(shallowModifScore);
  };

  return (
    <div>
      <Header title="DASHBOARD" />
      <ul className="list-group promos">
        {promos &&
          promos.map((promo, index) => (
            <li
              style={{ backgroundColor: promo.couleur }}
              className="row"
              key={index}
            >
              <div className="col">
                <img src={"Images/" + promo.logo} />
              </div>
              <div className="col pseudo">{promo.nom}</div>
              <div className="col point">
                <button onClick={() => handleScore(index, "increase")}> + </button>
                <input
                  type="text"
                  onChange={(event) =>
                    handleScore(index, "", event)
                  }
                  className="modif-score"
                  value={modifScore[index]?.value}
                />
                <button
                  onClick={() => handleScore(index, "decrease")}> - </button>
              </div>
              <div className="col score">{promo.score}</div>
            </li>
          ))}
      </ul>
      {/* <p>
        <button type="button" onClick={() => setIsopen(!isopen)}>
          click
        </button>
      </p>
      {isopen && 
      <div className="card card-body">
        Some placeholder content for the collapse component. This panel is
        hidden by default but revealed when the user activates the relevant
        trigger.
      </div>} */}
    </div>
  );
};

export default Dashboard;
