import React from 'react'

const View = ()=>{

    const changeView = (id)=>{
        const largeBtn = document.getElementById('largeBtn')
        const barsBtn = document.getElementById('barsBtn')
        const button = document.getElementById(id);
        largeBtn.style.color = 'black';
        barsBtn.style.color = 'black';
        button.style.color = '#E0E0E0';
    
        const content = document.getElementsByClassName('content')[0];
        const contentRepositori = document.getElementsByClassName('content_repositori');
        const contentRepositoriStar = document.getElementsByClassName('content_repositori_star')
        const contentRepositoriStarLanguage = document.getElementsByClassName('content_repositori_star_language')
        const contentRepositoriContent = document.getElementsByClassName('content_repositori_content')
        const contentRepositoriText = document.getElementsByClassName('content_repositori_text')
        const contentRepositoriContentCheckbox = document.getElementsByClassName('content_repositori_content_checkbox')
        const contentRepositoriContentInput = document.getElementsByClassName('content_repositori_content_input');
        console.log(contentRepositori)
        if (id === 'barsBtn') {
          content.style.width = '950px';
          for(let i=0; i<contentRepositori.length; i+=1) {
            contentRepositori[i].style.width = '100%';
            contentRepositori[i].style.height = 'auto';
            contentRepositori[i].style.flexDirection = 'row';
            contentRepositori[i].style.border = 'none';
            contentRepositori[i].style.borderBottom = '1px solid #E1E4E8';
            contentRepositori[i].style.boxSizing = 'none';
            contentRepositori[i].style.boxShadow = 'none';
            contentRepositoriStar[i].style.order = '1'
            contentRepositoriStar[i].style.flexDirection = 'column'
            contentRepositoriStar[i].style.height = '140px';
            contentRepositoriStar[i].style.marginTop = '0px';
            contentRepositoriStar[i].style.marginInline = '0px';
            contentRepositoriStarLanguage[i].style.order = '1'
            contentRepositoriContent[i].style.flexDirection = 'row';
            contentRepositoriContent[i].style.marginTop = '0px';
            contentRepositoriContent[i].style.marginBottom = '0px';
            contentRepositoriText[i].style.order = '1';
            contentRepositoriContentCheckbox[i].type = 'checkbox';
            contentRepositoriContentCheckbox[i].value = '';
            contentRepositoriContentCheckbox[i].style.fontFamily = 'Roboto';
            contentRepositoriContentCheckbox[i].style.fontSize = '14.5px';
            contentRepositoriContentCheckbox[i].style.lineHeight = '17px';
            contentRepositoriContentCheckbox[i].style.backgroundColor = '#0366D6';
            contentRepositoriContentCheckbox[i].style.boxShadow = 'none';
            contentRepositoriContentCheckbox[i].style.border = 'none';
            contentRepositoriContentCheckbox[i].style.width = 'auto';
            contentRepositoriContentCheckbox[i].style.height = 'auto';
            contentRepositoriContentCheckbox[i].style.color = 'white';
            contentRepositoriContentInput[i].style.display = 'flex';
            contentRepositoriContentInput[i].style.alignItems = 'flex-start';
            contentRepositoriContentInput[i].style.margin = '0 auto';
            contentRepositoriContentInput[i].style.marginTop = '0px';
            
          }
        }
        else {
          content.style.width = '900px';
          for(let i=0; i<contentRepositori.length; i+=1) {
            contentRepositori[i].style.width = '410px';
            contentRepositori[i].style.height = '310px';
            contentRepositori[i].style.flexDirection = 'column';
            contentRepositori[i].style.border = '1px solid #E0E0E0';
            contentRepositori[i].style.boxSizing = 'border-box';
            contentRepositori[i].style.boxShadow = '0px 2px 3px rgba(0, 0, 0, 0.25)';
            contentRepositoriStar[i].style.order = '-3'
            contentRepositoriStar[i].style.flexDirection = 'row'
            contentRepositoriStar[i].style.height = 'auto';
            contentRepositoriStar[i].style.marginTop = '25px';
            contentRepositoriStar[i].style.marginInline = '30px';
            contentRepositoriStarLanguage[i].style.order = '-3'
            contentRepositoriContent[i].style.flexDirection = 'column';
            contentRepositoriContent[i].style.marginTop = '50px';
            contentRepositoriContent[i].style.marginBottom = '50px';
            contentRepositoriText[i].style.order = '-3';
            contentRepositoriContentCheckbox[i].type = 'button';
            contentRepositoriContentCheckbox[i].value = 'ADD TO LIST';
            contentRepositoriContentCheckbox[i].style.fontFamily = 'Roboto';
            contentRepositoriContentCheckbox[i].style.fontSize = '14.5px';
            contentRepositoriContentCheckbox[i].style.lineHeight = '17px';
            contentRepositoriContentCheckbox[i].style.backgroundColor = '#0366D6';
            contentRepositoriContentCheckbox[i].style.boxShadow = '0px 2px 3px rgba(0, 0, 0, 0.25)';
            contentRepositoriContentCheckbox[i].style.border = 'none';
            contentRepositoriContentCheckbox[i].style.width = '129px';
            contentRepositoriContentCheckbox[i].style.height = '36px';
            contentRepositoriContentCheckbox[i].style.color = 'white';
            contentRepositoriContentInput[i].style.display = 'flex';
            contentRepositoriContentInput[i].style.alignItems = 'center';
            contentRepositoriContentInput[i].style.margin = '0 auto';
            contentRepositoriContentInput[i].style.marginTop = '50px';
            
          }
          
        }
      }

        return(
            <div>
               <div className = "view">
                    <button id = "largeBtn" className = "fas fa-th-large" onClick = {()=> changeView("largeBtn")} ></button>
                    <button id = "barsBtn" className="fas fa-bars" onClick = {()=> changeView("barsBtn")}></button>
                </div>

            </div>
    
        );
    }
    
export default View