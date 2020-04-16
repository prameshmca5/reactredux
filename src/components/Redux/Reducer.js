
//STARGING VARIABLE
const MOVIE = "MOVIE";
const SONGS = "SONGS";
const WORKS = "WORKS";
 

// Action created Redux
export const movie =() => ({type:MOVIE});
export const songs =() => ({type:SONGS});
export const works =() => ({type:WORKS});

const initalState = {
    counter: "Button not Clicked"
}

//Reducer
const reducerstate = (state = initalState, action) => {
    if (action.type === 'MOVIE') {
        return {
            counter: "Am Watching Tamil Movie"
        }
    }

    if(action.type === 'SONGS') {
        return {
            counter: 'Am Hearing Tamil Songs'
        }
    }

    if(action.type === 'WORKS'){
        return {
            counter: "Am Working for office programming"
        }
    }

    return state;

}

 export default reducerstate;