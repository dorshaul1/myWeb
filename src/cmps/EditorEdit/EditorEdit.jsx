

import './EditorEdit.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { selElement } from '../../store/actions/siteAction'
import { TypeCmp } from '../TypeCmp/TypeCmp'
import { TextEditor } from '../editors/TextEditor/TextEditor'
import { ButtonEditor } from '../editors/ButtonEditor/ButtonEditor'
import { updateEl } from '../../store/actions/siteAction'
export const EditorEdit = (props) => {

    // return (
    // <div>
    const dispatch = useDispatch()
    const [currCmp, setCurrCmp] = useState(null)
    const currSite = useSelector(state => state.siteReducer.currSite)
    const elToEdit = useSelector(state => state.siteReducer.elToEdit)
    // console.log('cmpToEdit:', cmpToEdit)

    const editTypes = ['Text', 'Image', 'Button', 'Map']

    const onUpdateEl = (newEl) => {
        dispatch(updateEl(currSite._id, {...newEl}))
    }

    // const onSetElToEdit = (element) => {
    //     dispatch(selElement(element))
    // }

    useEffect(() => {
        // console.log('cmpToEdit:', elToEdit)
        setCurrCmp(elToEdit)
        return () => {
            
        }
    }, [elToEdit])

    // const updateElement = () = >

    // console.log('currCmp:', currCmp)
    if (currCmp) {
        switch (currCmp.elName) {
            case 'title':
            case 'substitle':
            case 'p':
                return <TextEditor el={elToEdit} onUpdateEl={onUpdateEl} />
            case 'button':
                return <ButtonEditor el={elToEdit} onUpdateEl={onUpdateEl}  />
            // case 'Image':
            //     return cmpTypes && <OptFooter {...props} types={getType()} />
            // case 'Button':
            //     return cmpTypes && <OptMap {...props} types={getType()} />
            // case 'Gallery':
            //     return cmpTypes && <OptGallery {...props} types={getType()} />
            // case 'Map':
            //     return cmpTypes && <OptText {...props} types={getType()} />

            default:
        }
    } else return <div><p>Please Pick An Element On The Workspace To Enter Edit Mode.</p></div>
    //     return (
    //         <div className="editorAdd flex justify-center">
    //             //         <div className="types-container flex justify-center wrap">
    //                 //             {/* {!cmpToEdit && <div><h1>Please Pick An Element On The Workspace To Enter Edit Mode.</h1></div>}
    //         //             {currType && <TypeCmp type={currType} onUpdateCmp={onUpdateCmp} />}
    //         //             {currType && <div><button onClick={() => { setCurrType(null) }}>Back</button></div>} */}
    //         //         </div>
    //         //         {/* <h1>Add</h1> */}
    //         //     </div>
    //         // // )        </div>
    //     )
}

