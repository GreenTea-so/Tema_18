import React, { useState } from 'react';
import { connect } from 'react-redux';

const MyList = (props) => {
  const { testStore } = props;
  const { dispatch } = props;

  const [view, setView] = useState(true);
  const [test, setTest] = useState(false);

  const addToList = (key) => {
    const object = key;
    for (let i = 0; i < testStore.list.length; i += 1) {
      if (testStore.list[i].id === key.id) {
        dispatch({
          type: 'DEL_REP',
          payload: i,
        });
        setTest(!test);
        return 0;
      }
    }
    dispatch({
      type: 'ADD_REP',
      payload: object,
    });
    setTest(!test);
    return 0;
  };

  const checkList = (key) => {
    let classButton = 'content_repositori_content_checkbox_view';
    for (let i = 0; i < testStore.list.length; i += 1) {
      if (Number(testStore.list[i].id) === Number(key.id)) {
        classButton = 'content_repositori_content_checkbox_view_remove';
      }
    }
    return classButton;
  };

  return (
    <div>
      <h1 className="myList_text">My List</h1>
      <div className="view">
        <button type="button" aria-label="Mute volume" id="largeBtn" className={view ? 'fas fa-th-large' : 'fas fa-th-large fa_th_large'} onClick={() => setView(false)} />
        <button type="button" aria-label="Mute volume" id="barsBtn" className={view ? 'fas fa-bars fa_bars' : 'fas fa-bars'} onClick={() => setView(true)} />
      </div>

      <div className="content">
        {testStore.list.map((key) => {
          const classButton = checkList(key);
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
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    testStore: state,
  }),
)(MyList);
