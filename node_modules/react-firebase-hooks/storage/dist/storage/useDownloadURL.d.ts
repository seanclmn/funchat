import { StorageError, StorageReference } from 'firebase/storage';
import { LoadingHook } from '../util';
export declare type DownloadURLHook = LoadingHook<string, StorageError>;
declare const _default: (storageRef?: StorageReference | null | undefined) => [string | undefined, boolean, StorageError | undefined];
export default _default;
