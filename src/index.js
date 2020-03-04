import React from 'react';
import {render} from 'react-dom';
import {Device} from './Device';
import {Header} from  './Header';
//fetch,http(post;get),


const data = [
    {
        id: "abc12345",
        channel1: 5.25,
        channel2: 4.48,
        voltage: 3.19,
        voltage_low: false,
        version: "1.1.0",
        description: "asd",
        last_check: "2020-03-04T00:00:00.000000"
    },
    {
        id: "dcef6789",
        channel1: 9.05,
        channel2: 9.98,
        voltage: 2.19,
        voltage_low: true,
        version: "1.0.5",
        description: "qwe",
        last_check: "2020-03-04T01:01:01.000000"
    }
];


//Component App

const waterCounters = [];
for (let i = 0; i < data.length; i++) {
    const device = data[i];
    waterCounters.push(<Device device={device}/>)
}
/*function App() {
    return(
        <div>
            <Header/>
            <Device/>
        </div>
    )
}*/


        var waterius = [
            Header(), Device, waterCounters
        ]

render(waterius,document.getElementById('root'));


//render(<App/>,document.getElementById('root'));
