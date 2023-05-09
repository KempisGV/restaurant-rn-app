import axios from 'axios';
import env from '../../env-config.js';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${env.YELP_API_KEY}`,
  },
});
