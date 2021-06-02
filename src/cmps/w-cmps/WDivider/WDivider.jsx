

import './WDivider.scss'

export const WDivider = (props) => {

    const { info, style, SType } = props.cmp
    const { cmp, onSetValue, isEditing } = props

    const backgroundImage = style.imgUrl ? `url(${style.imgUrl})` : `url(${process.env.PUBLIC_URL}/backgroundImages/${style.imgName}.png)`
    const styleToInject = { ...style, backgroundImage }

    return (
        <div className={"wDivider " + SType} style={styleToInject}></div>
    )
}

