import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../navigator/Navigator';
import {FadeInImage} from '../components/FadeImage';
import {usePokemon} from '../hooks/usePokemon';
import PokemonDetails from './PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({route, navigation}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id, name, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();
  const {isLoading, pokemon} = usePokemon(id);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: color,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.pop();
          }}
          style={{
            ...styles.backbutton,
            top: top + 10,
          }}>
          <Icon name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>
        <Text style={{...styles.name, top: top + 45}}>
          {name + '\n'}#{id}
        </Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={{...styles.pokeball}}
        />
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>
      {isLoading ? (
        <ActivityIndicator
          color={color}
          size={50}
          style={styles.ActivityIndicator}
        />
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

export default PokemonScreen;

export const styles = StyleSheet.create({
  headerContainer: {
    height: 350,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  backbutton: {
    position: 'absolute',
    left: 10,
  },
  name: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 10,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: 10,
    opacity: 0.8,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -20,
  },
  ActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
