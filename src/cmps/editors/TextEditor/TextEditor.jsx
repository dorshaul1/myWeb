

import { useEffect, useState } from 'react'
import './TextEditor.scss'
import { getNumFromStr } from '../../../services/util.service'

export const TextEditor = ({ onUpdateEl, el }) => {
    const [elStyle, setElStyle] = useState(null)

    useEffect(() => {
        setElStyle(el.details.style)
    }, [el])

    const handleChange = ({ target }) => {
        const { name, value } = target
        var editedStyle;
        switch (name) {
            case 'color':
                editedStyle = value
                break;
            case 'backgroundColor':
                editedStyle = value
                break;
            case 'fontSize':
                editedStyle = value + 'px'
                break;
            default:
        }
        console.log('name:', name)
        console.log('editedStyle:', editedStyle)

        setElStyle({ ...elStyle, [name]: editedStyle })
    }

    useEffect(() => {
        console.log(elStyle);
        onUpdateEl({
            ...el, details: {
                txt: el.details.txt,
                style: elStyle
            }
        })
    }, [elStyle])

    return (
        elStyle &&
        <div className="text-editor">
            <input onChange={(ev) => handleChange(ev)} name="color" type="color" value={elStyle.color}></input>
            <input onChange={(ev) => handleChange(ev)} name="backgroundColor" type="color" value={elStyle.backgroundColor}></input>
            <input className="font-size" onChange={(ev) => handleChange(ev)} min="10" max="60" name="fontSize" type="range" value={getNumFromStr(elStyle.fontSize)}></input>
        </div >

    )
}

