import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Icon name="search" size={30} />
      <TextInput placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#d3d3d3',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
