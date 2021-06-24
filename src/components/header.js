import React from 'react'

const Header = ()=>{

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
                    <a href = "/search" className = "nav_menu_search">Search</a>
                    <a href = "/my-list" className = "nav_menu_mylist">My list</a>
                    </div>
                </nav>

            </div>
    
        );
    }
    
    export default Header