import logo from './logo.svg';
import Blocks from 'editorjs-blocks-react-renderer';
import './App.css';

function App() {
  const data = {
    time: 1610632160642,
    blocks: [
      {
        type: 'image',
        data: {
          file: {
            id: 1,
            url: logo,
            size: 2632,
            extension: 'image/svg',
          },
          caption: null,
          withBorder: false,
          stretched: false,
          withBackground: false,
        },
      },
      {
        type: 'paragraph',
        data: {
          text: 'Edit <code>src/App.js</code> and save to reload.',
        },
      },
      {
        type: 'paragraph',
        data: {
          text: '<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>',
        },
      },
    ],
    version: '2.19.0',
  };

  return (
    <div className="App">
      <header className="App-header">
        <Blocks data={data} config={{
          image: {
            className: "App-logo",
          }
        }} />
      </header>
    </div>
  );
}

export default App;
