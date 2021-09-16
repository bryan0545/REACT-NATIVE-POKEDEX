import React from 'react';
import {Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';

const HomeScreen = () => {
  const {top: topScreen} = useSafeAreaInsets();
  const {simplePokemonList, isLoading} = usePokemonPaginated();
  console.log('--- 10 simplePokemonList --- ', simplePokemonList);
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeballBG}
      />
      <Text
        style={{
          ...styles.title,
          ...styles.globalMargin,
          marginTop: topScreen + 20,
        }}>
        Pokedex
      </Text>
    </>
  );
};

export default HomeScreen;
