import React from 'react';
import Header from './Header.js';
import {Link } from 'react-router';
// import '../styles/Home.css';

// import BooksPage from './BooksPage';

class Nav extends React.Component{
    render(){
        return(
            <div className='nav'>
                <div className='wrap'>
                    <ul>
                        <li>
                            <a href='/' className='active'>首页</a>
                        </li>
                        <li>
                            <Link to='/list/子部'  >子部</Link>
                        </li>
                        <li>
                            <Link to='/list/史部'  >史部</Link>
                        </li>
                        <li>
                            <Link to='/list/经部' >经部</Link>
                        </li>
                        <li>
                            <Link to='/list/集部' >集部</Link>
                        </li>
                        <li>
                            <Link to='/info/56f74a2d11a95a2eeb772810' >菜根谭</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
class Home extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Nav />
                {this.props.children}
            </div>
        );
    }
}
export default Home;
