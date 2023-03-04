import React from "react";
import Box from "./Box";
import data from '../data.json'
import {nanoid} from 'nanoid'


function ChartBox(){

    return (
        <div className="chart-container">
            {data.map(item=>{
                return <Box key={nanoid()} cost={item.amount} day={item.day}/>
            })}
        </div>
    )
}

export default ChartBox