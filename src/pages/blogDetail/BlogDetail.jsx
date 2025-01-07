import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
// import posts from '../../constants/data.json';
import axios from 'axios';
import './BlogDetail.css'
import dateStringFormat from "../../assets/helpers/dateStringFormat.js";


function BlogDetail() {
    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        async function fetchPost() {
            try {
                setError(null);
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                setPost(response.data);
                console.log(`Het ophalen van post ${response.data.id} ${response.data.title} is gelukt`);
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setError("Post not found. The requested post does not exist.")
                }
                else {
                    setError(err.message || "Unable to fetch post data.");
                }
                console.error(err);
            }
        }

        fetchPost();
    }, []);

    const {title, readTime, subtitle, author, created, content, comments, shares} = post;

    return (
        <>
            {error ? (
                <article className="outer-container blog-detail-outer-container">
                    <div className="inner-container blog-detail">
                        <article className="blog-card">
                            <h1>Blogpost niet gevonden</h1>
                            <p>{error}</p>
                            <Link to="/alle-blog-posts" className="back-to-overview">Terug naar de
                                overzichtspagina</Link>
                        </article>
                    </div>
                </article>
                ) : (
                <article className="outer-container blog-detail-outer-container">
                    <div className="inner-container blog-detail">
                        <article className="blog-card">
                            <h1>{title} ({readTime} minuten)</h1>
                            <h2>{subtitle}</h2>
                            <p>Geschreven door {author} op {dateStringFormat(created)}</p>
                            <p>{content}</p>
                            <p>{comments} reacties | {shares} keer gedeeld.</p>
                            <Link to="/alle-blog-posts" className="back-to-overview">Terug naar de
                                overzichtspagina</Link>
                        </article>
                    </div>
                </article>
            )
            }
        </>
    );
}

export default BlogDetail;