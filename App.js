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
        <View style={styles.header}>
          <Text style={styles.logo}>Pokedex</Text>
          <Text style={styles.paragraphHeader}>
            Procure o Pokemon pelo nome ou ID usando a nossa Pokedex
          </Text>
          <TextInput
            style={styles.inputSearch}
            placeholder="Nome ou ID"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.pokemons}>
          {pokemons.map(item => {
            return <Pokemon name={item.name} />;
          })}
        </View>
        <StatusBar style="inverted" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    paddingBottom: 70,
  },
  text: {
    color: '#aaa',
  },
  header: {
    marginTop: 70,
    height: 200,
    textAlign: 'left',
    width: '85%',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  logo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'left',
  },
  paragraphHeader: {
    color: '#fff',
    textAlign: 'left',
    marginTop: 10,
  },
  inputSearch: {
    padding: 10,
    color: '#aaa',
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
  },
  pokemons: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
