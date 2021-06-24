import React, {Component, useState} from "react"
import { connect} from 'react-redux'
import store from '../store/store';
import View from "./view"
import { useDispatch, useSelector } from "react-redux";


const MyList = () =>{

      const store = useSelector(state=>state)
      const dispatch = useDispatch()

      const changeList = (button)=>{
        const infoDiv=  button.parentElement.parentElement.childNodes[1]
        const info = {
          id: button.id,
          name: infoDiv.childNodes[0].innerHTML,
          description: infoDiv.childNodes[1].innerHTML,
          language: infoDiv.childNodes[2].innerHTML,
        }

        

        

        
        for(let i = 0; i< store.length; i += 1){
          
          if (info.id === store[i].id){
            dispatch({ type: 'DEL_REP', payload: i})
            if(button.type === 'button'){
              button.value = 'ADD TO LIST';
              button.style.backgroundColor = '#0366D6';
              button.style.width = '129px';
            }
            return 0;
          }
        }
      
        dispatch({
          type: 'ADD_REP',
          payload: info
        })

        if (button.type === 'button') {
          button.value = 'REMOVE FROM LIST';
          button.style.backgroundColor = '#EB5757';
          button.style.width = '181px';
        }
      }

      return (
        
        <div>
               <h1 className ="myList_text">My List</h1>
                <View/>
                <div className="content">{store.map((key)=>{ 
                    return <div className = "content_repositori">
                    <div className = "content_repositori_content">
                        <div className="content_repositori_content_input"><input type= "checkbox" defaultChecked id = {key.id} className="content_repositori_content_checkbox" onClick = {(e)=>changeList(e.target)}/></div>
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



