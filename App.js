import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Pokemon from './components/pokemons/Pokemon';
import api from './services/api';

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function listPokemon() {
      const response = await api.get(`pokemon`);
      setPokemons(response.data.results);
    }
    listPokemon();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('./assets/pokedexLogo.png')}
          style={styles.logo}
        />

        {pokemons.map(item => {
          return <Pokemon name={item.name} />;
        })}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  text: {
    color: '#aaa',
  },
  logo: {
    margin: 0,
    padding: 0,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  inputSearch: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    margin: 5,
    color: '#aaa',
    borderRadius: 15,
    width: 200,
  },
});
