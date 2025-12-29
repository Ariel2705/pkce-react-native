import { createAsyncThunk } from '@reduxjs/toolkit';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import {
  fetchDiscovery,
  redirectUri,
  keycloakConfig,
} from './auth.keycloak';
import { saveTokens } from './auth.storage';

export const loginWithKeycloak = createAsyncThunk(
  'auth/loginWithKeycloak',
  async (_, { rejectWithValue }) => {
    try {
      const discovery = await fetchDiscovery();

      const authRequest = new AuthSession.AuthRequest({
        clientId: keycloakConfig.clientId,
        redirectUri,
        scopes: keycloakConfig.scopes,
        responseType: AuthSession.ResponseType.Code,
        usePKCE: true,
        prompt: AuthSession.Prompt.Login,
      });

      const authResult = await authRequest.promptAsync(discovery);

      if (authResult.type !== 'success') {
        return rejectWithValue('Login cancelado');
      }

      const tokenResult = await AuthSession.exchangeCodeAsync(
        {
          clientId: keycloakConfig.clientId,
          code: authResult.params.code,
          redirectUri,
          extraParams: {
            code_verifier: authRequest.codeVerifier!,
          },
        },
        discovery
      );

      const tokens = {
        accessToken: tokenResult.accessToken,
        refreshToken: tokenResult.refreshToken,
        idToken: tokenResult.idToken,
      };

      await saveTokens(tokens.accessToken, tokens.refreshToken);
      return tokens;
    } catch (e: any) {
      return rejectWithValue('Error autenticando con Keycloak');
    }
  }
);

export const refreshTokenThunk = createAsyncThunk(
  'auth/refresh',
  async (refreshToken: string, { rejectWithValue }) => {
    try {
      const discovery = await fetchDiscovery();

      const tokenResult = await AuthSession.refreshAsync(
        {
          clientId: keycloakConfig.clientId,
          refreshToken,
        },
        discovery
      );

      const tokens = {
        accessToken: tokenResult.accessToken,
        refreshToken: tokenResult.refreshToken,
        idToken: tokenResult.idToken,
      };

      await saveTokens(tokens.accessToken, tokens.refreshToken);
      return tokens;
    } catch {
      return rejectWithValue('Error refrescando token');
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (idToken: string) => {
    const discovery = await fetchDiscovery();
    const redirectUri = AuthSession.makeRedirectUri();

    const logoutUrl =
      `${discovery.endSessionEndpoint}` +
      `?client_id=${keycloakConfig.clientId}` +
      `&post_logout_redirect_uri=${redirectUri}` +
      `&id_token_hint=${idToken}`;

    await WebBrowser.openAuthSessionAsync(logoutUrl, redirectUri);
  }
);
