import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import "./style.css";


class Home extends Component {
   

    render() {
        return (
            
                <div>
                    <Nav />
                <Slide left>
                    <div className="container d-flex justify-content-center">
                        <div className="homeBackground d-flex justify-content-center">
                            <div className="homeArea">
                                <div className="homeTitle text-center">
                                    <p>Welcome</p>
                                    <p>Want an online presence for your business?</p>
                                    <p>I'll teach you the tools you need to keep up</p>
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