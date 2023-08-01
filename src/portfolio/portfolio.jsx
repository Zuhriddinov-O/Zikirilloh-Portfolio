import React from "react";
import "./portfolio.css"
import zikillohimg from "../portfolio/zikirillohimg.jpg"
import corner from "../portfolio/corner.png"
import software from "../portfolio/sofwareimg.png"
import webimg from "../portfolio/webimg.png"

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="container-navbar">
                    <div className="dasturchi">
                        <p>Dasturchi</p>
                    </div>
                    <div className="links">
                        <a className="linklar" href="/About me">About me</a>
                        <a className="linklar" href="/Servises">Servises</a>
                        <a className="linklar" href="/Conatct me">Conatct me</a>
                    </div>

                </div>
                <div className="container-page1">
                    <div className="container-name">
                        <div className="name">
                            <p className="names">Hi, i am</p>
                            <p className="names">Abdullayev Zikirilloh</p>
                            <p className="name3">Frontend Developer</p>
                        </div>
                        <div className="buttons">
                            <button className="btn1">Download CV</button>
                            <button className="btn2">Learn More</button>
                        </div>
                    </div>

                    <div className="container-image">
                        <img className="zikillohimg" src={zikillohimg} alt="" />
                    </div>
                </div>
                <div className="about-container">
                    <p className="aboutP">About</p>
                    <p className="aboutP2">Salom mening ismim Zikirilloh Abdullaev men Digital Cityda 2022-yilda oqganiman men 26.08.2009- yilda tug'ilganman mening maqsadim katta dasturchi bolib yetishish. </p>
                </div>
                <div className="services">
                    <div className="service1">
                        <img className="cornerimg" src={corner} alt="" />
                        <div className="services__p1">
                            Full Name:
                        </div>
                        <div className="services__p2">
                            Abdullayev Zikirolloh
                        </div>
                    </div>
                    <div className="service2">
                        <img className="cornerimg" src={corner} alt="" />
                        <div className="services__p1">
                            Email Adress:
                        </div>
                        <div className="services__p2-1">
                            ZikirillohAbdullayev@gmail.com
                        </div>
                    </div> <div className="service3">
                        <img className="cornerimg" src={corner} alt="" />
                        <div className="services__p1-2">
                            Twitter;
                        </div>
                        <div className="services__p2-2">
                            No Twitter
                        </div>
                    </div> <div className="service4">
                        <img className="cornerimg" src={corner} alt="" />
                        <div className="services__p1-3">
                            Phone:
                        </div>
                        <div className="services__p2-3">
                            +998 97) 272-19-29
                        </div>
                    </div>
                </div>
                <div className="available">
                    <p>What i do</p>
                    <div className="available__buttons">
                        <button>
                            <img className="images" src={software} alt="softwareimg" />
                            <p className="button__p">Software Development</p>
                        </button>
                        <button>
                            <img className="images" src={webimg} alt="webimg" />
                            <p className="button__p">Software Development</p>
                        </button>
                    </div>
                </div>
                <div className="skills">
                    <p className="skillsP">My Skills</p>
                    <div className="rates">
                        <div className="ratesinit">
                            <p className="percent">90%</p>
                            <p className="languages">HTML</p>
                        </div> <div className="ratesinit">
                            <p className="percent">80%</p>
                            <p className="languages">CSS</p>
                        </div>
                        <div className="ratesinit">
                            <p className="percent">0%</p>
                            <p className="languages">JAVASCRIPT</p>
                        </div>
                        <div className="ratesinit">
                            <p className="percent">0%</p>
                            <p className="languages">REACT.JS</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Portfolio;