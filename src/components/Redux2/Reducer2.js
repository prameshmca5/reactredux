 
//STARGING VARIABLE
const GYM = "GYM";
const WALKIN = "WALKIN";
const RUNIN = "RUNIN";
 

const initalState = {
    activity: "Activity is not yet started"
}

//Reducer
const activeReducer = (state = initalState, action) => {
    console.log(action.type);
    if (action.type === GYM) {
        return {
            activity: "Am Going GYM"
        }
    }

    if(action.type === WALKIN) {
        return {
            activity: 'Currently am Doing walk'
        }
    }

    if(action.type === RUNIN){
        return {
            activity: "Am Going to running on the road"
        }
    }

    return state;

}

 export default activeReducer;