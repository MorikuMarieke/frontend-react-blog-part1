import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
// import posts from '../../constants/data.json';
import axios from 'axios';
import './BlogDetail.css'
import dateStringFormat from "../../assets/helpers/dateStringFormat.js";


function BlogDetail() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        async function fetchPosts() {
            console.log("Het is gelukt")
            try {
                setError(null);
                const response = await axios.get('http://localhost:3000/posts');
                setPosts(response.data)
            } catch (err) {
                setError(err.message || "Unable to fetch post data.");
                console.error(err);
            }
        }

        fetchPosts();
    }, []);

    const {title, readTime, subtitle, author, created, content, comments, shares} = posts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <>
        {error ? (
                <article className="outer-container blog-detail-outer-container">
                    <div className="inner-container blog-detail">
                        <h1>Blogpost niet gevonden</h1>
                        <Link to="/alle-blog-posts" className="back-to-overview">Terug naar de overzichtspagina</Link>
                    </div>
                </article>
            ) : (
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
            )
        }
        </>
    );
}

export default BlogDetail;