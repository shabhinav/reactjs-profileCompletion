import React from 'react';
import './editpref.scss';

export default class Editpref extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            intern: [
                {id:1 , text:'Engineering and Technology'},
                {id:2 ,text:'Science'},
                {id:3 ,text:'Marketing and Sales'},
                {id:4 ,text:'Operations'},
                {id:5 ,text:'Finance'},
                {id:6 ,text:'Strategy'},
                {id:7 ,text:'Analytics'},
                {id:8 ,text:'Events'},
                {id:9 ,text:'Media'},
                {id:10 ,text:'Design and Architecture'},
                {id:11 ,text:'Social Volunteering'},
                {id:12 ,text:'Teaching'},
                {id:13 ,text:'Travel and Hospitality'},
                {id:14 ,text:'Law'},
                {id:15 ,text:'Unique Experiences'},
                {id:16 ,text:'Campus Ambassadors'}
            ],

            mission:[
                {id:17,text:'Social Media Tasks'},
                {id:18,text:'Campus Tasks'},
                {id:19,text:'Promotional Tasks'},
                {id:20,text:'Feedback and Review Tasks'}
            ],

            selectedintern:[],

            selectedmission:[]
        }
        this.storeid=this.storeid.bind(this);

    }

        storeid(type,id){
            if(type=='intern'){
                this.setState({
                    selectedintern:[...this.state.selectedintern,id]
                  });
            }else if(type=='mission'){
                this.setState({
                    selectedmission:[...this.state.selectedmission,id]
                  });
            }
        }

    render(){
        const internlist = this.state.intern.map((link) =>
        <li className={this.state.selectedintern.indexOf(link.id)>-1?'active':''}  onClick={()=>{this.storeid('intern',link.id)}} key={link.id}>{link.text}  </li> 
        );
        const missionlist = this.state.mission.map((links) =>
        <li className={this.state.selectedmission.indexOf(links.id)>-1?'activem':''}onClick={()=>{this.storeid('mission',links.id)}} key={links.id}>{links.text} </li> 
        );

        return(
            <div className='editpref'>
                <div className="container">
                    <h1>Edit Preferences</h1>
                    <div className="row">
                        <div className="col-lg-6 ">
                            <h3>Internship Preferences</h3>
                            <div className="internbg">
                                <ul>
                                    {internlist}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <h3>Missions Preferences</h3>
                            <div className="missionbg">
                                <ul>
                                    {missionlist}
                                </ul>
                            </div>
                            <button className="btn btn-primary">Done</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        );
    }
}