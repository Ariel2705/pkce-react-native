import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export const keycloakConfig = {
  uri: 'https://des-iam.puntonet..ec/',
  realm: 'celerity-mobile',
  clientId: 'web_app',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};

export const redirectUri = AuthSession.makeRedirectUri();

export async function fetchDiscovery() {
  return AuthSession.fetchDiscoveryAsync(
    `${keycloakConfig.uri}/realms/${keycloakConfig.realm}`
  );
}
