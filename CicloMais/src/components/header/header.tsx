import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const avatars = [
  require('../assets/avatar1.png'),
  require('../assets/avatar2.png'),
  require('../assets/avatar3.png'),
];

export default function Header({
  nome,
  avatarIndex,
  onAvatarPress,
}: {
  nome: string;
  avatarIndex: number;
  onAvatarPress: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo(a), {nome}</Text>
      <TouchableOpacity onPress={onAvatarPress}>
        <Image source={avatars[avatarIndex]} style={styles.avatar} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
});