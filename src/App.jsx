import React from 'react';
import GameTable from './GameTable';
import LoginForm from './LoginForm';
import ImageComponent from './ImageComponent';
import CheckboxComponent from './CheckboxComponent';

const App = () => {
  return (
    <div>
      <h1>Meus Componentes</h1>
      <GameTable />
      <LoginForm />
      <ImageComponent />
      <CheckboxComponent />
    </div>
  );
};

export default App;
