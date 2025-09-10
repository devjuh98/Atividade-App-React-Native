import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardAlimentacao() {
  const totalCalorias = 1850; // esse valor virá do cálculo das refeições
  const ganhoPeso = (totalCalorias / 7700).toFixed(2);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>🥗 Alimentação</Text>
      <Text style={styles.info}>Total: {totalCalorias} kcal</Text>
      <Text style={styles.info}>+ {ganhoPeso} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF3E0',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#5D4037',
  },
});