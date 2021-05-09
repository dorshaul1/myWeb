

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MainDynamic } from '../../cmps/MainDynamic/MainDynamic'
import { togglePreview } from '../../store/actions/siteAction'
import './Site.scss'

export const Site = ({template}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(togglePreview())
        return () => {
            dispatch(togglePreview())

            // cleanup
        }
    }, [])

    return (
        <div className="site">
            <h1>site</h1>
            {template && template.cmps.map((cmp)=><MainDynamic key={cmp._id} cmp={cmp}/>)}
        </div>
    )
}

