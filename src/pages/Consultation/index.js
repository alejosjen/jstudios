import React, { Component } from "react";
import Nav from "../../components/Nav";
import { LeftColumn } from "../../components/FloatingCard";
import Slide from 'react-reveal/Slide';
import "./style.css";


class Consultation extends Component {


    render() {
        return (
            <div className="container">
            <Slide left>
                <div className="homeBackground">
                    <Nav />
                    <div className="row d-flex justify-content-center">
                        <LeftColumn>
                            <div className="purpose">
                                <p>$50 consultation fee, up to 2 hours</p>
                                <p>Look at the list and we can focus on one or more things.</p>
                                <p>If we agree to work together, we'll set up a schedule. 
                                    I'll provide 3 product reviews for your input and then 
                                    deliver the last revision after confirmation.</p>
                            </div>
                        </LeftColumn>
                            <div className="col topics">
                                <p>Things to think about for your business:      
                                </p>
                                <ul>
                                    <li>Target Audience</li>
                                    <li>Logo and Colors</li>
                                    <li>Social Media</li>
                                    <li>Public Listings</li>
                                    <li>Community Outreach</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </Slide>
        </div>
        )
    }
}

export default Consultation;