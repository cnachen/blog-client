import { useState } from "react";

import './Game.css'

function whoIsWinning(squares) {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let win of wins) {
        let [a, b, c] = win;
        console.log(squares[a], squares[b], squares[c]);
        if (squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Square({value, onSquareClicked}) {
    const button_style = {
        width: 40,
        height: 40,
    };
    return (
        <>
            <button style={button_style} className="square" onClick={onSquareClicked}>
                {value}
            </button>
        </>
    );
}

function Board({step, squares, onSquareUpdated}) {
    let winning = whoIsWinning(squares);

    function onSquareClicked(n) {
        if (winning !== null || squares[n] !== null) {
            return;
        }
        squares[n] = step % 2 ? "X" : "O";
        onSquareUpdated(squares, step + 1);
    }

    let description = (winning === null) ? `current step: ${step}` : `${winning} winned!`;

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onSquareClicked={() => onSquareClicked(0)} />
                <Square value={squares[1]} onSquareClicked={() => onSquareClicked(1)} />
                <Square value={squares[2]} onSquareClicked={() => onSquareClicked(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClicked={() => onSquareClicked(3)} />
                <Square value={squares[4]} onSquareClicked={() => onSquareClicked(4)} />
                <Square value={squares[5]} onSquareClicked={() => onSquareClicked(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClicked={() => onSquareClicked(6)} />
                <Square value={squares[7]} onSquareClicked={() => onSquareClicked(7)} />
                <Square value={squares[8]} onSquareClicked={() => onSquareClicked(8)} />
            </div>
            <br></br>
            <h1>{description}</h1>
        </>
    );
}

export default function Game() {
    let [state, setState] = useState(Array(9).fill(null));
    let [step, setStep] = useState(0);

    function onSquareUpdated(squares, step) {
        setState(squares);
        setStep(step);
    }

    return (
        <>
            <Board step={step} squares={state} onSquareUpdated={onSquareUpdated} />
        </>
    );
}