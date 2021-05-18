import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainDynamic } from '../../cmps/MainDynamic/MainDynamic'
import siteService from '../../services/site.service'
import { changeProperty, getSiteById, togglePreview } from '../../store/actions/siteAction'
import './Site.scss'

export const Site = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.siteReducer)
    const [site, setSite] = useState(null)

    useEffect(() => {
        setSite(state.currSite)
        loadSite()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.siteId, state.currSite])
    
    
    useEffect(() => {
        dispatch(togglePreview())
        return () => {
            dispatch(togglePreview())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    const loadSite = async () => {
        dispatch(getSiteById(props.match.params.siteId))
        // let currSite = state.currSite
        // console.log('state:', state)
         dispatch(getSiteById(props.match.params.siteId))
        setSite(state.currSite)
        console.log('site:', site)
        console.log('site:', state.currSite)
    }

    const onSetValue = async (ev) => {
        const value = ev.target.innerText
        const elName = ev.target.getAttribute("name")
        const cmpId = ev.target.getAttribute("id")
        dispatch(changeProperty(site, cmpId, value, elName, "txt"))
    }

    return (
        site && <div className="site" style={site.style}>
            <h1 >site</h1>
            {site && site.cmps.map((cmp) => <MainDynamic onSetValue={onSetValue} key={cmp.id} cmp={cmp} />)}
        </div>
    )
}

