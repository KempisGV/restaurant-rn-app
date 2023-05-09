import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const id = navigation.getParam('id');

  const getResult = async id => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('There was an error getting the restaurant info.');
      console.log(er);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>{result?.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.image}
              source={{
                uri: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 5,
  },
});

export default ResultsShowScreen;
