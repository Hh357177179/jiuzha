import api from './axios'
// 关于我们
export const  aboutUs = params => api.get('/api/aboutus', params)