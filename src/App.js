import React from 'react';
import logo from './innova_films.gif';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        <a
          className="App-link"
          href="https://perfilstone.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Regards from Perfilstone Innova
        </a></p>
        <h1>Authentication</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
