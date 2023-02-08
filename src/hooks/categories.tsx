import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions";
import { IAppDispatch, IRootState } from "../redux/store";

export function useCategories() {
    const dispatch = useDispatch<IAppDispatch>()
    const categories = useSelector((state: IRootState) => {
        return state.categories.categories
    })

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return { categories }
}