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
                    <div className="container d-flex justify-content-center">
                        <div className="homeBackground d-flex justify-content-center">
                            <div className="homeArea">
                                <div className="homeTitle text-center">
                                    <p>Work Examples</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slide>
                </div>
            
        )
    }
}

export default WorkExamples;