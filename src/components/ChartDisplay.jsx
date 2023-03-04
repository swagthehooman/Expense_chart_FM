import React from "react";
import ChartBox from "./ChartBox";
function ChartDisplay(){
    return (
        <div className="chart-display">
            <h2>Spending - Last 7 days</h2>
            <ChartBox/>
            <hr/>
            <div className="status">
                <div className="month-expense">
                    <p className="title">Total this month</p>
                    <h1>$478.33</h1>
                </div>
                <div className="expense-rate">
                    <h4>+2.4%</h4>
                    <p className="title">from last month</p>
                </div>                
            </div>
        </div>
    )
}

export default ChartDisplay