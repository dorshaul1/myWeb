

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MainDynamic } from '../../cmps/MainDynamic/MainDynamic'
import siteService from '../../services/site.service'
import { togglePreview } from '../../store/actions/siteAction'
import './Site.scss'

export const Site = (props) => {
    const dispatch = useDispatch()
    const [site, setSite] = useState(null)

    useEffect(() => {
        loadSite()
    }, [props.match.params.siteId])

    useEffect(() => {
        dispatch(togglePreview())
        return () => {
            dispatch(togglePreview())
        }
    }, [])

    const loadSite = async () => {
        let site = await siteService.getSiteById(props.match.params.siteId)
        setSite(site)
    }

    const onSetValue=async (ev,cmpId)=>{
        const value =  ev.target.innerText
        const elName = ev.target.getAttribute("name")
        const updatedSite = await siteService.changeProperty(site, cmpId, value, elName)
        setSite(updatedSite)
        console.log(site);
        // console.log('elName:', elName)
    }

    return (
        site && <div className="site" style={site.style}>
            <h1 >site</h1>
            {site && site.cmps.map((cmp) => <MainDynamic onSetValue={onSetValue} key={cmp.id} cmp={cmp} />)}
        </div>
    )
}

