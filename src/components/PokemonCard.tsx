import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }

    ImageColors.getColors(pokemon.picture, {fallback: 'grey'}).then(colors => {
      if (colors.platform === 'android') {
        setBgColor(colors.dominant || 'grey');
      } else if (colors.platform === 'ios') {
        setBgColor(colors.background || 'grey');
      } else {
        setBgColor('grey');
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={{...styles.cardContainer, backgroundColor: bgColor}}>
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {`\n#${pokemon.id}`}
          </Text>
        </View>
        <View style={styles.pokeballContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokeball}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

export const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    height: 120,
    width: windowWidth * 0.4,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeballContainer: {
    overflow: 'hidden',
    width: 90,
    height: 90,

    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  pokeball: {
    width: 90,
    height: 90,
    position: 'absolute',
    bottom: -25,
    right: -25,
    opacity: 0.6,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -8,
  },
});
