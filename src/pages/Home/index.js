import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import logo from '../../jstudioslogo_large.svg';
import "./style.css";


class Home extends Component {


    render() {
        return (
            <div className="container">
                <Slide left>
                    <div className="homeBackground">
                        <div className="business-card">
                        <Nav />
                        <div className="row bottom-row d-flex justify-content-center">
                            <div className="col left">
                                <p>Welcome</p>
                                <p>Need to improve your online presence?</p>
                                <p>I'll teach you the tools you need for your business.</p>
                                <p>I'll meet you at your comfort level and guide you to the next.</p>
                            </div>
                            <div className="col right">
                                <img src={logo} className="img-fluid logo-large" alt="logo" />
                                <div className="description">
                                    <em>Custom design for web and social media.</em>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </Slide>
            </div>
        )
    }
}

export default Home;