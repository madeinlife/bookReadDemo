import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
require('styles/Main.scss');
import 'whatwg-fetch';//很多浏览器不支持fetch，故需要引入这个库
import { Router,IndexRoute, Route, browserHistory } from 'react-router'
import Home from './components/Home';
// import App from './components/Main';
// import BookList from './components/BookList';
import BooksPage from './components/BooksPage';
// import App from './components/Loading';
import BookInfoPage from './components/BookInfoPage';
import BookChapterPage from './components/BookChapterPage';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
      <IndexRoute component={BooksPage} />
    //   <Route path='list/category/:subcategory' component={BooksPage} />
      <Route path='list' component={BooksPage}>
          <Route path=':category' component={BooksPage} />
          <Route path=':category/:subcategory' component={BooksPage} />
      </Route>
      <Route path='info/:bookid' component={BookInfoPage} />
      <Route path='chapter/:chapterid' component={BookChapterPage} />
    </Route>
  </Router>
), document.getElementById('app'))
