export function Square({square,onclick}){
    return <div className="box" onClick={onclick}>
    {square}</div>;
}