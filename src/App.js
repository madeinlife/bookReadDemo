import React from 'react';
import { Router,IndexRoute, Route, browserHistory } from 'react-router'

import Home from './components/Home';

import BooksPage from './components/BooksPage';
import BookInfoPage from './components/BookInfoPage';
import BookChapterPage from './components/BookChapterPage';

require('normalize.css/normalize.css');
require('./styles/Main.css');


class App extends React.Component {
  render() {
    return (
     <Router history={browserHistory}>
    <Route path='/' component={Home}>
      <IndexRoute component={BooksPage} />
      <Route path='list/category/:subcategory' component={BooksPage} />
      <Route path='list' component={BooksPage}>
          <Route path=':category' component={BooksPage} />
          <Route path=':category/:subcategory' component={BooksPage} />
      </Route>
      <Route path='info/:bookid' component={BookInfoPage} />
      <Route path='chapter/:chapterid' component={BookChapterPage} />
    </Route>
  </Router>
    );
  }
}

export default App;
