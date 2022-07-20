import axios from 'axios';

const BASE_URL = 'https://server-trabago.herokuapp.com/api/post/consultar'

const enviar_URL = 'https://server-trabago.herokuapp.com/api/post/guardar'

export function getPosts() {
  return axios.get(BASE_URL);
}

export function getPost(id) {
  return axios({
    method: 'get',
    url: BASE_URL,
    params: { id },
  })
}

export function postPost({ title, body }) {
  return axios({
    method: 'post',
    url: enviar_URL,
    data: {
      title,
      body,
    }
  })
}
