import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './My.css'

const TextAppear = ({ text }) => {
  const [visibleLetters, setVisibleLetters] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleLetters((prevLetters) => {
        if (prevLetters.length < text.length) {
          return [...prevLetters, text[prevLetters.length]];
        }
        clearInterval(intervalId);
        return prevLetters;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <h1 className="text-appear">
      {visibleLetters.map((letter, index) => (
        <span key={index} className="active">
          {letter}
        </span>
      ))}
    </h1>
  );
};

const App = () => {
  return (
    <section className=''>
    <div className="container">
      <div className="">
        <div className="title-animated ">
          <TextAppear text="Conoce un poco sobre mí" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default App;