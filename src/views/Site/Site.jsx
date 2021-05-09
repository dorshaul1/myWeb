

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { togglePreview } from '../../store/actions/siteAction'
import './Site.scss'

export const Site = (props) => {
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
        </div>
    )
}

