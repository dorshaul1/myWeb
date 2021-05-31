

import './OptFooter.scss'

export const OptFooter = (props) => {

    return (
        <div>
            {types && types.map((opt, idx) => <div onClick={() => onAddCmp(types[idx])} className="opt-btn" key={idx} ><h4>{opt.name}</h4></div>)}
        </div>
    )
}

