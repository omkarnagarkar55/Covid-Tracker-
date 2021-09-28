import './App.css';

import Header from './Header';

function App(props) {
  
  return (
    <>
    <Header/>
    <div className="App">
        {props.children}
    </div>
    
    </>
  );
}

export default App;
