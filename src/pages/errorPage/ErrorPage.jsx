import React from "react";
import './ErrorPage.css';
import {NavLink} from "react-router-dom";

function ErrorPage() {
    return (
        <>

            <div className="outer-container error-container">
                <div className="inner-container error">
                    <h1>Error pagina</h1>
                    <p>Oops, er is iets fout gegaan klik <NavLink to="/">hier</NavLink> om terug naar de home-pagina te gaan.</p>
                </div>
            </div>

        </>
    )
}

export default ErrorPage;