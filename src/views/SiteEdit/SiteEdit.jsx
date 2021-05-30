

import { Site } from '../../cmps/Site'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeProperty, getSiteById, toggleEditting } from '../../store/actions/siteAction'
import './SiteEdit.scss'
import { Editor } from '../../cmps/Editor/Editor'

export const SiteEdit = (props) => {
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
        dispatch(toggleEditting())
        return () => {
            dispatch(toggleEditting())
        }
        //     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const loadSite = async () => {
        dispatch(getSiteById(props.match.params.siteId))
    }

    const onSetValue = async (ev) => {
        const value = ev.target.innerText
        const elName = ev.target.getAttribute("name")
        const cmpId = ev.target.getAttribute("id")
        dispatch(changeProperty(state.currSite, cmpId, value, elName, "txt"))
    }
    return (
        <div className="siteEdit flex">
            <Editor/>
            {state.currSite && < Site site={state.currSite} onSetValue={onSetValue} isEditing={state.isEditing} />}
        </div>
    )
}



