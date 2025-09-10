import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import { calcularCalorias } from '../service/FoodService';

export default function ModalFood({
  onClose,
  onRegistrar,
}: {
  onClose: () => void;
  onRegistrar: (calorias: number) => void;
}) {
  const [refeicao, setRefeicao] = useState<string>(''); // ✅ tipo explícito
  const [porcao, setPorcao] = useState<string>('');     // ✅ tipo explícito

  const handleSalvar = () => {
    const qtd = parseInt(porcao, 10); // ✅ base decimal
    if (isNaN(qtd) || refeicao.trim() === '') return;

    const total = calcularCalorias(refeicao, qtd);
    onRegistrar(total);
    onClose();
  };

  return (
    <Modal transparent animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Registrar Alimentação</Text>

        <TextInput
          style={styles.input}
          placeholder="Refeição (ex: pão, ovo)"
          value={refeicao}
          onChangeText={setRefeicao}
        />

        <TextInput
          style={styles.input}
          placeholder="Quantidade (porções)"
          keyboardType="numeric"
          value={porcao}
          onChangeText={setPorcao}
        />

        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.cancel}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    backgroundColor: '#fff',
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#FFF8E1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#FFB74D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancel: {
    textAlign: 'center',
    color: '#FF9800',
    fontWeight: 'bold',
  },
});