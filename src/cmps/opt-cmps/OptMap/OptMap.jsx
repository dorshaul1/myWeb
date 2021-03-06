

import './OptMap.scss'


export const OptMap = ({ types, onAddCmp }) => {
    return (
        <div>
            {types && types.map((opt, idx) => <div onClick={() => onAddCmp(types[idx])} className="opt-btn" key={idx} ><h4>{opt.name}</h4></div>)}
        </div>
    )
}
