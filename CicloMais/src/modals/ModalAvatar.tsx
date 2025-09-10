import React from 'react';
import { View, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';

const avatars = [
  require('../assets/avatar1.png'),
  require('../assets/avatar2.png'),
  require('../assets/avatar3.png'),
];

export default function ModalAvatar({
  onClose,
  onSelect,
}: {
  onClose: () => void;
  onSelect: (index: number) => void;
}) {
  return (
    <Modal transparent animationType="slide">
      <View style={styles.container}>
        {avatars.map((img, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              onSelect(index);
              onClose();
            }}
          >
            <Image source={img} style={styles.avatar} />
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-around', padding: 20, backgroundColor: '#fff' },
  avatar: { width: 60, height: 60, borderRadius: 30 },
});