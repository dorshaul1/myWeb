

import { useEffect, useState } from 'react'
import { TemplatesList } from '../../cmps/TemplatesList/TemplatesList'
import siteService from '../../services/site.service'
import './TemplatesPage.scss'

export const TemplatesPage = (props) => {

    const [templates, setTemplates] = useState([])
    useEffect(() => {
        loadTemplates()
        return () => {

        }
    }, [])

    const loadTemplates = async () => {
        setTemplates(await siteService.query())
    }
    return (
        <div className="templatesPage">
            <h1>Templates</h1>
            <TemplatesList templates={templates}/>
        </div>
    )
}

