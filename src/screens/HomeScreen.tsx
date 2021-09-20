import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
  const {top: topScreen} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeballBG}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                marginTop: topScreen + 20,
              }}>
              Pokedex
            </Text>
          )}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          numColumns={2}
          onEndReachedThreshold={0.4}
          onEndReached={loadPokemons}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} color="grey" size={30} />
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;
