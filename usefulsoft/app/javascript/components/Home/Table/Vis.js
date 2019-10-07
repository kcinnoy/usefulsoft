import React from 'react'
import styled from 'styled-components'

const Pholder = styled.img
    `
    height:100%;
    width:100%;
    `

const Vis = () => {
    return (
        <div>
            <Pholder src="https://via.placeholder.com/560x315"/>
        </div>
    )
}

export default Vis
