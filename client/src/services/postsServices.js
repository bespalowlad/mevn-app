import api from './api.js'

export default {
  fetchPost () {
    return api().get('posts')
  },
  addNewPost (post) {
    return api().post('posts', post)
  },
  getPost (id) {
    return api().get(`post/${id}`)
  },
  updatePost (params) {
    return api().put(`post/${params.id}`, params)
  },
  deletePost (id) {
    return api().delete(`/post/${id}`)
  }
}
