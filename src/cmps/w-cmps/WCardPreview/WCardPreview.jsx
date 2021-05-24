

import './WCardPreview.scss'

export const WCardPreview = ({ card }) => {
    console.log(card);

    return (
        <div className="card-preview">
            <h3>{card.title}</h3>
            <img src={card.img} alt={card.title}></img>
            <p>{card.description}</p>
            <a href={card.link}>About</a>
        </div>
    )
}

