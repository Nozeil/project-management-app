import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './../redux/appSlice';
import SignUpReducer from './signUpSlice';
import SignInReducer from './signInSlice';
import ToastReducer from './toastSlice';
import LoaderReducer from './loaderSlice';
import BurgerReducer from './burgerSlice';
import ProfileReducer from './profileSlice';
import BoardsListReducer from './boardsListSlice';

const store = configureStore({
  reducer: {
    app: AppReducer,
    signIn: SignInReducer,
    signUp: SignUpReducer,
    toast: ToastReducer,
    loader: LoaderReducer,
    burger: BurgerReducer,
    profile: ProfileReducer,
    boardsList: BoardsListReducer
  }
});

export default store;
