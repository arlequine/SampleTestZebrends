const initState = {
  user: [],
  repos: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_DATA_REPOS':
      return {
        state,
        repos: [action.repos]
      };
    case 'GET_DATA_USER':
      return {
        state,
        user: [action.user]
      };
    case 'INIT_DATA':
      return {
        state,
        user: [action.user]
      };
    default:
      return {state};
  }
}
export default rootReducer;
