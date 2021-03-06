import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

import React from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" render={() =>
        <Main />
        }
      />
      <Route exact path="/harpstuff" render={() =>
        <section>
          This is where harpstuff goes!
        </section>
        }
      />
      <Route exact path="/books" render={() =>
        <section>
          This is where books go!
        </section>
        }
      />
      <Route exact path="/sound" render={() =>
        <section>
          This is where sound stuff goes!
        </section>
      }
      />
    </div>
  );
}

export default App;
