import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import "./style.css";


class Contact extends Component {


    render() {
        return (

            <div>
                <Nav />
                <Slide left>

                    <div className="text-center">
                        <p>Contact Me</p>
                    </div>

                </Slide>
            </div>

        )
    }
}

export default Contact;