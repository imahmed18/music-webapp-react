import React from 'react'
import "./Body.css"
import Header from "./Header"

function Body({spotify}) {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">

                <img src="https://image.slidesharecdn.com/copyofspotifydiscoverweekly-170701234254/95/spotify-discover-weekly-the-machine-learning-behind-your-music-recommendations-1-638.jpg?cb=1498952892" alt="" />

                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description...</p>
                </div>
            </div>
        </div>
    )
}

export default Body
