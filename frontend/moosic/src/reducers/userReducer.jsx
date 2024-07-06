const initialState = {
    user: null,
    playlists: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'SET_PLAYLISTS':
        return { ...state, playlists: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  
  