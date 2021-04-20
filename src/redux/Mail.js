import * as types from './types'
const initialState = {
    openmessage:false,
    closemessage:true,
    
    currentstate:{}

}

const Mail= (state = initialState, { type, payload }) => {
    switch (type) {

    case types.OPENMESSAGE:
        return { ...state,openmessage:!state.openmessage}
        
    case types.CLOSEMESSAGE:
        return {...state,closemessage:false}
    case types.SELECTED:
        return{...state,currentstate:payload} 
        
    case types.USER:{
        return {...state,Person:payload}
    }
    
    default:
        return state
    }
}

export default Mail;
