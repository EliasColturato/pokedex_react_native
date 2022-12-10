import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  RefreshControl,
} from 'react-native';
import Pokemon from './components/pokemons/Pokemon';
import api from './services/api';

import NavBar from './components/navBar/NavBar';

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    async function listPokemon() {
      const response = await api.get(`pokemon?offset=${page}&limit=9`);
      setPokemons(response.data.results);
    }
    listPokemon();
  }, [page]);
  function previousPage() {
    if (page === 0) {
      alert('Você chegou ao início da lista');
    } else {
      setPage(page - 9);
    }
  }

  function nextPage() {
    setPage(page + 9);
  }

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
          <View style={styles.navBar}>
            <Text style={styles.buttonNav} onPress={previousPage}>
              Voltar
            </Text>
            <Text style={styles.buttonNav} onPress={nextPage}>
              Avançar
            </Text>
          </View>
        </View>

        <View>
          {pokemons.map(item => {
            return <Pokemon name={item.name} key={item.name} />;
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
    marginTop: 120,
    marginBottom: 20,
    height: 200,
    textAlign: 'left',
    width: '85%',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  logo: {
    color: '#e28743',
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
  navBar: {
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  buttonNav: {
    color: '#fff',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#e28743',
    borderRadius: 200,
    width: 100,
    textAlign: 'center',
    color: '#fff',
  },
});
