import { ValOptions } from './helpers';
import { Val } from './types';
import { DataSnapshot, Query } from 'firebase/database';
export declare const useObject: (query?: Query | null | undefined) => [DataSnapshot | undefined, boolean, Error | undefined];
export declare const useObjectVal: <T, KeyField extends string = "", RefField extends string = "">(query?: Query | null | undefined, options?: ValOptions<T> | undefined) => [Val<T, KeyField, RefField> | undefined, boolean, Error | undefined];
