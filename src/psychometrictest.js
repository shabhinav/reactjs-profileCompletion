import React from 'react';
import './psychometric.scss'

export default class Psychometrictest extends React.Component{
    render(){
        return(
            <div className="psychometric">
                <div className="container">
                    <div className="container">
                    <h1>Psychometric Test</h1>
                    <p>Even though the minimum age for obtaining a driving license has increased in recent years a substantial increase in car sales over the corresponding years has resulted in a staggering rise in fatal car accident numbers. As the latest figures show, fatal car accidents are especially prevalent among young drivers who have less than five years of driving experience. Last winter 50 percent of all fatal road accidents involved drivers with up to five years driving experience and an additional 15 percent were drivers who had between six to eight years of experience. The interim figures of the current year show that the massive advertisement campaign 'fighting accidents' has resulted in some improvements but the truth is that the number of younger drivers involved in fatal accidents is intolerably high.</p>
                    <p>Question 1 Fatal car accidents are more prevalent amongst young drivers with six to eight years of experience than older drivers with similar experience.

                    <br/>True
                    <br/>False
                    <br/>Cannot Say
                    </p>
                    </div>
                    </div>
                </div>
        );
    }
}