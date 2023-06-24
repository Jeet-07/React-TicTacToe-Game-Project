const StatusMessage = ({winner,nextPlayer,squares})=>{
    const noMovesLeft = squares.every((val)=> val !==null);

    function renderMessage(){
        if(winner)
            return <div className="message">
                Winner is <span className={winner=='X' ? 'text-green':'text-orange'}>{winner}</span>
                </div>;
        
        if(!winner && noMovesLeft)
            return <div className="message">
                Game Draw
            </div>;
        
        return <div className="message">Next move <span className={nextPlayer==="X"?"text-green":"text-orange"}>{nextPlayer}</span></div>
    }

    return <>
        {renderMessage()}
    </>;
}
export default StatusMessage