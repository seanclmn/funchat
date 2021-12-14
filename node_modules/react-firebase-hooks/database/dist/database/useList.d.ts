import { ValOptions } from './helpers';
import { Val } from './types';
import { DataSnapshot, Query } from 'firebase/database';
export declare const useList: (query?: Query | null | undefined) => [DataSnapshot[] | undefined, boolean, Error | undefined];
export declare const useListKeys: (query?: Query | null | undefined) => [string[] | undefined, boolean, Error | undefined];
export declare const useListVals: <T, KeyField extends string = "", RefField extends string = "">(query?: Query | null | undefined, options?: ValOptions<T> | undefined) => [Val<T, KeyField, RefField>[] | undefined, boolean, Error | undefined];
