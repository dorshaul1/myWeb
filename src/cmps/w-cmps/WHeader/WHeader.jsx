

import './WHeader.scss'
// import img from '../../../assets/images/backgroundImages'
export const WHeader = (props) => {
// import img from style.backgroundImage
    const { info, style, SType } = props.cmp
    const { cmp, onSetValue, siteId } = props

    return (
        <div className={"wHeader " + SType} style={style} >
            {/* <img src={require('../../../assets/images/backgroundImages/galaxy.png')} /> */}
            <h1 name="h1" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.title.style}>{info.title.txt}</h1> 
            <h3 name="h3" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.substitle.style}>{info.substitle.txt}</h3> 
            <a href={`site/${siteId}/${info.btn.link}`}><button name="button" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.btn.style}>{info.btn.label}</button></a> 
        </div>
    )
}

