import { createContext, useContext, useReducer } from 'react';

export const StoreContext = createContext({});

export const StoreProvider = StoreContext.Provider;

function reducer(state, action) {
  switch (action.type) {
    case 'set':
      return { ...state, [action.key]: action.payload };
    default:
      throw new Error();
  }
}

export function useStore() {
  const contextValues = useContext(StoreContext);
  const [state, dispatch] = useReducer(reducer, contextValues);

  return { state, dispatch };
}

export function useSelector(selector) {
  const contextValues = useContext(StoreContext);

  return contextValues.state[selector];
}

export function useDispatch() {
  const contextValues = useContext(StoreContext);

  return contextValues.dispatch;
}
