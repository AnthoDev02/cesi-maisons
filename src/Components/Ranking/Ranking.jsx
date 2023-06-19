import React from 'react';
import Header from "../Header/Header"
import data from "../../Data/data.json";
import "./Ranking.css";

const Ranking = () => {
    const promos = data.sort((a, b) => b.score-a.score);
    return (
        <>
            <Header />
            <ul className="list-group promos">
                {promos.map((promo, index) =>
                    <li class="row" key={index}>
                        <div class="col">
                            <img src={"Images/" + promo.image}/>
                        </div>
                        <div class="col pseudo">{promo.pseudo}</div>
                        <div class="col score">{promo.score}</div>
                    </li>
                )}
            </ul>
        </>
    )
};

export default Ranking;