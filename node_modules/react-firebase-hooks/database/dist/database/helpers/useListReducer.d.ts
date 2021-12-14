import { DataSnapshot } from 'firebase/database';
declare const _default: () => [{
        error?: Error | undefined;
        loading: boolean;
        value: {
            keys?: string[] | undefined;
            values?: DataSnapshot[] | undefined;
        };
    }, (value: {
        type: "add";
        previousKey?: string | null | undefined;
        snapshot: DataSnapshot | null;
    } | {
        type: "change";
        snapshot: DataSnapshot | null;
    } | {
        type: "empty";
    } | {
        type: "error";
        error: Error;
    } | {
        type: "move";
        previousKey?: string | null | undefined;
        snapshot: DataSnapshot | null;
    } | {
        type: "remove";
        snapshot: DataSnapshot | null;
    } | {
        type: "reset";
    } | {
        type: "value";
        snapshots: DataSnapshot[] | null;
    }) => void];
export default _default;
