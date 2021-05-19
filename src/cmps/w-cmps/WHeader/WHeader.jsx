
import './WHeader.scss'

export const WHeader = (props) => {

    const { info, style, SType } = props.cmp
    const { cmp, onSetValue, siteId } = props
    console.log(style);

    const backgroundImage = style.imgUrl ? `url(${style.imgUrl})` : `url(${process.env.PUBLIC_URL}/backgroundImages/${style.imgName}.png)`
    const styleToInject = { ...style, backgroundImage }

    return (
        <div className={"wHeader " + SType} style={styleToInject} >
            <h1 name="title" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.title.style}>{info.title.txt}</h1>
            <h3 name="substitle" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.substitle.style}>{info.substitle.txt}</h3>
            <a href={`site/${siteId}/${info.btn.link}`}><button name="button" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.btn.style}>{info.btn.label}</button></a>
        </div>
    )
}

