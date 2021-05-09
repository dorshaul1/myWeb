

import { TemplatePreview } from '../TemplatePreview/TemplatePreview'
import './TemplatesList.scss'

export const TemplatesList = ({templates}) => {

    return (
        <div className="templatesList flex wrap">
            {/* <h1>lost</h1> */}
            {templates.map((template)=><TemplatePreview key={template._id} template={template}/>)}
        </div>
    )
}

