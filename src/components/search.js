import React from 'react'
import {useState} from "react"
import axios from "axios"
import View from "./view"
import { connect} from 'react-redux'
import { useDispatch, useSelector } from "react-redux";



const Search = ()=>{
  
    const store = useSelector(state=>state)
    const dispatch = useDispatch()
    
    const url = 'https://api.github.com/search/repositories'
    const zapros = async()=>{
        
        const searchTypeInput = document.getElementsByClassName('search_type_input')[0]
        const searchLanguageInput = document.getElementsByClassName('search_language_input')[0]
        const searchTypeSearchInput = document.getElementsByClassName('search_typeSearch_input')[0]

        const zap = await axios.get(url, {
        
          params: {
            
            type: searchTypeInput.value,
            q: searchTypeSearchInput.value + '+language:' + searchLanguageInput.value,
          }
        });
        return zap;
      }

      
    
      const addToList = (button)=>{
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


    const [result, setResult] = useState({});
    const [tr, setTr] = useState(false);

        return(
            <div>
               <div className = "search">
                    <div className = "search_type">
                    <select className = "search_type_input">
                        <option>Repositories</option>
                    </select>
                    </div>
                    <div className = "search_language">
                    <select className = "search_language_input" placeholder = "Language">
                        <option>Language</option>
                        <option>JavaScript</option>
                        <option>css</option>
                        <option>html</option>
                        <option>php</option>
                        <option>ruby</option>
                        <option>c++</option>
                        <option>python</option>
                        <option>c#</option>
                        <option>java</option>
                        <option>go</option>
                        <option>haskel</option>
                    </select>
                    </div>
                    
                    <div className = "search_typeSearch"><input className = "search_typeSearch_input" placeholder="Type here for search"/></div>
                    <button className = "search_button" onClick = {async ()=>{
                    await setResult(await zapros())
              
                    setTr(true)}
                    }>SEARCH</button>
                </div>
                
                <View/>

                
                {tr && 
                <div className="content">{result.data.items.map((key)=>{ 
                    
                    return <div className = "content_repositori">
                    <div className = "content_repositori_content">
                        <div className="content_repositori_content_input"><input type= "checkbox" id = {key.id} className="content_repositori_content_checkbox" onClick = {(е)=> addToList(е.target)}/></div>
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

                {result.data.items.length === 0 &&
                  <div className = "notFound">
                    <h1 className = "notFound_h">NO RESULTS FOUND</h1>
                    <p className = "notFound_p">select other parameters and try again</p>

                  </div>
                }
                </div>
                }

                

            </div>
    
        );
    }
    
    export default connect(
      state => ({
        testStore: state
      }),
      dispatch => ({})
    )(Search);