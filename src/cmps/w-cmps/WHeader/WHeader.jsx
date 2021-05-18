

import './WHeader.scss'

export const WHeader = (props) => {

    const { info, style, SType } = props.cmp
    const { cmp, onSetValue } = props

    return (
        <div className={"wText " + SType} style={style} >
            <h1 name="h1" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.style}>{info.h1.txt}</h1>
            <p name="p" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.style}>{info.p.txt}</p>
        </div>
    )
}

