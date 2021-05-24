

import './WForm.scss'

export const WForm = (props) => {
    const { info, style, SType } = props.cmp
    const { cmp, onSetValue } = props

    return (
        <div className={"wForm " + SType} style={style} >
            <h1 name="h1" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.h1.style}>{info.h1.txt}</h1>
            {info.inputs.map((input) => {
                return <div className="flex column">
                    <h2 name="title" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={input.style}>{input.title}</h2>
                    <input type="text" />
                </div>
            })}
           <button name="button" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.btn.style}>{info.btn.label}</button>
            {/* <p name="p" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.p.style}>{info.p.txt}</p> */}
        </div>
    )
}

