import axios from 'axios';
const CREATE_POST = 'createPost';
const ROOT_URL='http://reduxblog.herokuapp.com/api/';
export function createPost(values,callback){
  const request = axios.post(`${ROOT_URL}/posts?key=1234567/`,values).then(()=>callback())
  return{
    type:CREATE_POST,
    payload:request
  }
}