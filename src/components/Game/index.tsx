import { useState } from 'react';
import Board from '../Board';
import styles from './index.less';

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: string[]) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  return (
    <div className={styles.game}>
      <div className={styles['game-bord']}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles['game-info']}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
