

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
            return cmpTypes && <OptFooter {...props} types={getType()} />
        case 'Map':
            return cmpTypes && <OptMap {...props} types={getType()} />
        case 'Gallery':
            return cmpTypes && <OptGallery {...props} types={getType()} />
        case 'Text':
            return cmpTypes && <OptText {...props} types={getType()} />
        case 'Cards':
            return cmpTypes && <OptCards {...props} types={getType()} />
        case 'Video':
            return cmpTypes && <OptVideo {...props} types={getType()} />
        case 'Divider':
            return cmpTypes && <OptDevider {...props} types={getType()} />
        case 'Form':
            return cmpTypes && <OptForm {...props} types={getType()} />
        default:
            return //...some default error view
    }
}

