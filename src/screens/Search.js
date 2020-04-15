import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  // API request
  const searchAPI = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'los angeles',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Search;
