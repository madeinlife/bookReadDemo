'use strict'
import React from 'react';
import Header from './Header.js';
import {Link } from 'react-router';
require('styles/Home.scss');

class Nav extends React.Component{
    render(){
        return(
            <div className='nav'>
                <div className='wrap'>
                    <ul>
                        <li>
                            <a href='http://localhost:8000/' className='active'>首页</a>
                        </li>
                        <li>
                            <Link to='/book/list/子部'  >子部</Link>
                        </li>
                        <li>
                            <Link to='/book/list/史部'  >史部</Link>
                        </li>
                        <li>
                            <Link to='/book/list/经部' >经部</Link>
                        </li>
                        <li>
                            <Link to='/book/list/集部' >集部</Link>
                        </li>
                        <li>
                            <Link to='/book/info/56f74a2d11a95a2eeb772810' >菜根谭</Link>
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
