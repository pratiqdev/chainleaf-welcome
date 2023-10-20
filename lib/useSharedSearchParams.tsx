// import { useEffect, useCallback, useMemo, useState } from "react";
// import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from "next/navigation"

// const useSharedSearchParams = (): [ReadonlyURLSearchParams, (key: string, value?: string) => void] => {
//     const router = useRouter()
//     const pathname = usePathname()
//     const searchParams = useSearchParams()
//     const initial = useMemo(() => (new URLSearchParams(searchParams.toString())), [])
//     const [params, setParams] = useState(`${pathname}-search-params`, initial)
//     const updateSearchParam = useCallback(
//         (key: string, value?: string) => {
//             setParams((prev) => {
//                 const previousParams = prev?.size ? prev.toString() : undefined
//                 const newParams = new URLSearchParams(previousParams)
//                 if (!value) {
//                     newParams.delete(key)
//                 } else {
//                     newParams.set(key, value)
//                 }
//                 return newParams
//             })
//         },
//         [params]
//     )
//     useEffect(() => {          // ensure that when component unmounts, shared state gets reset back to initial
//         return () => {
//             setParams(initial);
//         };
//     }, [initial]);
//     useEffect(() => {
//         router.push(pathname + '?' + params?.toString());
//     }, [params])
//     return [searchParams, updateSearchParam]
// }
// export default useSharedSearchParams