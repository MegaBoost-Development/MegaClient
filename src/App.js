import React from 'react'
import Header from './components/Header'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/styles/navbar.scss"
import "./components/styles/global.scss"

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
