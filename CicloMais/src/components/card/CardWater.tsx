import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardWater({
  aguaConsumida,
  metaAgua,
  onPress,
}: {
  aguaConsumida: number;
  metaAgua: number;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>💧 Água</Text>
      <Text>{aguaConsumida.toFixed(2)}L / {metaAgua.toFixed(2)}L</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#B2EBF2', padding: 16, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 18, fontWeight: 'bold' },
});