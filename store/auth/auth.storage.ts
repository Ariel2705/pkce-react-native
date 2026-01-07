import * as SecureStore from 'expo-secure-store';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';

export async function saveTokens(
  accessToken?: string,
  refreshToken?: string
) {  
  if (accessToken) {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, accessToken);
  }
  if (refreshToken) {
    await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refreshToken);
  }
}

export async function loadTokens() {
  const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
  const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);  

  if (!accessToken || !refreshToken) return null;

  return { accessToken, refreshToken };
}

export async function clearTokens() {
  await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
  await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
}
