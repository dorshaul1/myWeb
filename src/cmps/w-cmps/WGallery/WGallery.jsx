

import './WGallery.scss'

export const WGallery = (props) => {
    const {SType, info} = props.cmp
    
    return (
        <div className={"wMap " + SType}>
            <img src={info.image1} alt="image1" />
            <img src={info.image2} alt="image2" />
            <img src={info.image3} alt="image3" />
        </div>
    )
}

