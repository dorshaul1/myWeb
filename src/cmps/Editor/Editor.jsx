

import { useState } from 'react'
import { EditorAdd } from '../EditorAdd/EditorAdd'
import { EditorEdit } from '../EditorEdit/EditorEdit'
import './Editor.scss'

export const Editor = (props) => {
    const [isEdit, setIsEdit] = useState(false)
    return (
        <div className="editor">
            <button onClick={() => setIsEdit(false)}>Add</button>
            <button onClick={() => setIsEdit(true)}>Edit</button>
            <div className="editor-container">
                {isEdit ? <EditorEdit /> : <EditorAdd />}
            </div>
        </div>
    )
}

