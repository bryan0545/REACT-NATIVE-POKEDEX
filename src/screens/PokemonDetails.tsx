import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {FullPokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from '../components/FadeImage';

interface Props {
  pokemon: FullPokemon;
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text style={{...styles.regularText, marginRight: 8}}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight / 10}Kg</Text>
      </View>
      <View style={{...styles.container}}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      <View style={{...styles.container}}>
        <Text style={styles.title}>Habilidades</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text style={{...styles.regularText, marginRight: 8}}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{...styles.container, marginBottom: 40}}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
              <Text style={{...styles.regularText, marginRight: 8, width: 150}}>
                {stat.stat.name}
              </Text>
              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 18,
  },
  basicSprite: {
    width: 100,
    height: 100,
    borderColor: 'red',
  },
});
