import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/footer';
import Footer from './components/mainContent';
import Joke from './components/joke'

function App() {
  return (
    <div>
      <ul>
        <Joke
        Question="Why do humming birds hum?"
        Punch="Because they can't remember words"
        />
        <Joke
        Question="I make a lot of Dad jokes. For someone who's not a Dad."
        Punch="It's a real faux pa!!"
        />
        <Joke
        Punch="It's hard to explain puns to kleptomanics because they always take things literally!!!"
        />
      </ul>
    </div>
  );
}

export default App;
