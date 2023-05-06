import { useMemo } from "react";

export default function useLocalStorage(key, arr) {
        arr.length ? localStorage.setItem(key, JSON.stringify(arr)) : ''
    }