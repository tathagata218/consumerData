import React from 'react'

const Contest = (props) => {
    
    return(
        <div>
        <h2>{props.info.categoryName}</h2>
        <h2>{props.info.contestName}</h2>
        </div>
    )
}

export default Contest;