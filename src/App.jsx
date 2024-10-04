import React from 'react';
import GameTable from './componentes/GameTable';
import LoginForm from './componentes/LoginForm';
import ImageComponent from './componentes/ImageComponent';
import CheckboxComponent from './componentes/CheckboxComponent';
import Cabecalho from './componentes/Cabecalho';

const App = () => {
  return (
    <div>
      <h1>Meus Componentes</h1>
      <GameTable />
      <LoginForm />
      <ImageComponent />
      <CheckboxComponent />
      <Cabecalho padrao/>
    </div>
  );
};

export default App;
