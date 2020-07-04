import api from './index'

export const listPosts = () => api.get('/api/board/music/list/1')
export const readPost = (number) => api.get(`/api/board/music/view/${number}`)
