//clever stuffs happens

export const initialState = {
    playlists: [],
    user: null,
    playing: false,
    item: null,
    
    //remove after finished developing
    //stoken: "BQDJeFoGyYjQfLX6j4RAqgoyNA4fPLLVDTzx5w223up48FUeI6kEDFuDnp7HpyVIt9_e2jerpTAmxKiGATT6hobdziIN1o4syKzAa2OSlfi50S4vByNoq1mGJ6VCV0qVz33fVhMtuQnKsnw0tpq5C3e6UtHrR4kuxc4tmPOFuaSG4AOU",
  };


  const reducer = (state, action) => {
    console.log(action);

// action -> type, payload

 switch(action.type) {
 case 'SET_USER' :
     return {
        ...state,
        user: action.user,

     };

     case 'SET_TOKEN':

      return {
        ...state,
        token: action.token,


      }

      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,

        }


      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,


        }




     default:
         return state;

 }


  }

  export default reducer;