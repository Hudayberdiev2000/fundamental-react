import type {FC} from "react";
import {getPagesArray} from "../../../utils/pages.ts";

interface PaginationProps {
    totalPages: number
    page: number;
    onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = (props) => {
    const {totalPages, page, onPageChange} = props
    const pagesArray = getPagesArray(totalPages)

    return (
        <div className="page__wrapper">
            {pagesArray.map(p => {
                return (
                    <span
                        key={p}
                        className={page === p ? "page__current" : "page"}
                        onClick={ () => onPageChange(p)}
                    >{p}</span>
                )
            })}
        </div>
    );
};

