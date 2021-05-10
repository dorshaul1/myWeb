

import { useRef } from 'react'
import './WText.scss'

export const WText = (props) => {

    // const 
    const { info, style, SType } = props.cmp
    // const h1Ref = useRef(null)
    // const h1Ref = useRef(null)

    const { cmp, onSetValue } = props

    return (
        <div className={SType} style={style}>
            {JSON.stringify(info.h1)}
            <h1 name="h1" contentEditable="true" onBlur={(ev) => onSetValue(ev,cmp.id)} style={info.h1.style}>{info.h1.txt}</h1>
            <p name="p" contentEditable="true" onBlur={(ev) => onSetValue(ev,cmp.id)} style={info.p.style}>{info.p.txt}</p>
        </div>
    )
}

