import React,{useState} from 'react'
import './App.css';

const QUOTES = [
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
  { text: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "If you don't stand for something you will fall for anything.", author: "Malcolm X" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
  { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
  { text: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke" }
];

const Quotegenerator = () => {
  const [current,setCurrent] = useState('');
  const getRandomIndex = () =>{
    const randomIndex = Math.floor(Math.random()*   QUOTES.length);
    setCurrent(QUOTES[randomIndex]);
  }
  return (
    <div>
      <h1>{current.text}</h1>
      <p >{current.author}</p>
      <button onClick={getRandomIndex}>Get a random qoute</button>
    </div>
  )
}

export default Quotegenerator;