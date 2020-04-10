import React from "react";
import {movie, songs, works} from "./Reducer";
import {useSelector, useDispatch} from "react-redux";

const MovieList =() => {
    const getactval = useSelector(state=>state);
    const dispatch = useDispatch();
    return(
        <div>
            <h3 style={{textAlign:"center"}}>{getactval}</h3>
            <button onClick={()=>dispatch(movie())}>Click Movie Action</button>&nbsp;&nbsp;
            <button onClick={()=>dispatch(songs())}>Click Songs Action</button>&nbsp;&nbsp;
            <button onClick={()=>dispatch(works())}>Click Work Action</button>&nbsp;&nbsp;
        </div>
    )
};

export default MovieList;


