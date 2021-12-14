import { DocumentData, DocumentReference, DocumentSnapshot, FirestoreError, QuerySnapshot, SnapshotListenOptions, SnapshotOptions } from 'firebase/firestore';
import { LoadingHook } from '../util';
export declare type IDOptions<T> = {
    idField?: string;
    refField?: string;
    snapshotOptions?: SnapshotOptions;
    transform?: (val: any) => T;
};
export declare type Options = {
    snapshotListenOptions?: SnapshotListenOptions;
};
export declare type DataOptions<T> = Options & IDOptions<T>;
export declare type OnceOptions = {
    getOptions?: GetOptions;
};
export declare type GetOptions = {
    source?: 'default' | 'server' | 'cache';
};
export declare type OnceDataOptions<T> = OnceOptions & IDOptions<T>;
export declare type Data<T = DocumentData, IDField extends string = '', RefField extends string = ''> = T & Record<IDField, string> & Record<RefField, DocumentReference<T>>;
export declare type CollectionHook<T = DocumentData> = LoadingHook<QuerySnapshot<T>, FirestoreError>;
export declare type CollectionDataHook<T = DocumentData, IDField extends string = '', RefField extends string = ''> = LoadingHook<Data<T, IDField, RefField>[], FirestoreError>;
export declare type DocumentHook<T = DocumentData> = LoadingHook<DocumentSnapshot<T>, FirestoreError>;
export declare type DocumentDataHook<T = DocumentData, IDField extends string = '', RefField extends string = ''> = LoadingHook<Data<T, IDField, RefField>, FirestoreError>;
