import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainDynamic } from '../../cmps/MainDynamic/MainDynamic'
// import siteService from '../../services/site.service'
import { changeProperty, getSiteById, togglePreview } from '../../store/actions/siteAction'
import './Site.scss'

export const Site = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.siteReducer)
    const [site, setSite] = useState(null)

    useEffect(() => {
        loadSite()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.siteId])

    useEffect(() => {
        setSite(state.currSite)
    }, [state.currSite])

    useEffect(() => {
        dispatch(togglePreview())
        return () => {
            dispatch(togglePreview())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const loadSite = async () => {
        dispatch(getSiteById(props.match.params.siteId))
    }

    const onSetValue = async (ev) => {
        const value = ev.target.innerText
        const elName = ev.target.getAttribute("name")
        const cmpId = ev.target.getAttribute("id")
        dispatch(changeProperty(site, cmpId, value, elName, "txt"))
    }

    return (
        site && <div className="site" style={site.style}>
            {site && site.cmps.map((cmp) => <MainDynamic onSetValue={onSetValue} key={cmp.id} cmp={cmp} siteId={site._id} />)}
        </div>
    )
}

