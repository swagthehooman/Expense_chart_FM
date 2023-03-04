import React, { useState } from "react";

//map of day names
const days=["sun","mon","tue","wed","thu","fri","sat"]


function Box(props){

    //bar height calculation. 
    const heightValue=((props.cost/227.94)*24).toString()+"rem";

    //state for display of cost over the bar
    const [clicked, setClicked]=useState(false)
    
    //current day as per the user.
    const currDay=days[new Date().getDay()]

    function handleClick(){
        setClicked(prev=> !prev)
    }
    
    return (
        <div className="box-tile">
            {/*div for bar box */}
            {clicked && <div className="cost-info">
                <p>${props.cost}</p>
            </div>}
            <div className="box"
                style={{height:heightValue, 
                    backgroundColor: currDay===props.day? "hsl(186, 34%, 60%)" :clicked? "hsl(10, 76%, 72%)": "hsl(10, 79%, 65%)"}} 
                onClick={handleClick}
                >
            </div>
            <p>{props.day}</p>
        </div>
    )
}

export default Box