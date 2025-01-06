import React, {useEffect, useState} from "react";
import './AllPosts.css';
// import posts from '../../constants/data.json';
import axios from 'axios';

import {Link} from "react-router-dom";

function AllPosts() {

    const [allPosts, setAllPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAllPosts() {
            console.log("Fetching all posts...")
            try {
                setError(null);
                const response = await axios.get('http://localhost:3000/posts');
                console.log(response);
                setAllPosts(response.data);
            } catch (err) {
                setError(err.message || "Unable to fetch data.");
                console.error(err);
            }
        }

        fetchAllPosts();
    }, []);

    return (
        <div className="outer-container all-posts-outer-container">
            <div className="inner-container all-posts">
                <h1>Overzicht van alle {allPosts.length} blogposts op Blogventure</h1>
                {error ? (
                    <p className="error-message">Error: {error}</p>
                ) : (
                    <ul className="all-posts-list">
                        {allPosts.map((post) =>
                            <li key={post.id} className="post-item">
                                <h2 className="blog-post-title"><Link
                                    to={`/blog/${post.id}`}>{post.title} ({post.author})</Link></h2>
                                <p className="blog-post-info">{post.comments} reacties - {post.shares} keer gedeeld</p>
                            </li>)}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default AllPosts;