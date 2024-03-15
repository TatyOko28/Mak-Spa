import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />        
        <Main />
      </div>
    </Provider>
  );
}

export default App;
