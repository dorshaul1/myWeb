
import { Component } from 'react'

import './HomePage.scss'

export class HomePage extends Component {

    state = {
    }

    async componentDidMount() {
    }

    render() {
        return (
            <section className="homePage">
                { <div className="homePage-container flex column">
                    <h1 className="main-title">Project Name</h1>
                </div>}

            </section>
        )
    }
}
