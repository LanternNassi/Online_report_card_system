let backend_reducer = (state = {
    //Switches for overlays
    
    Add_teacher_switch : false,
    Classes : true
} , action) => {
    switch(action.type){
        case 'Add_teacher_switch' :
            return {
                ...state , Add_teacher_switch : state.Add_teacher_switch ? false : true
            }
        case 'Classes' :
            return {
                ...state , Classes : state.Classes ? false : true
            }
        default :
            return state
    }

}

export default backend_reducer
