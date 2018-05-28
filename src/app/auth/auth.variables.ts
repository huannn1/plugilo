interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
    clientID: 'KSLynYe9Aka1jNPtvX1StCkVKWBgVBSv',
    domain: 'plugilo.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
}