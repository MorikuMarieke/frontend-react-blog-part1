import React from "react";
import './AllPosts.css';
import posts from '../../constants/data.json';
import {Link} from "react-router-dom";

function AllPosts() {
    return (
        <div className="outer-container all-posts-outer-container">
            <div className="inner-container all-posts">
                <h1>Overzicht van alle {posts.length} blogposts op Blogventure</h1>
                <ul className="all-posts-list">
                    {posts.map((post) => {
                        return <li key={post.id} className="post-item">
                            <h2 className="blog-post-title"><Link to={`/blog/${post.id}`}>{post.title} ({post.author})</Link></h2>
                            <p className="blog-post-info">{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default AllPosts;