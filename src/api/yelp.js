import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer o2DdXLTT6x2-K9JacIAhu32sWlEXrYmPrO5NUTdEyKRYBXW4qwgt1dy_eGhGbfku32QYGYAG1inmMZ63tD4-htYg4iOBDJ7McsZfHCxzCJemD2XdinwfOplPGS6WXnYx',
  },
});
