import * as types from "./actionTypes"
import axios from "axios"

export const fetchPostRequest = () => ({
    type: types.FETCH_POST_REQUEST
 })

export const fetchPostSuccess = (post) => ({
    type : types.FETCH_POST_SUCCESS,
    payload : post,
 })

export const fetchPostFailure = (error) => ({
    type : types.FETCH_POST_FAILURE,
    payload : error,
 })

 export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchPostRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            dispatch(fetchPostSuccess(response.data))
            // console.log(response.data);
        })
        .catch(error => dispatch(fetchPostFailure(error)))
    }
 };