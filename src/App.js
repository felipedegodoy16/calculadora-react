import './App.css';
import { useState } from 'react';

function App() {
  let [calculo, setCalculo] = useState(0);
  const displayCalc = document.querySelector('.display');

  const handleClickNum = (e) => {
    if (!calculo){
      setCalculo(e.target.children[0].innerHTML);
    } else {
      setCalculo(calculo + e.target.children[0].innerHTML);
    }
    displayCalc.innerHTML = calculo;
  }

  const handleClickClear = () => {
    setCalculo();
    displayCalc.innerHTML = '';
  }

  const handleClickCalc = () => {
    try {
      setCalculo(eval(displayCalc.innerHTML).toString());

      if(!calculo) {
          alert('Conta inválida!');
          return;
      }

      displayCalc.innerHTML = calculo;
    } catch(err) {
        alert('Conta inválida!');
    }
  }

  const handleClickErase = () => {
    console.log(typeof calculo);
    setCalculo(calculo.slice(0, -1));
    displayCalc.innerHTML = calculo;
  }

  return (
    <div className="App">
      <div className='calc-header'>
        <h1>
          Calculadora React
        </h1>
      </div>
      <div className='calc-body'>
        <div className='visor-res'>
          <p className='display'>{calculo}</p>
        </div>
        <div className='calc-nums'>
          <div className='column'>
            <div className='clear' onClick={handleClickClear}>
              <p>C</p>
            </div>
            <div onClick={handleClickNum}>
              <p>1</p>
            </div>
            <div onClick={handleClickNum}>
              <p>4</p>
            </div>
            <div onClick={handleClickNum}>
              <p>7</p>
            </div>
            <div>
              <p>#</p>
            </div>
          </div>
          <div className='column'>
            <div onClick={handleClickErase}>
              <p>A</p>
            </div>
            <div onClick={handleClickNum}>
              <p>2</p>
            </div>
            <div onClick={handleClickNum}>
              <p>5</p>
            </div>
            <div onClick={handleClickNum}>
              <p>8</p>
            </div>
            <div onClick={handleClickNum}>
              <p>0</p>
            </div>
          </div>
          <div className='column'>
            <div>
              <p>%</p>
            </div>
            <div onClick={handleClickNum}>
              <p>3</p>
            </div>
            <div onClick={handleClickNum}>
              <p>6</p>
            </div>
            <div onClick={handleClickNum}>
              <p>9</p>
            </div>
            <div onClick={handleClickNum}>
              <p>.</p>
            </div>
          </div>
          <div className='column'>
            <div>
              <p>/</p>
            </div>
            <div onClick={handleClickNum}>
              <p>*</p>
            </div>
            <div onClick={handleClickNum}>
              <p>-</p>
            </div>
            <div onClick={handleClickNum}>
              <p>+</p>
            </div>
            <div className='equal' onClick={handleClickCalc}>
              <p>=</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
