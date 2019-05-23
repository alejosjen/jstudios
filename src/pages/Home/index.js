import React, { Component } from "react";
import Nav from "../../components/Nav";
import { LeftColumn, RightColumn } from "../../components/FloatingCard";
import Slide from 'react-reveal/Slide';
import logo from '../../jstudioslogo_large.svg';
import "./style.css";


class Home extends Component {


    render() {
        return (



            <div className="container">

                <Slide left>
                    <div className="homeBackground">
                            <Nav />

                        <div className="row d-flex justify-content-center">
                            <LeftColumn>
                                <p>Welcome</p>
                                <p>Need to improve your online presence?</p>
                                <p>I'll teach you the tools you need for your business.</p>
                                <p>I'll meet you at your comfort level and guide you to the next.</p>
                            </LeftColumn>

                            <RightColumn>
                                <img src={logo} className="img-fluid logo-large" alt="logo" />
                            </RightColumn>
                        </div>
                    </div>

                </Slide>
            </div>


        )
    }
}

export default Home;