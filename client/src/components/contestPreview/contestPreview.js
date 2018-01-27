import React from 'react'
import "./contest.css"

const Contest = (props) => {
    console.log(props)
    return(
        <div>
            <div onClick={() => {console.log(props.info.contestName)}}>
                <h2>{props.info.categoryName}</h2>
                <h2>{props.info.contestName}</h2>
            </div>
            
        </div>
    )
}

export default Contest;