export default function Log({ turns }) {



    return (
        <ol id="log">
            {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.pleyer} selected {turn.square.row},{turn.square.col}</li>)}

        </ol>
    )

}