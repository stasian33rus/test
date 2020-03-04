import React from "react";

export function Device(props) {
    const device = props.device;
    return (
        <div className="Table">
            <div className="TableHead">
                <div className="TableString">
                    <img className={"SizeImg"} src={require("./images/chip.PNG")}/>
                    {device.id}
                </div>
                <div className="Date">
                    Last date:{device.last_check}
                </div>
            </div>
            <div className="TableWater">
                <div className="WaterCounters">
                    <div className="ColdWater Wordwrap">
                        <img className={"SizeImg"} src={require('./images/cold_water.PNG')}/>
                        {device.channel1} m<sup>3</sup>
                    </div>
                    <div className="HotWater Wordwrap">
                        <img className="SizeImg" src={require('./images/hot-water.PNG')}/>
                        {device.channel2} m<sup>3</sup>
                    </div>
                </div>
                <div className="Pipe"></div>
                <div className="VoltageCounter">
                    <div className="Voltage">
                        <img className={"SizeImg"} src={require("./images/battery.PNG")}/>
                        {device.voltage} V
                    </div>
                </div>
            </div>
            <div className="VersionBlock Date">
                <div>
                    Attininy: some version |
                </div>
                <div>
                    ESP:{device.version}
                </div>
            </div>
        </div>
    );
}