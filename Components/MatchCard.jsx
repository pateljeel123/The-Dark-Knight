import React from "react";

export const MatchCard = ({ match, addWatchListHandle }) => {
  return (
    <div className="match-card" style={{marginBottom: "20px"}}>
      {/* show the match details   */}
      <img src="https://thumbs.dreamstime.com/b/young-boys-playing-soccer-game-training-football-match-youth-soccer-teams-young-boys-playing-soccer-game-training-168456968.jpg" alt="" className="match-image" style={{height: "400px", width: "400px"}} />
      <h1 className="competition-name" >{match.competition}</h1>
      <p className="match-year">{match.year}</p>
      <h3 className="team-1">{match.team1}</h3>
      <h3 className="team-2">{match.team2}</h3>
      <button className="add-to-watchlist" onClick={()=>addWatchListHandle(match.id)}>WatchList</button>
      {/* use any static image, its not provided in server data  */}
    </div>
  );
};