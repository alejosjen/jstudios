import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import logo from '../../triphoto.png';
import "./style.css";


class Contact extends Component {


    render() {
        return (
            <div className="container">
                <Slide left>
                    <div className="homeBackground">
                        <div className="business-card">
                            <Nav />
                            <div className="row bottom-row d-flex justify-content-center">
                                <div className="col left">
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
                                </div>
                                <div className="col right">
                                    <img src={logo} className="img-fluid" alt="three silly self portraits" />

                                </div>
                            </div>
                        </div>

                    </div>
                </Slide>
            </div>
        )
    }
}

export default Contact;