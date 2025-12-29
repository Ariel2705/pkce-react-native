import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import errorMiddleware from './middleware/error-middleware';
import notificationMiddleware from './middleware/notification-middleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(errorMiddleware, notificationMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
