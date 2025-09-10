import React, { useState } from 'react';
import Welcome from './src/pages/welcome';
import Home from './src/pages/home';

export default function App() {
  const [nome, setNome] = useState('');

  return nome === '' ? (
    <Welcome onStart={setNome} />
  ) : (
    <Home nome={nome} />
  );
}