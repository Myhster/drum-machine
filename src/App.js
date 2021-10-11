import './App.scss';
import React, { useState } from 'react';
import butArr from './butArray.js';

function App() {
  const [textOut, setTextOut] = useState('love');

  const drumButtons = butArr.map((item, index) => {
    let audio = React.createRef();
    const playSound = () => {
      audio.current.play();
    };

    document.addEventListener('keydown', (e) => {
      const id = e.key.toLocaleUpperCase();
      const audio = document.getElementById(id);
      if (audio) {
        audio.play();
        setTextOut(Object.values(audio)[1]['alt']);
      }
    });

    return (
      <div
        className='drum-pad'
        key={index}
        id={item.id}
        onClick={() => {
          setTextOut(item.id);
          playSound();
        }}
      >
        {item.name}
        <audio
          ref={audio}
          className='clip'
          id={item.name}
          src={item.src}
          alt={item.id}
        ></audio>
      </div>
    );
  });

  return (
    <div className='App'>
      <div id='drum-machine'>
        <h2 className='text-center'>Drum Machine</h2>
        <div className='container'>
          <div className='new-row'>
            <div className='new-row'>
              {drumButtons}
              <div id='display'>
                <h4>output</h4>
                <p>{textOut}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
