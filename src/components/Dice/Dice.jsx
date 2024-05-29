import { useState } from 'react';
import diceEmpty from '../../assets/images/dice-empty.png';
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';

const diceImgs = [
  dice1, dice2, dice3, dice4, dice5, dice6
];

const getRandomDiceIndex = () => {
  return Math.floor(Math.random() * diceImgs.length)
}

const Dice = () => {
  const [diceIndex, setDiceIndex] = useState(getRandomDiceIndex());

  const handleClick = () => {
    setDiceIndex(null);

    setTimeout(() => {
      setDiceIndex(getRandomDiceIndex())
    }, 1000);
  }

  const photoToRender = (diceIndex || diceIndex === 0) ? diceImgs[diceIndex] : diceEmpty

  return (
    <img width={100} src={photoToRender} alt="Dice" onClick={handleClick} />
  )
}

export default Dice