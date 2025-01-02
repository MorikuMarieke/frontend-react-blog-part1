import React, {useState} from "react";
import './Blog.css';
import InputField from "../../components/inputField/InputField.jsx";
import Button from "../../components/button/Button.jsx";


function Blog() {

    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="outer-container blog-post-outer-container">
            <div className="inner-container blog">
                <h1>Post toevoegen</h1>
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
            </div>
        </div>
    )
}

export default Blog;