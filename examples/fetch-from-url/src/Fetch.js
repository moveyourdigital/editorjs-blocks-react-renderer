import Blocks from 'editorjs-blocks-react-renderer';
import { useEffect, useState } from 'react';
import isempty from '@lightningspirit/isempty';
import "./Fetch.css";

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/data.json')
    .then((response) => response.json())
    .then(setData)
  }, []);

  return (
    <div className="Fetch">
      {isempty(data) ? (
        "Loading..."
      ) : (
        <Blocks data={data} />
      )}
    </div>
  );
}

export default App;
