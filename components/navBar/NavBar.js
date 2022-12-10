import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
// import api from './services/api';

export default function NavBar({ nextPage }) {
  return (
    <View style={styles.navBar}>
      <Text
        style={styles.buttonNav}
        onPress={() => alert('Você clicou em voltar')}
      >
        Voltar
      </Text>
      <Text style={styles.buttonNav} onPress={() => nextPage}>
        Avançar
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
