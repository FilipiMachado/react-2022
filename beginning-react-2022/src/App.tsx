import { useState } from "react"
import { Tweet } from "./components/Tweet"

function App() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4"
  ])

  function createTweet() {

  }

  return (
    <>
      {tweets.map(tweet => {
        return <Tweet text={tweet} key={tweet}/>
      })}

      <button onClick={createTweet}>Adicionar Tweet</button>
    </>
  ) 
}

export default App
