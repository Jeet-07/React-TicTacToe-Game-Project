export function Square({square,isWinning,onclick}){
    const winnerAnimate = isWinning ? "winner-animate":'';
    const XorO = square==="X"?"text-green":"text-orange";

    return <div className="box" onClick={onclick}>
    <span className={`${XorO} ${winnerAnimate}`}>{square}</span></div>;
}