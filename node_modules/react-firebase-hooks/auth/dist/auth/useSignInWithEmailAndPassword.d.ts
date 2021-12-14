import { Auth, UserCredential, AuthError } from 'firebase/auth';
declare const _default: (auth: Auth) => [(email: string, password: string) => Promise<void>, UserCredential | undefined, boolean, AuthError | undefined];
export default _default;
