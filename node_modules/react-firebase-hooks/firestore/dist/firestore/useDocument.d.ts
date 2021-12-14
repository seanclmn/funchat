import { DocumentData, DocumentReference, DocumentSnapshot, FirestoreError } from 'firebase/firestore';
import { Data, DataOptions, OnceDataOptions, OnceOptions, Options } from './types';
export declare const useDocument: <T = DocumentData>(docRef?: DocumentReference<T> | null | undefined, options?: Options | undefined) => [DocumentSnapshot<T> | undefined, boolean, FirestoreError | undefined];
export declare const useDocumentOnce: <T = DocumentData>(docRef?: DocumentReference<T> | null | undefined, options?: OnceOptions | undefined) => [DocumentSnapshot<T> | undefined, boolean, FirestoreError | undefined];
export declare const useDocumentData: <T = DocumentData, IDField extends string = "", RefField extends string = "">(docRef?: DocumentReference<T> | null | undefined, options?: DataOptions<T> | undefined) => [Data<T, IDField, RefField> | undefined, boolean, FirestoreError | undefined];
export declare const useDocumentDataOnce: <T = DocumentData, IDField extends string = "", RefField extends string = "">(docRef?: DocumentReference<T> | null | undefined, options?: OnceDataOptions<T> | undefined) => [Data<T, IDField, RefField> | undefined, boolean, FirestoreError | undefined];
