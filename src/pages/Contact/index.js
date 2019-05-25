import React, { Component } from "react";
import Nav from "../../components/Nav";
import { LeftColumn, RightColumn } from "../../components/FloatingCard";
import Slide from 'react-reveal/Slide';
import logo from '../../triphoto.png';
import "./style.css";


class Contact extends Component {


    render() {
        return (
            <div className="container">
                <Slide left>
                    <div className="homeBackground">
                        <Nav />
                        <div className="row d-flex justify-content-center">
                            <LeftColumn>
                                <div className="purpose">
                                    <p>
                                        There's lots of ways to contact me:
                                    </p>
                                    <ol>
                                        <li>Fastest for me: jstudiosdesign@gmail.com</li>
                                        <li>Other ways: 520-370-7398</li>
                                        <li>Facebook -still working on business page</li>
                                        <li>and WhatsApp</li>
                                    </ol>
                                </div>
                            </LeftColumn>
                            <RightColumn>
                            <img src={logo} className="img-fluid logo-large" alt="three silly self portraits" />

                            </RightColumn>
                        </div>
                    </div>
                </Slide>
            </div>
        )
    }
}

export default Contact;