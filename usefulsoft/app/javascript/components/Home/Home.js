import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'


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

    handleExpandItem(item, event){
        event.preventDefault()

        let business_info = [...this.state.business_info]
    
        business_info.map(data => {
            data.active = false
        })

        item.active = !item.active

        business_info[item.id -1] = item

        this.setState({business_info})
    }

    render() {
        return (
            <div>
                <Jumbotron/>
                <Table handleExpandItem={this.handleExpandItem.bind(this)} business_info={this.state.business_info}/>
            </div>
        )
    }
}

export default Home