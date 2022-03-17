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
    setTweets([...tweets, 'Tweet 5'])
  }

  return (
    <>
      {tweets.map(tweet => {
        return <Tweet text={tweet} key={tweet}/>
      })}

      <button 
         onClick={createTweet}
         style={{ 
           backgroundColor: 'purple',
           color: '#fff',
           padding: '12px',
           borderRadius: '4px',
           cursor: 'pointer',
           border: 0,
          }}
        >
          Adicionar Tweet
      </button>
    </>
  ) 
}

export default App
