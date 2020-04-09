import api from './axios'
// 获取推荐的活动分类（前端）
export const  register = params => api.post('/api/register', params)
export const  login = params => api.post('/api/login', params)