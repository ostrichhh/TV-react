import { useState } from 'react';
import TV from './TV';
import Remote from './Remote';
import './App.css';

function App() {
  const [currentChannel, setCurrentChannel] = useState(null);

  const channels = {
    0: "No Signal",
    1: "Movie Channel",
    2: "Sports Network",
    3: "News Station",
    4: "No Signal",
    5: "Cooking Channel",
    6: "Nature Documentary",
    7: "No Signal",
    8: "Music TV",
    9: "No Signal"
  };

  const changeChannel = (channelNumber) => {
    setCurrentChannel(channels[channelNumber]);
  };

  return (
    <div className="App">
      <h1>Digital TV System</h1>
      <div className="tv-system">
        <TV currentChannel={currentChannel} />
        <Remote onChannelChange={changeChannel} />
      </div>
    </div>
  );
}

export default App;
