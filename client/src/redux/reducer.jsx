const initialState = {
    activeTab: 'home'
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ACTIVE_TAB':
        return {...state, activeTab: action.payload};
    default: 
        return state;
  }
};
