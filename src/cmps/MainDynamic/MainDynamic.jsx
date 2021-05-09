

import './MainDynamic.scss'

export const MainDynamic = ({cmp}) => {

    // const DynamicCmp = (props) => {
    switch (cmp.type) {
        case 'Hello':
            // return <Hello {...props} />
        case 'GoodBye':
            // return <GoodBye {...props} />
        case 'WelcomeBack':
            // return <WelcomeBack {...props} />
        default:
            return //...some default error view
    }
}

    // return (
    //     <div>

    //     </div>
    // )
// }

