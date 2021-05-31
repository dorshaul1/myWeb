

import './OptDivider.scss'

export const OptDivider = ({ types, onAddCmp }) => {
    return (
        <div>
            {types && types.map((opt, idx) => <div onClick={() => onAddCmp(types[idx])} className="opt-btn" key={idx} ><h4>{opt.name}</h4></div>)}
        </div>
    )
}

