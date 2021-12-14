import { CollectionReference, DocumentData, DocumentReference, DocumentSnapshot, Query, SnapshotOptions } from 'firebase/firestore';
import { RefHook } from '../../util';
export declare const snapshotToData: <T = DocumentData>(snapshot: DocumentSnapshot<T>, snapshotOptions?: SnapshotOptions | undefined, idField?: string | undefined, refField?: string | undefined, transform?: ((val: any) => T) | undefined) => DocumentData | undefined;
export declare const useIsFirestoreRefEqual: <T extends DocumentReference<any> | CollectionReference<any>>(value: T | null | undefined, onChange?: (() => void) | undefined) => RefHook<T | null | undefined>;
export declare const useIsFirestoreQueryEqual: <T extends Query<any>>(value: T | null | undefined, onChange?: (() => void) | undefined) => RefHook<T | null | undefined>;
