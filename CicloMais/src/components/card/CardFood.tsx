import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardFood({
  totalCalorias,
  onPress,
}: {
  totalCalorias: number;
  onPress: () => void;
}) {
  const ganhoPeso = totalCalorias / 7700;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>🍽️ Alimentação</Text>
      <Text>{totalCalorias} kcal / +{ganhoPeso.toFixed(2)} kg</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFECB3', padding: 16, borderRadius: 12 },
  title: { fontSize: 18, fontWeight: 'bold' },
});