import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

// Makes an API call to get the list of business from the key word search

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // API request
  const searchAPI = async searchTerm => {
    console.log('hi there');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'los angeles',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // call searchAPI when component is first rendered -> BAD CODE!
  // runs once on mount
  useEffect(() => {
    searchAPI('pasta');
  }, []);

  return [searchAPI, results, errorMessage];
};
