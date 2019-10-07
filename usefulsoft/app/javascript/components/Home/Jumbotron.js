import React, { Component} from 'react'
import styled from 'styled-components'

const Section = styled.section
    `
    background-color: #d74234;
    min-height: 550px;
    padding: 150px 0;
    color: #fff;
    `
const Header = styled.h1
    `
    font-weight:700;
    font-size:40px;
    line-height:52px;
    color: #fff;
    `
const Subhead = styled.p
    `
    font-weight:500;
    font-size:18px;
    color: #fff;
    `
const Button = styled.a
    `
    display: inline-block;
    text-decoration: none;
    font-weight:bold;
    cursor: pointer;
    border-radius: 0;
    background: #fff;
    color: #333 !important;
    padding: 10px 20px;
    font-size: 18px;
    box-shadow: 0px 0px 0px 3px #473228,
        -6px 6px #ef5f17,
        -6px 6px 0px 3px #473228;
    `

const Jumbotron = () => {
    return (
        <Section className="home-section--1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <Header>Useful email marketing software</Header>
                            <Subhead>Clear comparisons and reviews for your business needs</Subhead>
                            <div className="cta-wrapper">
                                <Button className="offste-btn">Get Started</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                            {/* <a href={"https://placeholder.com"}> */}
                                <img src="https://via.placeholder.com/560x315"/>
                            {/* </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Jumbotron
