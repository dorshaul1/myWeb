
import { Component } from 'react'

import './HomePage.scss'
import mainImg from '../../assets/images/undraw_building_website.svg'

export const HomePage = () => {

    return (
        <section className="home-page flex center">
            { <div className="homePage-container flex column align-center">
                {/* <h1 className="main-title">Project Name</h1> */}
                <div className="main-title-container flex space-between">
                    <div className="info flex column">
                        <h1 className="main-title">Create a Website You’re Proud Of</h1>
                        <p>Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want.</p>
                    </div>
                    {/* {JSON.stringify()} */}
                    <img src={mainImg} alt="" />
                </div>
            </div>}

        </section>
    )
}
