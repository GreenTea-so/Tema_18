import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../style/search.css';

const Search = (props) => {
  const store = props;

  const [searchTypeSearchInput, setSearchTypeSearchInput] = useState('');
  const [searchLanguageInput, setSearchLanguageInput] = useState('');
  const [searchTypeInput, setSearchTypeInput] = useState('');

  const [tr, setTr] = useState(false);
  const [test, setTest] = useState(false);
  const [view, setView] = useState(true);

  const zapros = async () => {
    const url = 'https://api.github.com/search/repositories';
    const zap = await axios.get(url, {
      params: {
        type: searchTypeInput,
        q: `${searchTypeSearchInput}+language:${searchLanguageInput}`,
      },
    });

    store.dispatch({ type: 'SEARCH', payload: zap.data.items });
    return zap;
  };

  const addToList = (key) => {
    const object = key;

    for (let i = 0; i < store.testStore.list.length; i += 1) {
      if (store.testStore.list[i].id === key.id) {
        store.dispatch({
          type: 'DEL_REP',
          payload: i,
        });
        setTest(!test);
        return 0;
      }
    }

    store.dispatch({
      type: 'ADD_REP',
      payload: object,
    });
    setTest(!test);
    return 0;
  };

  return (
    <div>
      <div className="search">
        <div className="search_type">
          <select className="search_type_input" value={searchTypeInput} onChange={(e) => setSearchTypeInput(e.target.value)}>
            <option>Repositories</option>
          </select>
        </div>
        <div className="search_language">
          <select className="search_language_input" placeholder="Language" value={searchLanguageInput} onChange={(e) => setSearchLanguageInput(e.target.value)}>
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

        <div className="search_typeSearch">
          <input className="search_typeSearch_input" placeholder="Type here for search" value={searchTypeSearchInput} onChange={(e) => setSearchTypeSearchInput(e.target.value)} />
        </div>
        <button
          type="button"
          className="search_button"
          onClick={async () => {
            await zapros();
            setTr(true);
            setTest(!test);
          }}
        >
          SEARCH
        </button>
      </div>

      <div className="view">
        <button type="button" aria-label="Mute volume" id="largeBtn" className={view ? 'fas fa-th-large' : 'fas fa-th-large fa_th_large'} onClick={() => setView(false)} />
        <button type="button" aria-label="Mute volume" id="barsBtn" className={view ? 'fas fa-bars fa_bars' : 'fas fa-bars'} onClick={() => setView(true)} />
      </div>

      <div className={view ? 'content' : 'content_view'}>
        {store.testStore.search.map((key) => {
          let classButton = 'content_repositori_content_checkbox_view';
          for (let i = 0; i < store.testStore.list.length; i += 1) {
            if (Number(store.testStore.list[i].id) === Number(key.id)) {
              classButton = 'content_repositori_content_checkbox_view_remove';
            }
          }

          return (
            <div className={view ? 'content_repositori' : 'content_repositori_view'}>
              <div className={view ? 'content_repositori_content' : 'content_repositori_content_view'}>
                <div className={view ? 'content_repositori_content_input' : 'content_repositori_content_input_view'}>
                  <input
                    type={view ? 'checkbox' : 'button'}
                    id={key.id}
                    className={view ? 'content_repositori_content_checkbox' : classButton}
                    onClick={() => addToList(key)}
                    value={classButton === 'content_repositori_content_checkbox_view_remove' ? 'REMOVE ITEM' : 'ADD TO LIST'}
                    checked={classButton === 'content_repositori_content_checkbox_view_remove'}
                  />
                </div>
                <div className={view ? 'content_repositori_text' : 'content_repositori_text_view'}>
                  <p className="content_repositori_text_name">{key.name}</p>
                  <p className="content_repositori_text_description">{key.description}</p>
                  <p className="content_repositori_text_language">{key.language}</p>
                </div>
              </div>
              <div className={view ? 'content_repositori_star' : 'content_repositori_star_view'}>
                <div className="content_repositori_star_icon">
                  <i className="fas fa-star" />
                  <div className="content_repositori_star_icon_text">25k</div>
                </div>
                <p className={view ? 'content_repositori_star_language' : 'content_repositori_star_language_view'}>{key.language}</p>
              </div>
            </div>
          );
        })}

        {tr && store.testStore.search.length === 0
                  && (
                  <div className="notFound">
                    <h1 className="notFound_h">NO RESULTS FOUND</h1>
                    <p className="notFound_p">select other parameters and try again</p>

                  </div>
                  )}
      </div>
    </div>

  );
};

export default connect(
  (state) => ({
    testStore: state,
  }),
)(Search);
