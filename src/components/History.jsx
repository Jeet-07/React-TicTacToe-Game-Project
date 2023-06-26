const History = ({history,goToMove,currMove})=>{
    return <>
        <div className="message">Game History</div>
        <div className="history-grid mt-2 mb-3">
            {
                history.map((_,idx)=>{
                    return idx===0 ? <div key={idx} className={`history-moves ${currMove==idx ? 'currmove-active':''}`}
                         onClick={()=>{goToMove(idx);}}>
                        Go to Start
                    </div>:
                    <div key={idx} className={`history-moves ${currMove==idx ? 'currmove-active':''}`} onClick={()=>{goToMove(idx);}}>
                        Go to move #{idx}
                    </div>;
                })
            }
        </div>
    </>;
}
export default History