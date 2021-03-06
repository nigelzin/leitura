import { combineReducers } from 'redux'

import {
    LOAD_POSTS,
    LOAD_CATEGORIES,
    LOAD_COMMENTS,
    LOAD_POST,
    ORDER_POST,
    REMOVE_POST,
    EDIT_POST
} from '../actions'

function categories (state = [], action){
    switch (action.type){
        case LOAD_CATEGORIES :
            return action.categories
        default:
            return state
    }
}

function posts (state = [], action){
    console.log('action ', action, 'state ', state )
    switch (action.type) {
        case LOAD_POSTS : 
            return action.posts
        case REMOVE_POST :
            return state.filter(post => post.id !== action.id)
        case EDIT_POST : 
            return state.map(post => post.id === action.id)
        default:
            return state
    }
}

function post (state = {}, action){
    const { post } = action
    switch (action.type) {
        case LOAD_POST : 
            return post
        default:
            return state
    }
}

function comments (state = [], action){
    switch (action.type) {
        case LOAD_COMMENTS:
            return action.comments
        default:
            return state
    }
}
function order (state = {}, action){
    switch (action.type) {
        case ORDER_POST:
            return action.order
        default:
            return state
    }
}
export default combineReducers({
    post, posts, categories, comments, order
})