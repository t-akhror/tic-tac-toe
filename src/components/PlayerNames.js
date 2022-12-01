import React from 'react'



export default function PlayerNames({getNames}) {
    const getPlayerNames=(e)=>{
        e.preventDefault();
        const xPlayer=e.target.player1.value
        const oPlayer=e.target.player2.value
        if(xPlayer.trim().length>0&&oPlayer.trim().length>0){
            getNames(xPlayer,oPlayer,true)
            e.target.reset();
        }else{
            alert("Fill all Players name")
        }
    }
  return (
    <div className='playerNames'>
        <p>Tic-Tac-Toe </p>
        <p>Enter Players' Names:</p>
      <form className='form-field' method='post' onSubmit={getPlayerNames}>
        <label className='label'>
          <span className='label-text'>xPlayer:</span>
          <input type="text" name='player1'  />
        </label>
        <label className='label'>
          <span className='label-text'>oPlayer:</span>
          <input type="text"  name='player2'  />
        </label>
        {/* <input type="submit"  value="Save names" /> */}
        <button className='save'>Start game</button>
      </form>
    </div>
  )
}
