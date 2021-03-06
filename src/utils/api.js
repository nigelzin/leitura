const api = "http://localhost:3001"

/* Get - API*/
const headers = {
  'Content-type': 'application/json',
  'Authorization': 'whatever'
}
/* Get all of the categories available for the app. */
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())

/* Get all of the posts for a particular category. */
export const getAllPostsCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

/* Get all of the posts. Useful for the main page when no category is selected. */
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

/* 	Get the details of a single post. */
export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())

/* Get all the comments for a single post. */
export const getPostComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())

/* 	Get the details for a single comment. */
export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())

/* Used for voting on a comment. */    
export const voteComment = (id, vote) =>
  fetch(`${api}/comments/${id}`, {
        method: "POST",
        headers,
        body: JSON.stringify({ 
          "option" : vote 
        }) 
  }).then(res => res.json())

/* Used for voting on a post. */
export const votePost = (id, vote) =>
  fetch(`${api}/posts/${id}`, {
        method: "POST",
        headers,
        body: JSON.stringify({ 
          "option" : vote 
        }) 
  }).then(res => res.json())

 /* Add a comment to a post. */
export const addComment = (id, timestamp, body, author, parentId) =>
  fetch(`${api}/comments`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      id: id,
      timestamp: timestamp,
      body: body,
      author: author,
      parentId: parentId
    })
  }).then(res => res.json())

export const editComment = (id, body, timestamp) =>
  fetch(`${api}/comments/${id}`,{
    method: "PUT",
    headers,
    body: JSON.stringify({
      timestamp: timestamp,
      body: body
    })
  })
export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, { 
    method: "DELETE",
    headers,
    body: JSON.stringify({
      deleted: true
    }) 
  }).then(res => res.json())
  
export const addPost = (id, timestamp, title, body, author, category) =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      id: id,
      timestamp: timestamp,
      title: title,
      body: body,
      author: author,
      category: category
    })
  }).then(res => res.json())

export const editPost = (id, title, body) =>
  fetch(`${api}/posts/${id}`,{
    method: "PUT",
    headers,
    body: JSON.stringify({
      title: title,
      body: body
    })
  })
export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, { 
    method: "DELETE",
    headers,
    body: JSON.stringify({
      deleted: true,
      parentDeleted: true
    }) 
  }).then(res => res.json())
