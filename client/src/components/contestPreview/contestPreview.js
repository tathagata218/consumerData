import React from 'react'
import "./contest.css"

const Contest = (props) => {
    console.log(props)
    return(
        <div>
            <div className="mainTestDiv" onClick={() => {console.log(props.info.contestName)}}>
            <table>
            <tr>    
            <th><h2>{props.info.categoryName}</h2></th>
            </tr>
            <tr>
                <td><h2>{props.info.contestName}</h2></td>
            </tr>
                </table>
            </div>
            
        </div>
    )
}

export default Contest;