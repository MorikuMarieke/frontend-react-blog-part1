//blog detail page

import React from 'react';
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import './BlogDetail.css'
import dateStringFormat from "../../assets/helpers/dateStringFormat.js";


function BlogDetail() {

    const { id } = useParams();

    const matchingPost = posts.find((post) => post.id.toString() === id);

    if (!matchingPost) {
        return <h1>Blogpost niet gevonden</h1>
    }

    const {title, readTime, subtitle, author, created, content, comments, shares} = posts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <article className="outer-container blog-detail-outer-container">
            <div className="inner-container blog-detail">
                <h1>{title} ({readTime} minuten)</h1>
                <h2>{subtitle}</h2>
                <p>Geschreven door {author} op {dateStringFormat(created)}</p>
                <p>{content}</p>
                <p>{comments} reacties | {shares} keer gedeeld.</p>
                <Link to="/alle-blog-posts" className="back-to-overview">Terug naar de overzichtspagina</Link>
            </div>
        </article>
    );
}

export default BlogDetail;