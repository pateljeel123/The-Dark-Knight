import { useDispatch, useSelector } from "react-redux";

export const WatchListPage = () => {
  const { watchList } = useSelector((data)=>data.watchListReducer)
  return (
    <div>
      <div data-testid="watch-list" style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap:"20px"}}>
        {watchList.map((ele)=>(
         <div className="match-card" key={ele.id}>
            <img src="https://thumbs.dreamstime.com/b/young-boys-playing-soccer-game-training-football-match-youth-soccer-teams-young-boys-playing-soccer-game-training-168456968.jpg" alt="" className="match-image" style={{height: "400px", width: "400px"}} />
            <h1 className="competition-name" >{ele.competition}</h1>
            <p className="match-year">{ele.year}</p>
            <h3 className="team-1">{ele.team1}</h3>
            <h3 className="team-2">{ele.team2}</h3>
         </div>
        ))}
      </div>
    </div>
  );
};