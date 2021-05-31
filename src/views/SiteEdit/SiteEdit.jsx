

import { Site } from '../../cmps/Site'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeProperty, getSiteById, toggleEditing, setElement } from '../../store/actions/siteAction'
import './SiteEdit.scss'
import { Editor } from '../../cmps/Editor/Editor'
// import { selElement } from '../../store/actions/siteAction'


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
        dispatch(toggleEditing())
        return () => {
            dispatch(toggleEditing())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadSite = () => {
        dispatch(getSiteById(props.match.params.siteId))
    }

    const onSetValue = async (ev, cmp = null) => {
        // const value = ev.target.innerText
        const elName = ev.target.getAttribute("name")
        // const cmpId = ev.target.getAttribute("id")
        // dispatch(updateCmp(state.currSite, cmp.Id, value, elName, "txt"))
    }
    const onSetElToEdit = (ev, cmp) => {
        // console.log('ev:', ev)
        // console.log('cmp', cmp);
        // console.log('element:', element)
        const elName = ev.target.getAttribute("name")
        const elToEdit = cmp.info[elName]

        dispatch(setElement(cmp.id, elToEdit))
        // console.log(state.elToEdit);
    }

    useEffect(() => {
        console.log(state.elToEdit);
        return () => {
        }
    }, [state.elToEdit])

    return (
        <div className="siteEdit flex">
            {state.currSite && <Editor />}
            {state.currSite && <Site site={state.currSite} onSetElToEdit={onSetElToEdit} onSetValue={onSetValue} isEditing={state.isEditing} />}
        </div>
    )
}



