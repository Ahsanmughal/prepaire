import React from "react";
import "./home.css";


function HomeView()  {
		return(
            <div>
                <div className="stretch">
                    <div className="home-text">
                        <h2>WELCOME <br/> <span>TO</span></h2>
                        <h1>PREPAiRE</h1>
                        <div className="waves-block">
                            <img className="waves" src="../../images/waves.png" alt="waves"/>
                            <div className="outer">
                                <svg onClick={()=> window.location.href='/dashboard'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" width="100%" height="100%" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="gradient">
                                            <stop offset="0" id="a" />
                                            <stop offset="0.5" id="b" />
                                            <stop offset="1" id="c" />
                                        </linearGradient>
                                    </defs>
                                    <text x="50%" y="50%" textAnchor="middle" fill="#000" fontSize="36px" fontFamily="Montserrat" dy=".3em">START</text>
                                    <ellipse ry="80" rx="80" cy="110" cx="110" id="ellipse"  />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
}

export default HomeView;