import React, { useEffect, useState } from 'react';
import Header from "../Header/Header"
import { GetAllPromos } from "../../Repositories/GetPromos";
import "./Ranking.css";

const Ranking = () => {
    const [allPromos, setAllPromos] = useState("");

    useEffect(() => {
        GetAllPromos().then((response) => setAllPromos(response.data));
    }, []);

    const promos = allPromos && allPromos.sort((a, b) => b.score-a.score);
    return (
        <>
            <Header />
            <ul className="list-group promos">
                {promos&& promos.map((promo, index) =>
                    <li className="row" key={index}>
                        <div className="col">
                            <img src={"Images/" + promo.logo}/>
                        </div>
                        <div className="col pseudo">{promo.nom}</div>
                        <div className="col score">{promo.score}</div>
                    </li>
                )}
            </ul>
        </>
    )
};

export default Ranking;