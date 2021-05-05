import React from 'react'
import Header from './components/Header'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
