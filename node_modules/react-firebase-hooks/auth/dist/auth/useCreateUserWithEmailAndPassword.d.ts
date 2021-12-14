import { Auth, UserCredential, AuthError } from 'firebase/auth';
import { CreateUserOptions } from './types';
declare const _default: (auth: Auth, options?: CreateUserOptions | undefined) => [(email: string, password: string) => Promise<void>, UserCredential | undefined, boolean, AuthError | undefined];
export default _default;
