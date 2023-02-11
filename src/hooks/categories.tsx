import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCategories} from "../redux/actions";
import { IRootState } from "../redux/store";
import { useLoaderWrap } from "./loader";


export function useCategories() {
    const categories = useSelector((state: IRootState) => {
        return state.categories.categories
    })
    const getCategoriesWithLoader = useLoaderWrap<typeof getCategories>(getCategories)

    useEffect(() => {
        getCategoriesWithLoader()
    }, [])

    return { categories }
}