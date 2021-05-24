

import './WCardPreview.scss'

export const WCardPreview = ({ card }) => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="card-preview">
            <h3>{card.title}</h3>
            <img src={card.img} alt={card.title}></img>
            <p>{card.description}</p>
            <button onClick={() => openInNewTab(card.link)}>About</button>
        </div>
    )
}

