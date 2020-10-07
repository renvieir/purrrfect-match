import api from './api';

export default {
  getImages: () => {
    return api.get('/images/search', {
      params: {
        size: 'small',
        limit: 5,
      },
    });
  },
};
