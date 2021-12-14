import { useReducer, useMemo, useEffect, useRef } from 'react';
import { onChildAdded, onChildChanged, onChildMoved, onChildRemoved, onValue, off } from 'firebase/database';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var isObject = function (val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
};
var snapshotToData = function (snapshot, keyField, refField, transform) {
    if (!snapshot.exists) {
        return undefined;
    }
    var val = snapshot.val();
    if (isObject(val)) {
        return __assign({}, (transform ? transform(val) : val), (keyField ? (_a = {}, _a[keyField] = snapshot.key, _a) : null), (refField ? (_b = {}, _b[refField] = snapshot.ref, _b) : null));
    }
    return transform ? transform(val) : val;
    var _a, _b;
};

var initialState = {
    loading: true,
    value: {
        keys: [],
        values: [],
    },
};
var listReducer = function (state, action) {
    switch (action.type) {
        case 'add':
            if (!action.snapshot) {
                return state;
            }
            return __assign({}, state, { error: undefined, value: addChild(state.value, action.snapshot, action.previousKey) });
        case 'change':
            if (!action.snapshot) {
                return state;
            }
            return __assign({}, state, { error: undefined, value: changeChild(state.value, action.snapshot) });
        case 'error':
            return __assign({}, state, { error: action.error, loading: false, value: {
                    keys: undefined,
                    values: undefined,
                } });
        case 'move':
            if (!action.snapshot) {
                return state;
            }
            return __assign({}, state, { error: undefined, value: moveChild(state.value, action.snapshot, action.previousKey) });
        case 'remove':
            if (!action.snapshot) {
                return state;
            }
            return __assign({}, state, { error: undefined, value: removeChild(state.value, action.snapshot) });
        case 'reset':
            return initialState;
        case 'value':
            return __assign({}, state, { error: undefined, loading: false, value: setValue(action.snapshots) });
        case 'empty':
            return __assign({}, state, { loading: false, value: {
                    keys: undefined,
                    values: undefined,
                } });
        default:
            return state;
    }
};
var setValue = function (snapshots) {
    if (!snapshots) {
        return {
            keys: [],
            values: [],
        };
    }
    var keys = [];
    var values = [];
    snapshots.forEach(function (snapshot) {
        if (!snapshot.key) {
            return;
        }
        keys.push(snapshot.key);
        values.push(snapshot);
    });
    return {
        keys: keys,
        values: values,
    };
};
var addChild = function (currentState, snapshot, previousKey) {
    if (!snapshot.key) {
        return currentState;
    }
    var keys = currentState.keys, values = currentState.values;
    if (!previousKey) {
        // The child has been added to the start of the list
        return {
            keys: keys ? [snapshot.key].concat(keys) : [snapshot.key],
            values: values ? [snapshot].concat(values) : [snapshot],
        };
    }
    // Establish the index for the previous child in the list
    var index = keys ? keys.indexOf(previousKey) : 0;
    // Insert the item after the previous child
    return {
        keys: keys
            ? keys.slice(0, index + 1).concat([snapshot.key], keys.slice(index + 1)) : [snapshot.key],
        values: values
            ? values.slice(0, index + 1).concat([snapshot], values.slice(index + 1)) : [snapshot],
    };
};
var changeChild = function (currentState, snapshot) {
    if (!snapshot.key) {
        return currentState;
    }
    var keys = currentState.keys, values = currentState.values;
    var index = keys ? keys.indexOf(snapshot.key) : 0;
    return __assign({}, currentState, { values: values
            ? values.slice(0, index).concat([snapshot], values.slice(index + 1)) : [snapshot] });
};
var removeChild = function (currentState, snapshot) {
    if (!snapshot.key) {
        return currentState;
    }
    var keys = currentState.keys, values = currentState.values;
    var index = keys ? keys.indexOf(snapshot.key) : 0;
    return {
        keys: keys ? keys.slice(0, index).concat(keys.slice(index + 1)) : [],
        values: values
            ? values.slice(0, index).concat(values.slice(index + 1)) : [],
    };
};
var moveChild = function (currentState, snapshot, previousKey) {
    // Remove the child from it's previous location
    var tempValue = removeChild(currentState, snapshot);
    // Add the child into it's new location
    return addChild(tempValue, snapshot, previousKey);
};
var useListReducer = (function () { return useReducer(listReducer, initialState); });

var defaultState = function (defaultValue) {
    return {
        loading: defaultValue === undefined || defaultValue === null,
        value: defaultValue,
    };
};
var reducer = function () { return function (state, action) {
    switch (action.type) {
        case 'error':
            return __assign({}, state, { error: action.error, loading: false, value: undefined });
        case 'reset':
            return defaultState(action.defaultValue);
        case 'value':
            return __assign({}, state, { error: undefined, loading: false, value: action.value });
        default:
            return state;
    }
}; };
var useLoadingValue = (function (getDefaultValue) {
    var defaultValue = getDefaultValue ? getDefaultValue() : undefined;
    var _a = useReducer(reducer(), defaultState(defaultValue)), state = _a[0], dispatch = _a[1];
    var reset = function () {
        var defaultValue = getDefaultValue ? getDefaultValue() : undefined;
        dispatch({ type: 'reset', defaultValue: defaultValue });
    };
    var setError = function (error) {
        dispatch({ type: 'error', error: error });
    };
    var setValue = function (value) {
        dispatch({ type: 'value', value: value });
    };
    return useMemo(function () { return ({
        error: state.error,
        loading: state.loading,
        reset: reset,
        setError: setError,
        setValue: setValue,
        value: state.value,
    }); }, [state.error, state.loading, reset, setError, setValue, state.value]);
});

