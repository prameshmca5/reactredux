
const ADDNAME = "ADD_NEW";
const REMOVENAME = "REMOVE_NAME";

const initialState = ['Ramesh', 'Amutha'];

const nameMgtReducer = (state = initialState, action) =>{
   console.log("STATE ==> ", state);
   console.log("ACTION ==> ", action.data);
    switch(action.type){
        case ADDNAME:
            return [...state, action.data];
        case REMOVENAME:
           let name = [...state];
           name.splice(action.data, 1);
           name.concat();
           console.log(name);
           return name;
        case "NAMEADD_RESULT":
            return state;
        default:
            return state; 
    } 

}
export default nameMgtReducer;
