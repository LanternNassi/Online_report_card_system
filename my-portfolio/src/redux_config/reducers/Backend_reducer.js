let backend_reducer = (state = {
    //Switches for overlays
    Add_assessment_switch : false,
    Add_teacher_switch : false,

    add_name : '',
    Classes : true
} , action) => {
    switch(action.type){
        case 'Add_teacher_switch' :
            return {
                ...state , Add_teacher_switch : state.Add_teacher_switch ? false : true
            }
        case 'Add_assessment' : 
        return {
            ...state , Add_assessment_switch : state.Add_assessment_switch ? false : true
        }
        case 'Classes' :
            return {
                ...state , Classes : state.Classes ? false : true
            }
        case 'add_name' : 
            return {
                ...state , add_name : action.text
            }
        default :
            return state
    }

}

export default backend_reducer
