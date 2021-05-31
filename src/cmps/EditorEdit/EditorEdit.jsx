

import './EditorEdit.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { selElement } from '../../store/actions/siteAction'
import { TypeCmp } from '../TypeCmp/TypeCmp'
export const EditorEdit = (props) => {

    // return (
    // <div>
    const dispatch = useDispatch()
    // const [currType, setCurrType] = useState(null)
    // const currSite = useSelector(state => state.siteReducer.currSite)
    const cmpToEdit = useSelector(state => state.siteReducer.cmpToEdit)

    const editTypes = ['Text', 'Image', 'Button', 'Map']

    // const onUpdateCmp = (newCmp) => {
    //     dispatch(addCmp(currSite._id, {...newCmp}))
    // }

    // const onSetElToEdit = (element) => {
    //     dispatch(selElement(element))
    // }

    // switch (type) {
    //     case 'Text':
    //         return cmpTypes && <OptHeader {...props} types={getType()} />
    //     case 'Image':
    //         return cmpTypes && <OptFooter {...props} types={getType()} />
    //     case 'Button':
    //         return cmpTypes && <OptMap {...props} types={getType()} />
    //     case 'Gallery':
    //         return cmpTypes && <OptGallery {...props} types={getType()} />
    //     case 'Map':
    //         return cmpTypes && <OptText {...props} types={getType()} />

    //     default:
    return (
        <div className="editorAdd flex justify-center">
            //         <div className="types-container flex justify-center wrap">
                //             {/* {!cmpToEdit && <div><h1>Please Pick An Element On The Workspace To Enter Edit Mode.</h1></div>}
        //             {currType && <TypeCmp type={currType} onUpdateCmp={onUpdateCmp} />}
        //             {currType && <div><button onClick={() => { setCurrType(null) }}>Back</button></div>} */}
        //         </div>
        //         {/* <h1>Add</h1> */}
        //     </div>
        // // )        </div>
    )
}

