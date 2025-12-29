import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Login from './login/Login';
import { bootstrapAuth } from '../store/auth/auth.bootstrap';
import Toast from 'react-native-toast-message';

export const App = () => {
    useEffect(() => {
        store.dispatch(bootstrapAuth());
    }, []);

    return (
        <Provider store={store} children={
            <>
                <Login />
                <Toast />
            </>} />
    );
};

export default App;
