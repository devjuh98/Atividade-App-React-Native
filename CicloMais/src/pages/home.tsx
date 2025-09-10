import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/header/header';
import CardWater from '../components/card/CardWater';
import CardFood from '../components/card/CardFood';
import ModalAvatar from '../modals/ModalAvatar';
import ModalWater from '../modals/ModalWater';
import ModalFood from '../modals/ModalFood';
import { calcularIMC, calcularMetaAgua } from '../service/UserService';

const peso = 60; // ou vindo do usuário
const altura = 160;

const imc = calcularIMC(peso, altura);
const metaAgua = calcularMetaAgua(peso);

export default function Home({ nome }: { nome: string }) {
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [modalAvatarVisible, setModalAvatarVisible] = useState(false);
  const [modalWaterVisible, setModalWaterVisible] = useState(false);
  const [modalFoodVisible, setModalFoodVisible] = useState(false);
  const [aguaConsumida, setAguaConsumida] = useState(0);
  const [caloriasTotais, setCaloriasTotais] = useState(0);

  const peso = 60; // valor fixo por enquanto, depois vamos pegar do usuário
  const metaAgua = (peso * 35) / 1000; // litros por dia

  return (
    <View style={styles.container}>
      <Header
        nome={nome}
        avatarIndex={avatarIndex}
        onAvatarPress={() => setModalAvatarVisible(true)}
      />

      <CardWater
        aguaConsumida={aguaConsumida}
        metaAgua={metaAgua}
        onPress={() => setModalWaterVisible(true)}
      />

      <CardFood
        totalCalorias={caloriasTotais}
        onPress={() => setModalFoodVisible(true)}
      />

      {modalAvatarVisible && (
        <ModalAvatar
          onClose={() => setModalAvatarVisible(false)}
          onSelect={setAvatarIndex}
        />
      )}

      {modalWaterVisible && (
        <ModalWater
          onClose={() => setModalWaterVisible(false)}
          onRegistrar={(ml: number) =>
            setAguaConsumida(prev => prev + ml / 1000) // ml → litros
          }
          imc={peso / (1.6 * 1.6)} // altura fictícia 160cm
        />
      )}

      {modalFoodVisible && (
        <ModalFood
          onClose={() => setModalFoodVisible(false)}
          onRegistrar={(cal: number) =>
            setCaloriasTotais(prev => prev + cal)
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E0F7FA' },
});