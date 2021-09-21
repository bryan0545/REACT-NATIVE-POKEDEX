import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBackGround}>
        <TextInput
          placeholder="Búscar pokémon"
          style={{
            ...styles.textInput,
            top: Platform.OS === 'ios' ? 0 : 2,
          }}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="search-outline" size={30} color="grey" />
      </View>
    </View>
  );
};

export default SearchInput;

export const styles = StyleSheet.create({
  container: {},
  textBackGround: {
    flexDirection: 'row',
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
