import React from "react";
import './Home.css';
import billboard from '../../assets/billboard-logo.png';

function Home() {
    return (<div className="outer-container home-container">
        <div className="inner-container home">
            <h1>Bij Blogventure geloven we in de kracht van woorden*</h1>
            <section className="home-page-text">
                <p>We geloven dat iedereen een verhaal te vertellen heeft, avonturen te delen en kennis te verspreiden.
                    Daarom hebben we een platform
                    gecreëerd waar creativiteit, passie en ontdekking samenkomen.</p>
                <p>Of je nu een doorgewinterde schrijver bent of gewoon je gedachten wilt delen, Blogventure is de
                    plek waar jouw stem wordt gehoord. Duik in een wereld van verhalen, reizen, koken, en nog veel
                    meer. Ontdek nieuwe perspectieven en maak deel uit van een gemeenschap van gepassioneerde
                    bloggers.</p>
                <p>Dus waar wacht je nog op? Stap aan boord van deze spannende reis en laat jouw avontuur beginnen op
                    Blogventure!</p>
            </section>
            <figure className="billboard-image-wrapper">
                <img src={billboard} alt="Afbeelding van een schreeuwerig billboard"/>
                <figcaption>*En in billboards. Die zijn niet te missen namelijk.</figcaption>
            </figure>
        </div>
    </div>)
}

export default Home;