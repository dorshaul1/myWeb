

import './TextEditor.scss'

export const TextEditor = (props) => {
    const { onUpdateEl, el } = props
    // console.log('el:', el)
    const newEl = {
        ...el,
        details:{
            "txt":"sacsac",
            "style":{"color":"red"}
        }
    }
    onUpdateEl(newEl)
    return (
        <div>
            <h1>text</h1>
        </div>
    )
}

