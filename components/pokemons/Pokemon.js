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
      </View>
      <Image
        style={styles.pokemonImage}
        source={{ uri: pokemonImage }}
        alt="PokemonImage"
      />
      <PokemonType pokemonType={pokemonType} />
    </View>
  );
}

const styles = StyleSheet.create({
  pokemonCard: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  pokemonInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    alignItems: 'center',
  },
  pokemonTitle: {
    textTransform: 'capitalize',
    textAlign: 'center',
    color: '#aaa',
    fontSize: 25,
    fontWeight: '800',
  },
  pokemonId: {
    color: '#4c4c4c',
    fontSize: 15,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    margin: 30,
    resizeMode: 'contain',
  },
});
