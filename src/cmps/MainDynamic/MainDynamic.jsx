import { WCards } from '../w-cmps/WCards/WCards'
import { WDivider } from '../w-cmps/WDivider/WDivider'
import { WFooter } from '../w-cmps/WFooter/WFooter'
import { WForm } from '../w-cmps/WForm/WForm'
import { WGallery } from '../w-cmps/WGallery/WGallery'
import { WHeader } from '../w-cmps/WHeader/WHeader'
import { WMap } from '../w-cmps/WMap/WMap'
import { WText } from '../w-cmps/WText/WText'
import { WVideo } from '../w-cmps/WVideo/WVideo'
import './MainDynamic.scss'

export const MainDynamic = (props) => {
    const { type } = props.cmp

    switch (type) {
        case 'w-header':
            return <WHeader {...props} />
        case 'w-footer':
            return <WFooter {...props} />
        case 'w-map':
            return <WMap {...props} />
        case 'w-gallery':
            return <WGallery {...props} />
        case 'w-text':
            return <WText {...props} />
        case 'w-cards':
            return <WCards {...props} />
        case 'w-video':
            return <WVideo {...props} />
        case 'w-divider':
            return <WDivider {...props} />
        case 'w-form':
            return <WForm {...props} />
        default:
            return //...some default error view
    }
}