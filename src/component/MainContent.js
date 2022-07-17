import React from "react";
import memeData from "../memesData";

export default function MainContent() {
    const [allMemes, setAllMemes] = React.useState(memeData.data.memes);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function getMemeImage(event) {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * allMemes.length);
        const currMeme = allMemes[randNum];
        const url = currMeme.url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            };
        });
    }

    return (
        <main>
            <form className="form">
                <div className="form-inputs">
                    <input 
                        type="text"
                        placeholder="Shut up" 
                    />
                    <input
                        type="text"
                        placeholder="and take my money"  
                    />
                </div>
                <button 
                    onClick={getMemeImage} 
                    className="form-btn"
                >
                    Get a New Meme Image 🖼
                </button>
            </form>
            <img src={meme.randomImage} />
        </main>
    );
}