

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCmp } from '../../store/actions/siteAction'
import { TypeCmp } from '../TypeCmp/TypeCmp'
import './EditorAdd.scss'

export const EditorAdd = () => {
    const dispatch = useDispatch()
    const [currType, setCurrType] = useState(null)
    const currSite = useSelector(state => state.siteReducer.currSite)

    const cmpTypes = ['Header', 'Footer', 'Map', 'Gallery', 'Text', 'Cards', 'Video', 'Divider', 'Form']

    const onAddCmp = (newCmp) => {
        dispatch(addCmp(currSite._id, {...newCmp}))
    }

    return (
        <div className="editorAdd flex justify-center">
            <div className="types-container flex justify-center wrap">
                {!currType && cmpTypes.map((type, idx) => <div onClick={() => setCurrType(type)} key={idx} className="type-btn">{type}</div>)}
                {currType && <TypeCmp type={currType} onAddCmp={onAddCmp} />}
                {currType && <div><button onClick={() => { setCurrType(null) }}>Back</button></div>}
            </div>
            {/* <h1>Add</h1> */}
        </div>
    )
}

