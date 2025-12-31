import React, { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider, useDispatch } from 'react-redux';
import { AppDispatch, store } from '../store/store';
import { bootstrapAuth } from '../store/auth/auth.bootstrap';
import Toast from 'react-native-toast-message';
import ThemeProvider, { useThemeContext } from './context/ThemeContext';
import AppNavigator from './navigation/AppNavigator';

function AppContent() {
  const { theme } = useThemeContext();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(bootstrapAuth());
  }, [dispatch]);

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
      <Toast />
    </PaperProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
}
