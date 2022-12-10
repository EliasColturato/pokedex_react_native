import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import api from '../../services/api';

export default function Pokemon({ pokemonType }) {
  return (
    <View style={styles.typePokemon}>
      {pokemonType.map(item => {
        return <Text style={styles.text}>{item.type.name}</Text>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  typePokemon: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '70%',
  },
  text: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 10,
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 10,
  },
});
