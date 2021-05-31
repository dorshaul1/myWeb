import { MainDynamic } from '../MainDynamic/MainDynamic'
import './Site.scss'

export const Site = (props) => {
    const { site, isEditing, onSetValue, onSetElToEdit } = props
    // console.log(site.cmps)

    const DynamicCmp = (cmp) => {

        return isEditing ?
            <MainDynamic onSetElToEdit={onSetElToEdit} isEditing={isEditing} onSetValue={onSetValue} key={cmp.id} cmp={cmp} siteId={site._id} /> :
            <MainDynamic isEditing={isEditing} key={cmp.id} cmp={cmp} siteId={site._id} />
    }

    return (
        site && <div className="site" style={site.style}>
            {site.cmps.map((cmp) => DynamicCmp(cmp))}
        </div>
    )
}

