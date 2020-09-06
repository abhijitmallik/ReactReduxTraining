import React , {Component} from 'react';
import {connect} from 'react-redux';
import {loginEmployee} from '../action/employee';
import {bindActionCreators} from 'redux';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
           showEmployee : false,
           usrName:'',
           usePassword:''
        };
    } 
   _validateLogIn = ()=>{
       this.props.loginEmployee({name:this.state.usrName,password:this.state.usePassword});
   }  
   _userName = (e)=>{
       this.setState({usrName:e.target.value}) 
   }
   _userPassword = (e) =>{
     this.setState({usePassword:e.target.value}) 
   }
   render(){
        return(
             <React.Fragment>
                  Login Detail
                  <div>UserId: <input type='text' onChange={this._userName}></input></div>
                  <div>Password: <input type='password' onChange={this._userPassword}></input></div>
                  <button type="submit" onClick={this._validateLogIn}>Submit</button>
                  {this.props.login && this.props.login.data === true ? 'SUCCESS' : 'FAILURE'}
             </React.Fragment>
        )
   }
}

function mapPropsToState(state){
     console.log(state)
   return {login : state.loginEmployee.login}
}

function mapPropsToAction(dispatch){
   return bindActionCreators({loginEmployee},dispatch);
}

export default connect(mapPropsToState,mapPropsToAction)(App);