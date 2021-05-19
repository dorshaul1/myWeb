

import './WFooter.scss'

export const WFooter = (props) => {

    const { info, style, SType } = props.cmp
    const { cmp, onSetValue, siteId } = props
    console.log(style);

    const backgroundImage = style.imgUrl ? `url(${style.imgUrl})` : `url(${process.env.PUBLIC_URL}/backgroundImages/${style.imgName}.png)`
    const styleToInject = { ...style, backgroundImage }

    return (
        <div className={"wHeader " + SType} style={styleToInject} >
            <h1 name="coppyrights" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.copyrights.style}>{info.copyrights.txt}</h1>
            <div style={info.links.style}>
            {info.links && info.links.a.map((link)=>{
                return <a href={link.href} name="link"  id={cmp.id} style={link.style}>{link.label}</a>
            })}
            </div>
            {/* <h3 name="h3" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.substitle.style}>{info.substitle.txt}</h3> */}
            {/* <a href={`site/${siteId}/${info.btn.link}`}><button name="button" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.btn.style}>{info.btn.label}</button></a> */}
        </div>
    )
}

