import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import Posts from './components/post';
import PostForm from './components/postform';

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
