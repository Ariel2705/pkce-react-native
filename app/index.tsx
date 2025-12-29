import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Login from './login/Login';
import { bootstrapAuth } from '../store/auth/auth.bootstrap';

export const App = () => {
    useEffect(() => {
        //store.dispatch(bootstrapAuth());
    }, []);

    return (
        <Provider store={store} children={<Login />} />
    );
};

export default App;
