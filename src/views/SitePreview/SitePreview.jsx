

import { Site } from '../../cmps/Site'
import './SitePreview.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getSiteById, togglePreview } from '../../store/actions/siteAction'

export const SitePreview = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.siteReducer)
    useEffect(() => {
        loadSite()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.siteId])

    // useEffect(() => {
    //     setSite(state.currSite)
    // }, [state.currSite])

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
    return (
        <div>
           {state.currSite && <Site site={state.currSite} isEditing={state.isEditing} />}
        </div>
    )
}