var useComparatorRef = function (value, isEqual, onChange) {
    var ref = useRef(value);
    useEffect(function () {
        if (!isEqual(value, ref.current)) {
            ref.current = value;
            if (onChange) {
                onChange();
            }
        }
    });
    return ref;
};
var isEqual = function (v1, v2) {
    var bothNull = !v1 && !v2;
    var equal = !!v1 && !!v2 && v1.isEqual(v2);
    return bothNull || equal;
};
var useIsEqualRef = function (value, onChange) {
    return useComparatorRef(value, isEqual, onChange);
};

var useList = function (query) {
    var _a = useListReducer(), state = _a[0], dispatch = _a[1];
    var queryRef = useIsEqualRef(query, function () { return dispatch({ type: 'reset' }); });
    var ref = queryRef.current;
    useEffect(function () {
        if (!ref) {
            dispatch({ type: 'empty' });
            return;
        }
        var onChildAdded$$1 = function (snapshot, previousKey) {
            dispatch({ type: 'add', previousKey: previousKey, snapshot: snapshot });
        };
        var onChildChanged$$1 = function (snapshot) {
            dispatch({ type: 'change', snapshot: snapshot });
        };
        var onChildMoved$$1 = function (snapshot, previousKey) {
            dispatch({ type: 'move', previousKey: previousKey, snapshot: snapshot });
        };
        var onChildRemoved$$1 = function (snapshot) {
            dispatch({ type: 'remove', snapshot: snapshot });
        };
        var onError = function (error) {
            dispatch({ type: 'error', error: error });
        };
        var onValue$$1 = function (snapshots) {
            dispatch({ type: 'value', snapshots: snapshots });
        };
        var childAddedHandler;
        var onInitialLoad = function (snapshot) {
            var snapshotVal = snapshot.val();
            var childrenToProcess = snapshotVal
                ? Object.keys(snapshot.val()).length
                : 0;
            // If the list is empty then initialise the hook and use the default `onChildAdded` behaviour
            if (childrenToProcess === 0) {
                childAddedHandler = onChildAdded(ref, onChildAdded$$1, onError);
                onValue$$1([]);
            }
            else {
                // Otherwise, we load the first batch of children all to reduce re-renders
                var children_1 = [];
                var onChildAddedWithoutInitialLoad = function (addedChild, previousKey) {
                    if (childrenToProcess > 0) {
                        childrenToProcess--;
                        children_1.push(addedChild);
                        if (childrenToProcess === 0) {
                            onValue$$1(children_1);
                        }
                        return;
                    }
                    onChildAdded$$1(addedChild, previousKey);
                };
                childAddedHandler = onChildAdded(ref, onChildAddedWithoutInitialLoad, onError);
            }
        };
        onValue(ref, onInitialLoad, onError, { onlyOnce: true });
        var childChangedHandler = onChildChanged(ref, onChildChanged$$1, onError);
        var childMovedHandler = onChildMoved(ref, onChildMoved$$1, onError);
        var childRemovedHandler = onChildRemoved(ref, onChildRemoved$$1, onError);
        return function () {
            off(ref, 'child_added', childAddedHandler);
            off(ref, 'child_changed', childChangedHandler);
            off(ref, 'child_moved', childMovedHandler);
            off(ref, 'child_removed', childRemovedHandler);
        };
    }, [dispatch, ref]);
    var resArray = [state.value.values, state.loading, state.error];
    return useMemo(function () { return resArray; }, resArray);
};
var useListKeys = function (query) {
    var _a = useList(query), snapshots = _a[0], loading = _a[1], error = _a[2];
    var values = useMemo(function () {
        return snapshots
            ? snapshots.map(function (snapshot) { return snapshot.key; })
            : undefined;
    }, [snapshots]);
    var resArray = [values, loading, error];
    return useMemo(function () { return resArray; }, resArray);
};
var useListVals = function (query, options) {
    var keyField = options ? options.keyField : undefined;
    var refField = options ? options.refField : undefined;
    var transform = options ? options.transform : undefined;
    var _a = useList(query), snapshots = _a[0], loading = _a[1], error = _a[2];
    var values = useMemo(function () {
        return (snapshots
            ? snapshots.map(function (snapshot) {
                return snapshotToData(snapshot, keyField, refField, transform);
            })
            : undefined);
    }, [snapshots, keyField, refField, transform]);
    var resArray = [
        values,
        loading,
        error,
    ];
    return useMemo(function () { return resArray; }, resArray);
};

var useObject = function (query) {
    var _a = useLoadingValue(), error = _a.error, loading = _a.loading, reset = _a.reset, setError = _a.setError, setValue = _a.setValue, value = _a.value;
    var ref = useIsEqualRef(query, reset);
    useEffect(function () {
        var query = ref.current;
        if (!query) {
            setValue(undefined);
            return;
        }
        onValue(query, setValue, setError);
        return function () {
            off(query, 'value', setValue);
        };
    }, [ref.current]);
    var resArray = [value, loading, error];
    return useMemo(function () { return resArray; }, resArray);
};
var useObjectVal = function (query, options) {
    var keyField = options ? options.keyField : undefined;
    var refField = options ? options.refField : undefined;
    var transform = options ? options.transform : undefined;
    var _a = useObject(query), snapshot = _a[0], loading = _a[1], error = _a[2];
    var value = useMemo(function () {
        return (snapshot
            ? snapshotToData(snapshot, keyField, refField, transform)
            : undefined);
    }, [snapshot, keyField, refField, transform]);
    var resArray = [
        value,
        loading,
        error,
    ];
    return useMemo(function () { return resArray; }, resArray);
};

export { useList, useListKeys, useListVals, useObject, useObjectVal };
