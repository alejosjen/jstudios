import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import "./style.css";


class WorkExamples extends Component {


    render() {
        return (

            <div>
                <Nav />
                <Slide left>
                    <div className="text-center">
                        <p>Work Examples</p>
                    </div>
                </Slide>
            </div>

        )
    }
}

export default WorkExamples;