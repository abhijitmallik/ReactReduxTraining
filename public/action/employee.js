import axios from 'axios';

export function loginEmployee(user){
    console.log('userName',user);
    return function(dispatch){
        axios.post("/login",user,{ headers: {
            'Content-Type': 'application/json',
        }}).then(function(res){
       	  console.log("=====res=====",res);
	      dispatch({type:"LOGIN-USER",payload:res.data});
	   }).catch(function(err){
          console.log("=========err=====",err);
	   })
    }
}