import React, { Component } from 'react'
import Jumbotron from './Jumbotron'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            business_info:[
                {id: 1, title: '1.intro', description: 'something1', active: false},
                {id: 2, title: '2.mid add', description: 'something2', active: false},
                {id: 3, title: '3.mid', description: 'something3', active: false},
                {id: 4, title: '4.mid', description: 'something4', active: false}
            ]
        }
    }

    render() {
        return (
            <div>
                <Jumbotron/>
            </div>
        )
    }
}

export default Home