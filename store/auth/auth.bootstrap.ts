import { AppDispatch } from '../store';
import { loadTokens } from './auth.storage';
import { restoreSession } from './auth.slice';

export const bootstrapAuth = () => async (dispatch: AppDispatch) => {
  try {
    const tokens = await loadTokens();

    if (tokens?.accessToken && tokens?.refreshToken) {
      dispatch(
        restoreSession({
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        })
      );
    }
  } catch (e) {
    // Si algo falla, arrancamos sin sesión
    console.warn('Error restaurando sesión', e);
  }
};
