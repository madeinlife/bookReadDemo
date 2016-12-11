import React from 'react';
// import {Link} from 'react-router';
// var weixinImg = require('../images/image.png');
class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <div className='wrap clearfix positionR'>
                    <div className='logo fl'>
                        <img src='/images/logo.png' alt=''/>
                    </div>
                   <ul className='nav_ul fr'>
                       <li className='tc'>
                           <a >
                              App下载
                           </a>
                           <div className='tc'>
                               <div className='tc-wrap'>
                                   <i className='icon'></i>
                                   <div className='left fl'>
                                       <img src='/images/image.png' alt="app下载"/>
                                   </div>
                                   <div className='right fr'>
                                       <h4>扫码下载App</h4>
                                       <div className='ios'>
                                            <a >
                                            </a>
                                       </div>
                                       <div className='android'>
                                            <a >
                                            </a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </li>
                       <li className='tc'>
                           <a >
                              微信公众号
                           </a>
                           <div className='tc'>
                               <div className='tc-wrap'>
                                   <i className='icon'></i>
                                   <div className='left fl'>
                                       <img src='/images/image.png' alt='微信公众号' />
                                   </div>
                                   <div className='right fr'>
                                       <h4>微信公众号</h4>
                                       <p>
                                            扫一扫关注book
                                            <br />
                                            品味book经典
                                       </p>
                                   </div>
                               </div>
                            </div>
                       </li>
                       <li className='active'>
                           <a href='/book'>
                              国学经典
                           </a>
                       </li>
                       <li>
                           <a >
                              其它
                           </a>
                       </li>
                   </ul>
               </div>
            </div>
        );
    }
}

export default Header;
