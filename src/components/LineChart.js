import React from 'react';
import {Line, defaults} from 'react-chartjs-2';

defaults.global.defaultFontColor = 'black';

const LineChart = (props) => 
    {
        return(
            <Line
                data={props.chartData}
                options={{
                    
                }}
            />
        );
    }

export {
    LineChart
};