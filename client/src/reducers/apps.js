const apps = (state = [], action) => {
  switch (action.type) {
    case 'APPS':
      return action.apps;
    case 'ADD_APP':
      //{ type: 'ADD_APP', app: { id: 1, name: '...'} }
      return [action.app, ...state];
    case 'UPDATE_APP':
      //{ type: 'UPDATE_APP', app: { id: 7, name: '...' } }
      return state.map( a => {
        if (a.id === action.app.id)
          return action.app
        return a
      });
    case 'DELETE_APP':
      //{ type: 'DELETE_APP', id: 7 }
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default apps;
