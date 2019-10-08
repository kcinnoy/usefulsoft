import React, { Component } from 'react'
import Item from './Item'
import ActiveItem from './ActiveItem'

export default class Table extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const items = this.props.business_info.map((data) => {
            let handleExpandItem = this.props.handleExpandItem.bind(this,data)
            return (
                data.active ?  
                <ActiveItem handleExpandItem={handleExpandItem} key={data.id} title={data.title} description={data.description}/>:
                <Item handleExpandItem={handleExpandItem} key={data.id} title={data.title} description={data.description}/>
            )
        })

        return (
            <div className="pt-5 pb-b">
                <div className="container">
                    <div className="text-center">
                        <h2 className="pt-4 pb-4">
                            The Best Email Marketing Software
                        </h2>
                    </div>
                    {items}
                </div>
                
            </div>
        )
    }
}
