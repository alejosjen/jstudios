import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import logo from '../../jstudioslogo_large.svg';
import "./style.css";


class Home extends Component {


    render() {
        return (
            <div>
                <Nav />
                <Slide left>
                    <div className="container">
                        <div className="homeBackground">
                            <div className="row d-flex justify-content-center">
                                <div className="col bottom-left-round">
                                    <p>Welcome</p>
                                    <p>Want an online presence for your business?</p>
                                    <p>I'll teach you the tools you need to keep up</p>
                                    <p>Let's find what's best for your business together. We'll review
                                    how and where your business is being represented. Next we'll see where
                                    it can be improved.
                                </p>
                                    <p>I'll meet you at your comfort level and guide you to the next.</p>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div className="col top-right-round hidden-xs">
                                    <img src={logo} className="img-fluid logo-large" alt="logo" />
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