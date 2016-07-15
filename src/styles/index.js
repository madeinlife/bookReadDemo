import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
require('./styles/Main.scss');
import 'whatwg-fetch';//很多浏览器不支持fetch，故需要引入这个库
// import App from './components/Main';
// import App from './components/BookList';
// import App from './components/BooksCategory';
// import App from './components/BooksPage';
// import App from './components/Loading';
import App from './components/BookInfoPage';
// import App from './components/BookChapterPage';
// var chapter = {
//     id:'56f77f8b11a95a301a4f369c',
//     title:'修省'
// }
// Render the main component into the dom
// var c = {category:'子部',subcategory:'儒家类'};
var c = {category:'子部',subcategory:'杂家类'};
var book={
    title:'菜根谭',
    _id:'56f74a2d11a95a2eeb772810',
    image:'qianziwen.jpg',
    // summary:'图书介绍哦。。。。。。',
    author:{
        name:'司马迁',
        image:'hongyingming.jpg',
        summary:'[明]（约公元一五九六年前后在世）字自诚，号还初道人，里居及生卒年均不详，明代文学家，约明神宗万历中前后在世。生平事迹不详。著有《仙佛奇踪》四卷，《四库总目》多记老佛二家故事，由此得知他早年热衷于仕途功名，晚年则归隐山林，洗心礼老佛。万历三十年(1603)前后曾经居住在南京秦淮河一带，潜心著述。还与袁黄、冯梦桢等人有所交往。'
    }
}
try {
    // ReactDOM.render(<App categories={c} />, document.getElementById('app'));
    ReactDOM.render(<App book={book} />, document.getElementById('app'));
    // ReactDOM.render(<App chapter={chapter} />, document.getElementById('app'));
} catch (e) {
    ReactDOM.render(<App  />, document.getElementById('app'));
}
