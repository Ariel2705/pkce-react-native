import { Middleware, isRejectedWithValue, isFulfilled } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import axios, { AxiosError } from 'axios';

type ErrorPayload = {
  message?: string;
  detail?: string;
  error?: string;
  title?: string;
};

export function showErrorToast(message: string) {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: message,
    position: 'bottom',
  });
}

export function showSuccessToast(message: string) {
  Toast.show({
    type: 'success',
    text2: message,
    position: 'bottom',
  });
}

export default () => (next: any) => (action: any) => {
  const { payload, error } = action;

  if (isFulfilled(action)) {
    const successMessage = payload?.message;
    if (successMessage) {
      showSuccessToast(successMessage);
    }
  }

  if (isRejectedWithValue(action)) {
    const axiosError = payload as AxiosError | undefined;

    if (axios.isAxiosError(axiosError)) {    
      const response = axiosError.response;

      if (!response) {
        showErrorToast('Servidor no disponible');
        return next(action);
      }

      switch (response.status) {
        case 401:
          // Sesión expirada → logout automático
          // dispatch(logout())
          break;

        case 403:
          showErrorToast('No tienes permisos para esta acción');
          break;

        case 404:
          showErrorToast('Recurso no encontrado');
          break;

        default: {
          const data = response.data as ErrorPayload | string;

          if (typeof data === 'string') {
            showErrorToast(data);
          } else {
            showErrorToast(
              data.detail ||
                data.message ||
                data.error ||
                data.title ||
                'Error inesperado'
            );
          }
        }
      }
    } else if (typeof payload === 'string') {
      showErrorToast(payload);
    } else if (error?.message) {
      showErrorToast(error.message);
    }
  }

  return next(action);
};
