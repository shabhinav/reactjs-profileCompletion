import React from 'react';
import Header from './header';
import Herobanner from './herobanner';
import Profile from './profile';
import './app.scss'
import Profilesetup from './profilesetup';
import Psychomatrictest from './psychometrictest';
import Editpref from './editpref';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentstate:'step 1'
    }
    this.changestate=this.changestate.bind(this);
  }
  changestate(newstate){
      this.setState({
        currentstate:newstate
      });
      console.log(this.state.currentstate);
  }
  render(){
    let message
    if(this.state.currentstate=='step 1'){
      message= <div ><Profile /></div>

    }
    else if(this.state.currentstate=='step 2'){
        message= <div>< Profilesetup /></div>

    }
    else{
      message=<div><Psychomatrictest /></div>

    }
    return(
      <div>
        <Header />
        <Herobanner changestate={this.changestate}/>
        <div className=" profilebg">{message}</div>    
        <Editpref/>
      </div>
    );
  }
}
