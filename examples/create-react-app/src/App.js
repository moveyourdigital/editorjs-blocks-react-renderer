import logo from './logo.svg';
import Blocks from 'editorjs-blocks-react-renderer';
import './App.css';

function App() {
  const data = {
    time: 1610632160642,
    blocks: [
      {
        id: '_32hejeTfv',
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
        id: 'xnDhLWRMRC',
        type: 'paragraph',
        data: {
          text: 'Edit <code>src/App.js</code> and save to reload.',
        },
      },
      {
        id: 'mCXb0uDFkJ',
        type: 'paragraph',
        data: {
          text: '<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>',
        },
      },
    ],
    version: '2.25.0',
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
