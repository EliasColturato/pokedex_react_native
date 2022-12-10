import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import PokemonType from '../pokemonType/PokemonType';

export default function Pokemon({ name }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonId, setPokemonId] = useState('');
  useEffect(() => {
    async function listPokemon() {
      const response = await api.get(`pokemon/${name}`);
      setPokemonImage(response.data.sprites.front_default);
      setPokemonId(response.data.id);
      setPokemonType(response.data.types);
    }
    listPokemon();
  }, []);
  return (
    <View style={styles.pokemonCard}>
      <View style={styles.pokemonInfo}>
        <Text style={styles.pokemonTitle}>{name}</Text>
        <Text style={styles.pokemonId}>
          #
          {pokemonId > 999
            ? ('00000' + pokemonId).slice(-5)
            : ('000' + pokemonId).slice(-3)}
        </Text>
        <PokemonType pokemonType={pokemonType} />
      </View>
      <Image
        style={styles.pokemonImage}
        source={{ uri: pokemonImage }}
        alt="PokemonImage"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pokemonCard: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 350,
    height: 150,
    margin: 10,
    borderRadius: 20,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pokemonInfo: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
  },
  pokemonTitle: {
    fontSize: 20,
    textTransform: 'capitalize',

    color: '#aaa',
  },
  pokemonId: {
    color: '#4c4c4c',
  },
  pokemonImage: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
});
