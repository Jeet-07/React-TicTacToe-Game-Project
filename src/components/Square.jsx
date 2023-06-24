export function Square({square,onclick}){
    return <div className="box" onClick={onclick}>
    <span className={square==="X"?"text-green":"text-orange"}>{square}</span></div>;
}