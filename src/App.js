import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const randomNumber = Math.floor((Math.random() * (anecdotes.length)))
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])
  const [mostVotes, setMostVotes] = useState(0)

  const changeAnecdote = () => {
    setSelected(randomNumber)
  }

  const checkHighest = (arr) => {
    let max = 0;
    let maxi = 0;
    for(let i = 0; i < anecdotes.length; i++){
      if(arr[i] > max){
        max = arr[i]
        maxi = i
      }
    }

    setMostVotes(maxi)
  }

  const increasePoints = () => {
    const copy = [...points]
    copy[selected]++;
    setPoints(copy)
    checkHighest(copy)
  }

  return (
    <div>
      <h1>Anecdote:</h1>
      <p>{anecdotes[selected]}</p>
      <p>Number of votes: {points[selected]}</p>
      <button onClick={changeAnecdote}>Next Anecdote</button>
      <button onClick={increasePoints}>Vote</button>
      <h1>Highest voted anecdote: </h1>
      <p>{anecdotes[mostVotes]}</p>
    </div>
  )
}



export default App