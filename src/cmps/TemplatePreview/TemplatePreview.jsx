

import './TemplatePreview.scss'
import { Link } from 'react-router-dom';

export const TemplatePreview = ({ template }) => {

    return (
        <div className="templatePreview flex column">
            <img src={template.previewImg} alt="" />
            <Link to={`/siteEdit/${template["_id"]}`}>Edit</Link>
            <Link to={`/site/${template["_id"]}`}>Preview</Link>
            {/* <button>Preview</button> */}
        </div>
    )
}

