import { useDispatch } from "react-redux"
import { setLoader } from "../redux/actions"
import { IAppDispatch } from "../redux/store"

export const useLoaderWrap = <Func extends (...args: any[]) => any>
    (func: Func,): ((...args: Parameters<Func>) => void) => {

    const dispatch = useDispatch<IAppDispatch>()
    
    const loaderWrap = async (...args: Parameters<Func>) => {
        
        dispatch(setLoader(true))
        await dispatch(func(...args))
        dispatch(setLoader(false))
    }

    const wrappedFn = (...args: Parameters<Func>): void => {
        loaderWrap(...args)
    };

    return wrappedFn;
}


