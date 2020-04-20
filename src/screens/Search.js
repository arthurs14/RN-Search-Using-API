import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const Search = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchAPI, results, errorMessage] = useResults();

  // console.log('results:', results);

  const filterResultByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => result.price === price);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultByPrice('$')}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultByPrice('$$')}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultByPrice('$$$')}
          title="Big Spender"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Search;
