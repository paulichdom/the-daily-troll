// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Page } from './components/page/page';

function App() {
  //const [count, setCount] = useState(0)
  const quote = [];

  return (
    <Page>
      {/*  <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <blockquote>
        <p>
          Everything written symbols can say has already passed by. They are
          like tracks left by animals. That is why the masters of meditation
          refuse to accept that writings are final. The aim is to reach true
          being by means of those tracks, those letters, those signs - but
          reality itself is not a sign, and it leaves no tracks. It doesn’t come
          to us by way of letters or words. We can go towards it, by following
          those words and letters back to what they came from. But so long as we
          are preoccupied with symbols, theories and opinions, we will fail to
          reach the principle.
        </p>
        <p>But when we give up symbols and opinions, aren’t we left with the utter nothingness of being?</p>
        <p>Yes.</p>
      </blockquote>
      <figcaption>— Kimura Kyuho, <cite>Kenjutsu Fushigi Hen [On the Mysteries of Swordsmanship], 1768</cite></figcaption>
    </Page>
  );
}

export default App;
