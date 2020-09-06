export function loginEmployee(state = [],action){
   switch(action.type){
       case 'LOGIN-USER':
            return { ...state, login:action.payload };
            break;
        default:
            return state;    
   }
} 