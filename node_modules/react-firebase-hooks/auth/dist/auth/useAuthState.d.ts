import { Auth, User } from 'firebase/auth';
import { LoadingHook } from '../util';
export declare type AuthStateHook = LoadingHook<User | null, Error>;
declare const _default: (auth: Auth) => [User | null | undefined, boolean, Error | undefined];
export default _default;
