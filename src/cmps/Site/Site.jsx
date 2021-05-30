import { MainDynamic } from '../MainDynamic/MainDynamic'
import './Site.scss'

export const Site = (props) => {
    const { site, isEditing, onSetValue } = props

    const DynamicCmp = (cmp) => {

        return isEditing ?
            <MainDynamic isEdititing={isEditing} onSetValue={onSetValue} key={cmp.id} cmp={cmp} siteId={site._id} /> :
            <MainDynamic isEdititing={isEditing} key={cmp.id} cmp={cmp} siteId={site._id} />
    }

    return (
        site && <div className="site" style={site.style}>
            {site && site.cmps.map((cmp) => DynamicCmp(cmp))}
        </div>
    )
}

