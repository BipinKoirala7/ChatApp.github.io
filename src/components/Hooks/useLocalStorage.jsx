import { useMemo } from "react";

export default function useLocalStorage(key, arr) {
    useMemo(() => {
        arr.length ? localStorage.setItem(key, JSON.stringify(arr)) : ''
    },[arr])
}