import React, {useEffect, useState} from "react";
import './Blog.css';
import InputField from "../../components/inputField/InputField.jsx";
import Button from "../../components/button/Button.jsx";
import readTimeCalculator from "../../assets/helpers/readTimeCalculator.js";
import {NavLink, useNavigate} from "react-router-dom";
import axios from 'axios';


function Blog() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });

    const [successMessage, setSuccessMessage] = useState(false);
    const [newBlogId, setNewBlogId] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(event) {
        setErrorMessage(false);
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/posts`,
                {
                    ...formData,
                    shares: 0,
                    comments: 0,
                    created: new Date().toISOString(),
                    readTime: readTimeCalculator(formData.content),
                });
            setNewBlogId(response.data.id);
            console.log('De blog is succesvol verzameld! 🌈');
            setSuccessMessage(true);
            // navigate(`/blog/${newBlogId}`);
        } catch (err) {
            console.error(err);
            setErrorMessage(true)
        }
    }

    const handleInputChange = (e) => {
        const currentDate = new Date().toISOString();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            comments: 0,
            shares: 0,
            created: currentDate,
            readTime: readTimeCalculator(formData.content),
        });
    };

    return (
        <div className="outer-container blog-post-outer-container">
            <div className="inner-container blog">
                <h1>Post toevoegen</h1>
                {errorMessage && (
                    <p className="error-text">Er is iets fout gegaan. Probeer het opnieuw.</p>
                )};
                {successMessage && (
                    <p>Blogpost succesvol toegevoegd! Je kunt deze <NavLink to={`/blog/${newBlogId}`}>hier</NavLink> bekijken.</p>
                )}
                {!successMessage && (
                <form className="submit-blog-post" onSubmit={handleSubmit}>
                    <InputField
                        inputText="Titel"
                        type="text"
                        id="title"
                        name="title"
                        className="input-field"
                        onChange={handleInputChange}
                        value={formData.title}
                        placeholder="Vul hier de titel van de blogpost in..."
                        required={true}
                    />
                    <InputField
                        inputText="Subtitel"
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        className="input-field"
                        onChange={handleInputChange}
                        value={formData.subtitle}
                        placeholder="Vul hier de subtitel van de blogpost in..."
                        required={true}
                    />
                    <InputField
                        inputText="Naam en achternaam"
                        type="text"
                        id="author"
                        name="author"
                        className="input-field"
                        onChange={handleInputChange}
                        value={formData.author}
                        placeholder="Vul hier je voor- en achternaam in..."
                        required={true}
                    />
                    <label htmlFor="blogPostText">
                        Blogpost
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        className="blog-post-text"
                        onChange={handleInputChange}
                        value={formData.content}
                        required={true}
                        cols="30"
                        rows="10"
                        minLength="300"
                        maxLength="2000"
                        placeholder="Schrijf hier de inhoud van de blogpost..."
                    ></textarea>
                    <Button
                        type="submit"
                        className="form-submit-button"
                        buttonText="Toevoegen"
                    />
                </form>
                )};
            </div>
        </div>
    )
}

export default Blog;