import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import ResultsDetail from '../components/ResultsDetail';

const ShowResults = ({ route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  const getResult = async businessId => {
    const response = await yelp.get(`/${businessId}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, [id]);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ShowResults;
