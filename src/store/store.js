const store = {
    _state: {
        list: []
    },

    getState(){
        return this._state
    },

    addList(obj){
        this._state.list.push(obj)
    }
}

export default store

window.store = store