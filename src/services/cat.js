import api from './api'

export default {
  getImages: async () => {
    return await api.get('/images/search', {
      params: {
        size: 'small',
        limit: 5,
      },
    })
  }
}
