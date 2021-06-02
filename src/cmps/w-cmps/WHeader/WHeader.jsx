
import './WHeader.scss'

export const WHeader = (props) => {
    // console.log('props:', props)

    const { info, style, SType } = props.cmp
    const { cmp, onSetValue, siteId, isEditing, onSetElToEdit } = props
    // console.log(style);
    
    // console.log('info:', info)
    const backgroundImage = style.imgUrl ? `url(${style.imgUrl})` : `url(${process.env.PUBLIC_URL}/backgroundImages/${style.imgName}.png)`
    const styleToInject = { ...style, backgroundImage }

    // const onSetEl = (ev, cmp) => {
    //     const name  = ev.target.getAttribute('name')
    //     const elToEdit = cmp.info[name]
    //     onSetElToEdit(cmp.id, elToEdit)
    // }

    return (
        <div className={"wHeader " + SType} style={styleToInject} >
            <h1 onClick={(ev) => onSetElToEdit(ev, cmp)} name="title" contentEditable={isEditing} suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} style={info.title.style}>{info.title.txt}</h1>
            <h3 onClick={(ev) => onSetElToEdit(ev, cmp)} name="substitle" contentEditable={isEditing} suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} style={info.substitle.style}>{info.substitle.txt}</h3>
            {/* <a onClick={(ev) => onSetElToEdit(ev, cmp)} href={isEditing ? "" : `site/${siteId}/${info.button.link}`}><button name="button" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} style={info.button.style}>{info.button.label}</button></a> */}
            <button onClick={(ev) => onSetElToEdit(ev, cmp)} name="button" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} style={info.button.style}>{info.button.label}</button>
        </div>
    )
}

