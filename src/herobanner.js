import React from 'react';
import './herobanner.scss';

export default class Herobanner extends React.Component{
    render(){
        return(
        <div className='container-fluid herobanner'>
                <div className="row ">
                    <div className="offset-3 col-lg-6">
                        <h2 className="bannerheading">welcome</h2>
                        <p>you're step away from defining the milestone for your project if you want you can personalize your account to make the platform more friendly for you</p>
                    </div>
                    </div>
                    <div className="row ">
                    <div className="col-lg-4">
                        <a onClick={()=>{this.props.changestate('step 1')}} className="stepsstyling">step 1:Your profile</a>
                    </div>
                    <div className="col-lg-4">
                        <a onClick={()=>{this.props.changestate('step 2')} } className="stepsstyling">step 2:Login</a>
                    </div>
                    <div className="col-lg-4">
                        <a onClick={()=>{this.props.changestate('step 3')}} className="stepsstyling">step 3:Psychometric Test</a>
                    </div>
                    </div>
        </div>
    
        );
    }
}