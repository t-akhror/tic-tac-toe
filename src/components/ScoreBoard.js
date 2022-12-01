import React from 'react'


export const ScoreBoard = ({ scores, xPlaying,playerNames }) => {
  const { xScore, oScore } = scores;

  return (
    <>
     <p className='gameStatus'>hello</p>
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>{playerNames.x} X - {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>{playerNames.o} O - {oScore}</span>
    </div>
    </>
  )
}
