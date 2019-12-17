import React from 'react';
import PostsNavigator from './navigation/PostsNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import postsReducer from './store/reducers/posts';

const rootReducer = combineReducers({
  posts: postsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return <Provider store={store}>
    <PostsNavigator />
  </Provider>;
}
