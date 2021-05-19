
import './WHeader.scss'

export const WHeader = (props) => {
    // const url = '../../../assets/images/backgroundImages/galaxy.png'
    // import img from "../../../assets/images/backgroundImages/galaxy.png"
    // const image = useImage('../../../assets/images/backgroundImages/galaxy.png');


    const { info, style, SType } = props.cmp
    const { cmp, onSetValue, siteId } = props

    // const url = require(style.backgroundImage).default
    const url = require( "../../../assets/images/backgroundImages/galaxy.png").default 
    // const background = {backgroundImage:`url("${url}")`}
    return (
        <div className={"wHeader " + SType} style={style}>
            <img src={url} />
            <h1 name="h1" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.title.style}>{info.title.txt}</h1>
            <h3 name="h3" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.substitle.style}>{info.substitle.txt}</h3>
            <a href={`site/${siteId}/${info.btn.link}`}><button name="button" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.btn.style}>{info.btn.label}</button></a>
        </div>
    )
}

