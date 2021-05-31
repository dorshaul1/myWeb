

import { useState } from 'react'
import { EditorAdd } from '../EditorAdd/EditorAdd'
import { EditorEdit } from '../EditorEdit/EditorEdit'
import './Editor.scss'

export const Editor = (props) => {
    const [isEdit, setIsEdit] = useState(false)
    return (
        <div className="editor">
            <div className="editor-btn-container flex space-between">
                <button className={`editor-btn ${isEdit?"":"active"}`} onClick={() => setIsEdit(false)}>Add</button>
                <button className={`editor-btn ${isEdit?"active":""}`} onClick={() => setIsEdit(true)}>Edit</button>
            </div>
            <div className="editor-container">
                {isEdit ? <EditorEdit /> : <EditorAdd />}
            </div>
        </div>
    )
}

