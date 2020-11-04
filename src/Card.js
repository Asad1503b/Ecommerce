import React from 'react'
import './style.css'

const Card = (props) => {
    return (
        <div className="cards">
            <div className="card">
                <img src={props.img} className="card_img" alt="there was an IMG" />
                <div className="card_info">
                    <span className="card_category"></span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.links} target="_blank">
                        <button>WatchNow</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
