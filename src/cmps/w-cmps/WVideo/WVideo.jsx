

import './WVideo.scss'
import ReactPlayer from 'react-player'


export const WVideo = (props) => {
    const { info, style, SType } = props.cmp
    const { cmp, onSetValue } = props

    return (
        <div className={"wVideo " + SType} style={style} >
            <div className="video-container">
            {cmp && <ReactPlayer controls={true} url={info.video.src} />}
            </div>
            <div className="video-information-container" style={info.informationContainer.style}>
                <h1 name="h1" contentEditable="true" suppressContentEditableWarning={true} onBlur={(ev) => onSetValue(ev)} id={cmp.id} style={info.h1.style}>{info.h1.txt}</h1>
            </div>
        </div>
    )
}

