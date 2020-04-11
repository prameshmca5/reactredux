
//STARGING VARIABLE
const MOVIE = "MOVIE";
const SONGS = "SONGS";
const WORKS = "WORKS";
 

// Action created Redux
export const movie =() => ({type:MOVIE});
export const songs =() => ({type:SONGS});
export const works =() => ({type:WORKS});

//Reducer
const Reducer = (state, action) => {
    switch (action.type) {
        case MOVIE:
            return state = "Currently am watching movies"; 

        case SONGS:
            return state = "Am Listing for ILAYARAJA SONGS"; 
        case WORKS:
            return state = "Am Working Software Developer"; 
        default:
            return state = "No Selection Found"; 
    }
}

export default Reducer;