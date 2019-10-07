import React, { Component} from 'react'

const Jumbotron = () => {
    return (
        <section className="home-section--1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <h1>Useful email marketing software</h1>
                            <p>Clear comparisons and reviews for your business needs</p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                            <a href={"https://placeholder.com"}>
                                <img src="https://via.placeholder.com/560x315"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jumbotron
