import { DocumentData, FirestoreError, Query, QuerySnapshot } from 'firebase/firestore';
import { Data, DataOptions, OnceDataOptions, OnceOptions, Options } from './types';
export declare const useCollection: <T = DocumentData>(query?: Query<T> | null | undefined, options?: Options | undefined) => [QuerySnapshot<T> | undefined, boolean, FirestoreError | undefined];
export declare const useCollectionOnce: <T = DocumentData>(query?: Query<T> | null | undefined, options?: OnceOptions | undefined) => [QuerySnapshot<T> | undefined, boolean, FirestoreError | undefined];
export declare const useCollectionData: <T = DocumentData, IDField extends string = "", RefField extends string = "">(query?: Query<T> | null | undefined, options?: DataOptions<T> | undefined) => [Data<T, IDField, RefField>[] | undefined, boolean, FirestoreError | undefined];
export declare const useCollectionDataOnce: <T = DocumentData, IDField extends string = "", RefField extends string = "">(query?: Query<T> | null | undefined, options?: OnceDataOptions<T> | undefined) => [Data<T, IDField, RefField>[] | undefined, boolean, FirestoreError | undefined];
