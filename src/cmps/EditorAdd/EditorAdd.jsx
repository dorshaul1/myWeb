

import { useState } from 'react'
import './EditorAdd.scss'

export const EditorAdd = (props) => {
const cmpTypes =['Header','Footer','Map','Gallery','Text','Cards','Video','Divider','Form']
    return (
        <div className="editorAdd flex justify-center wrap">
            <div className="types-container flex justify-center wrap">

            {cmpTypes.map((type,idx)=><div key={idx} className="type-btn">{type}</div>)}
            </div>
        {/* <h1>Add</h1> */}

        </div>
    )
}

