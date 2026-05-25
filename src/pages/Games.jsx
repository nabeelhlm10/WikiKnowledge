import { useEffect, useState } from 'react';

function shuffle(arr) {
  return arr.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]);
}

function MemoryGame() {
  const base = ['🌟', '🚀', '🧠', '🎮', '🎯', '🧩'];
  const [cards, setCards] = useState(() => shuffle([...base, ...base].map((v, i) => ({ id: i, value: v, flipped: false, matched: false }))));
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [moves, setMoves] = useState(0);
  const [best, setBest] = useState(999);

  useEffect(() => {
    const solved = cards.every(card => card.matched);
    if (solved && moves > 0 && moves < best) {
      setBest(moves);
    }
  }, [cards, moves, best]);

  function flip(card) {
    if (card.flipped || card.matched) return;
    const updated = cards.map(c => c.id === card.id ? { ...c, flipped: true } : c);
    setCards(updated);
    if (!first) setFirst(card);
    else if (!second) {
      setSecond(card);
      setMoves(m => m + 1);
      setTimeout(() => {
        setCards(curr => curr.map(c => {
          if (c.id === card.id || c.id === first.id) {
            if (card.value === first.value) {
              return { ...c, matched: true };
            }
            return { ...c, flipped: false };
          }
          return c;
        }));
        setFirst(null);
        setSecond(null);
      }, 700);
    }
  }

  function reset() {
    const deck = shuffle([...base, ...base].map((v, i) => ({ id: i, value: v, flipped: false, matched: false })));
    setCards(deck);
    setFirst(null);
    setSecond(null);
    setMoves(0);
  }

  return (
    <section className="panel page-panel games-panel">
      <div className="panel-header">
        <div>
          <h2>Memory Match Challenge</h2>
          <p>Flip pairs and clear the board with as few moves as possible.</p>
        </div>
        <div className="stats-row">
          <span>Moves {moves}</span>
          <span>Best {best === 999 ? '-' : best}</span>
        </div>
      </div>
      <div className="game-grid memory-grid">
        {cards.map(card => (
          <button key={card.id} className={`game-card ${card.flipped || card.matched ? 'face' : 'back'}`} onClick={() => flip(card)}>
            <div className="face-content">{card.value}</div>
            <div className="back-content">?</div>
          </button>
        ))}
      </div>
      <div className="game-actions">
        <button className="secondary-button" onClick={reset}>Reset board</button>
      </div>
    </section>
  );
}

export default function Games() {
  return <MemoryGame />;
}
