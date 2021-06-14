import React from 'react';
import './App.css';
import Button from '../Button/Button';
import ButtonReset from '../ButtonReset/ButtonReset';
import gameLogic from '../GameLogic/GameLogic';
import Popup from '../Popup/Popup';
import { popupMessage } from '../../utils/constants';

function App() {
  const [isPlay, setIsPlay] = React.useState(false);
  const [isManPlaysForCrosses, setIsManPlaysForCrosses] = React.useState('');
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [popupTitle, setPopupTitle] = React.useState('');
  const [field, setField] = React.useState(gameLogic.getField());

  React.useEffect(() => {
    const checkWinAndDraw = gameLogic.checkWinAndDraw();
    const newIsPopupOpen = Boolean(checkWinAndDraw);
    setPopupTitle(popupMessage[checkWinAndDraw]);
    setIsPopupOpen(newIsPopupOpen);
  }, [field]);

  function reset() {
    setIsPlay(false);
    gameLogic.resetField();
    setField([...gameLogic.getField()]);
    setIsPopupOpen(false);
    setPopupTitle('');
  }

  function playForCrosses() {
    setIsManPlaysForCrosses(true);
    setIsPlay(true);
  }

  function playforZeroes() {
    setIsManPlaysForCrosses(false);
    setIsPlay(true);
  }

  function makeMove(value, idLine, idCell) {
    const isMove = isPlay && !value;
    // ход человека
    if (isMove) field[idLine][idCell] = isManPlaysForCrosses ? 'x' : 'o';
    setField(isMove ? [...field] : field);
  }

  return (
    <>
      <div className="app">
        <fieldset disabled={isPlay} className="app__buttons-container">
          <Button onClick={playForCrosses} title="Играть за крестики" />
          <Button onClick={playforZeroes} title="Играть за нолики" />
        </fieldset>
        <div className="app__field">
          {field.map((line, idLine) => (
            <div key={idLine} className="app__line">
              {line.map((cell, idCell) => (
                <div
                  onClick={() => makeMove(cell, idLine, idCell)}
                  key={idCell}
                  className={`app__cell 
                  ${!isPlay && 'app__cell_disabled'} 
                  ${idLine === 0 && 'app__cell_top'} 
                  ${idLine === 2 && 'app__cell_bottom'} 
                  ${idCell === 0 && 'app__cell_left'} 
                  ${idCell === 2 && 'app__cell_right'}
                `}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
        <ButtonReset onClick={reset} />
      </div>
      <Popup isOpen={isPopupOpen} title={popupTitle} reset={reset} />
    </>
  );
}

export default App;
