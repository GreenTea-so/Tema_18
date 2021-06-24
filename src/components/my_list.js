import React, {Component, useState} from "react"
import { connect} from 'react-redux'
import store from '../store/store';
import View from "./view"
import { useDispatch, useSelector } from "react-redux";


const MyList = () =>{

      const store = useSelector(state=>state)
      const dispatch = useDispatch()

      console.log(store)

      return (
        
        <div>
               <h1>My List</h1>
                <View/>
                <div className="content">{store.map((key)=>{ 
                    console.log(key)
                    return <div className = "content_repositori">
                    <div className = "content_repositori_content">
                        <div className="content_repositori_content_input"><input type= "checkbox" id = {key.id} className="content_repositori_content_checkbox" /></div>
                        <div className = "content_repositori_text">
                        <p className = "content_repositori_text_name">{key.name}</p>
                        <p className = "content_repositori_text_description">{key.description}</p>
                        <p className = "content_repositori_text_language">{key.language}</p>
                        </div>
                    </div>
                    <div className = "content_repositori_star">
                        <div className = "content_repositori_star_icon">
                        <i class="fas fa-star"></i>
                        <div className = "content_repositori_star_icon_text">25k</div>
                        </div>
                        <p className = "content_repositori_star_language">{key.language}</p>
                    </div>
                    </div>
                })}
                </div>
            </div>
      );
    }
  
  export default connect(
    state => ({
      testStore: state
    }),
    dispatch => ({})
  )(MyList);



