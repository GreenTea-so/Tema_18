import React from 'react'
import { useHistory } from "react-router-dom";

const Header = ()=>{
    let history = useHistory();

    function handleClickMyList(e) {
      history.push("/my-list");
      const navMenuSearch = document.getElementsByClassName('nav_menu_search')[0]
      const navMenuMylist = document.getElementsByClassName('nav_menu_mylist')[0]
      navMenuSearch.style.color = 'white'
      navMenuMylist.style.color = 'white'
      e.style.color = '#B3BCC7'
    }

    function handleClickSearch(e) {
        history.push("/search");
        const navMenuSearch = document.getElementsByClassName('nav_menu_search')[0]
        const navMenuMylist = document.getElementsByClassName('nav_menu_mylist')[0]
        navMenuSearch.style.color = 'white'
        navMenuMylist.style.color = 'white'
        e.style.color = '#B3BCC7'
      }
        return(
            <div>
               <nav className="nav">
                    <div className = "nav_logo">
                    <div className = "nav_logo_icon">
                        <i class="fab fa-github"></i>
                        <i class="fas fa-search"></i>
                    </div>
                    
                    <div className = "nav_logo_text">
                        <h3 className = "nav_logo_text_git">GitHub</h3>
                        <h6 className = "nav_logo_text_search">Search</h6>
                    </div>
                    </div>

                    <div className = "nav_menu">
                    <a onClick={(e)=>handleClickSearch(e.target)}  className = "nav_menu_search">Search</a>
                    <a onClick={(e)=>handleClickMyList(e.target)} className = "nav_menu_mylist">My list</a>
                    </div>
                </nav>

            </div>
    
        );
    }
    
    export default Header