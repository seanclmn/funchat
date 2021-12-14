import { ActionCodeSettings, AuthError, UserCredential } from 'firebase/auth';
export declare type AuthActionHook<T, E> = [(email: string, password: string) => Promise<void>, T | undefined, boolean, E | undefined];
export declare type CreateUserOptions = {
    emailVerificationOptions?: ActionCodeSettings;
    sendEmailVerification?: boolean;
};
export declare type EmailAndPasswordActionHook = AuthActionHook<UserCredential, AuthError>;
