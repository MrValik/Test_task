import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import AddArticle from './components/AddArticle';
import NewsPage from './components/NewsPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ArticleList} />
          <Route path="/add" component={AddArticle} />
          <Route path="/news" component={NewsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
