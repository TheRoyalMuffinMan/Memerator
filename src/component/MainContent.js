import React from "react";
import memeData from "../memesData";

const memes = memeData.data.memes

export default function MainContent() {
    const [memeImage, setMemeImage] = React.useState(memeData.data.memes[0].url);

    function getMemeImage(event) {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * memes.length);
        const meme = memes[randNum]
        const url = meme.url
        setMemeImage(url);

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
            <img src={memeImage} />
        </main>
    );
}