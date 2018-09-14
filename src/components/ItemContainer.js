import React from 'react';
import {LineChart} from './LineChart.js';

//prprty
var data = [];
var dataDup = [];
var tempData = [];
var tempDate = [];
var dateCounter = "day "

//methods

//chart data creator
const CD = () => {

    var data_ = [];
    var days = [];

    for(var i = 0; i<80; i++){
        data_.push(
            Math.floor(
                Math.random() * 10000
            )
        );
        days.push("day " + (i+1));
    }

    return {data_, days};

};

//tempData and dateCounter setter
//it makes a new array of data relative to the date range type: daily weekly ...
const tempDataSetter = (numberOfDays) => {
    data.data_ = dataDup.slice();
    tempData = [];
    tempDate = [];

    if(numberOfDays == 1){
        tempData = data.data_.slice(0);
        tempDate = data.days;
        return;
    }

    var temp = 0;
    var i = 0, j = 0, index = 1;
    var mod = 0;
    
    for(var k = 0; k < data.data_.length; k++)
    {
        mod = i % numberOfDays;
        if(mod == 0 && i != 0){
            addToTemp(++j, temp);
            i = 0;
            temp = 0;
        }
        index++;
        i++
        temp += data.data_[k];
    }

    if(temp > 0)
    addToTemp(++j, temp);

}

const addToTemp = (j, temp) => {
    tempData.push(temp);
    tempDate.push(
        "" + dateCounter + j
    );
}


//Indoor Components

class ItemContainer extends React.Component{
    
    constructor(props){

        super(props);
        this.randomStateSetter = this.SetRandomState.bind(this);
        this.randomStateSetter();
        this.setData.bind(this);
        dataDup = data.data_.slice();

    }

    SetRandomState(){
        data = CD();
        this.state = {
            chartData:{
                labels: data.days,
                datasets:[{
                    label: "income",
                    data: data.data_,
                    backgroundColor:[
                        '#f67270'
                    ]
                }]
            }
        };
    }

    setData(){
        this.setState(
            {
                chartData:{
                    labels: tempDate,
                    datasets:[{
                        label: "income",
                        data: tempData,
                        backgroundColor:[
                            '#f67270'
                        ]
                    }]
                }
            }
        );
    }

    Item = (props) => {
        return(
            <div className="reg-item">
                <h4>{props.title}</h4>
                <LineChart className="chart" chartData={props.chartData}/>     
                <select name="data-mode" onChange={this.setDateRange.bind(this)}>
                    <option value="daily">daily</option>
                    <option value="weekly">weekly</option>
                    <option value="monthly">monthly</option>
                    <option value="2 months">every 2 months</option>
                </select>
            </div>
        );
    }

    setDateRange(event){
        switch(event.target.value){
            case "daily":
            dateCounter = "day ";
            tempDataSetter(1);
            break;
            case "weekly":
            dateCounter = "week ";
            tempDataSetter(7);
            break;
            case "monthly":
            dateCounter = "month ";
            tempDataSetter(30);
            break;
            case "2 months":
            dateCounter = "2months ";
            tempDataSetter(60);
            break;
        }
        this.setData();
    }

    render(){
        return(
            <div className="chart-container">
                <this.Item title="Income 1" chartData={this.state.chartData}/>    
                <this.Item title="Income 2" chartData={this.state.chartData}/>  
                <this.Item title="Income 3" chartData={this.state.chartData}/>  
                <this.Item title="Income 4" chartData={this.state.chartData}/>  
            </div>
        );
    }

}



export default ItemContainer;