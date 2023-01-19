
const stateDefault = {
    arrStudent: [{id:'', fullName:'', phoneNumber:'', email:''}]
}

export const QLSVReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'ADD_STUDENT': {
            // Add student info into arrStudent
            const arrStudentUpdate = [...state.arrStudent, action.student];
            state.arrStudent = arrStudentUpdate;
            return {...state}
            console.log(action)
        }; break;
        default: {
            return {...state}
        }; break;
    }
    
}