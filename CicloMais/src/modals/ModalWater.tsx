import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import { calcularIntervalo } from '../service/WaterService';
import { TimeIntervalNotificationTrigger } from 'expo-notifications';

export default function ModalWater({
  onClose,
  onRegistrar,
  imc,
}: {
  onClose: () => void;
  onRegistrar: (ml: number) => void;
  imc: number;
}) {
  const [ml, setMl] = useState<string>(''); // ✅ tipo explícito
    
  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, [])

  const handleSalvar = async () => {
    const quantidade = parseInt(ml, 10);
    if (isNaN(quantidade)) return;

    onRegistrar(quantidade);

    const intervalo = calcularIntervalo(imc);
    const trigger = {
        type: 'timeInterval',
        seconds: intervalo * 3600,
        repeats: false,
        } as const;

    const agendarNotificacao = async (horas: number) => {
        await Notifications.scheduleNotificationAsync({
            content: {
            title: 'Hora de beber água 💧',
            body: 'Seu corpo agradece!',
            },
            trigger: {
            type: Notifications.TriggerType.TIME_INTERVAL,
            seconds: Math.floor(horas * 3600),
            repeats: false,
            },
        });
        };

    onClose();
  };

  return (
    <Modal transparent animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Registrar Água</Text>

        <TextInput
          style={styles.input}
          placeholder="Quantidade (ml)"
          keyboardType="numeric"
          value={ml}
          onChangeText={setMl}
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
    backgroundColor: '#E0F7FA',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#00796B',
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
    color: '#00796B',
    fontWeight: 'bold',
  },
});