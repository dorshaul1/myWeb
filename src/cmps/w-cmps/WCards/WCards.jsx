

import { WCardPreview } from '../WCardPreview/WCardPreview'
import './WCards.scss'

export const WCards = (props) => {
    const { SType, info } = props.cmp

    return (
        <div className={"wCards " + SType}>
            {info.cards.map((card, idx) => <WCardPreview key={idx} card={card}></WCardPreview>)}
        </div>
    )
}

