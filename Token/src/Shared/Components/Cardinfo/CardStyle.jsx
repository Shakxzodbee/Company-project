import React, { useState } from 'react';
import { cardData } from './CardData';
import 'animate.css';
import '../../../assets/styles/CardStyle.css';

function CardStyle() {
    const [activeGroup, setActiveGroup] = useState("all");

    const handleGroupChange = (group) => {
        setActiveGroup(group);
    };

    const filteredCards = activeGroup === "all"
        ? cardData
        : cardData.filter(card => card.group === activeGroup);

    return (
        <div className="app">
            <h1 className="title">Fast & Scalable Infrastructure</h1>
            <div className="button-group">
                <button onClick={() => handleGroupChange("all")}>All</button>
                <button onClick={() => handleGroupChange("AI")}>For Individuals</button>
                <button onClick={() => handleGroupChange("Signals")}>For Businesses</button>
                <button onClick={() => handleGroupChange("Capital")}>DeFi</button>
            </div>
            <div className="card-container">
                {filteredCards.map((card, index) => (
                    <div key={index} className="card animate__animated animate__fadeIn">
                        <img src={card.imageUrl} alt={card.title} />
                        <h2 className='title-h2'>{card.title}</h2>
                        <p className='title-p'>{card.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardStyle;