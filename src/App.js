import React from 'react'
import Header from './components/Header'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/styles/navbar.scss"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
