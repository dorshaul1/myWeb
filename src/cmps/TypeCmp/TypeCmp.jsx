

import { OptHeader } from '../opt-cmps/OptHeader'
import { OptFooter } from '../opt-cmps/OptFooter'
import { OptMap } from '../opt-cmps/OptMap/OptMap'
import { OptGallery } from '../opt-cmps/OptGallery'
import { OptText } from '../opt-cmps/OptText'
import { OptCards } from '../opt-cmps/OptCards'
import { OptVideo } from '../opt-cmps/OptVideo'
import { OptDevider } from '../opt-cmps/OptDevider'
import { OptForm } from '../opt-cmps/OptForm'
import './TypeCmp.scss'
import { useDispatch } from 'react-redux'
import { getCmpTypes } from '../../store/actions/siteAction'
import { useEffect, useState } from 'react'

export const TypeCmp = (props) => {
    const dispatch = useDispatch()
    const [cmpTypes, setCmpTypes] = useState(null)
    const { type } = props

    const getTypes = async () => {
        const typesToSet = await dispatch(getCmpTypes())
        setCmpTypes(typesToSet)
    }

    const getType = () => {
        return cmpTypes[type]
    }

    useEffect(() => {
        console.log(cmpTypes)
    }, [cmpTypes])

    useEffect(() => {
        getTypes()
        return () => {
        }
    }, [])

    switch (type) {
        case 'Header':
            return cmpTypes && <OptHeader {...props} types={getType()} />
        case 'Footer':
            return <OptFooter {...props} />
        case 'Map':
            return <OptMap {...props} />
        case 'Gallery':
            return <OptGallery {...props} />
        case 'Text':
            return <OptText {...props} />
        case 'Cards':
            return <OptCards {...props} />
        case 'Video':
            return <OptVideo {...props} />
        case 'Divider':
            return <OptDevider {...props} />
        case 'Form':
            return <OptForm {...props} />
        default:
            return //...some default error view
    }
}

