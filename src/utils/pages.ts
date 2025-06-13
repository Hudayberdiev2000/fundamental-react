export const getTotalPagesCount = (
    totalCount: number, limit: number
) => Math.ceil(totalCount / limit);

export const getPagesArray = (totalPages: number) => {
    const pagesArray = [];
    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i+1);
    }

    return pagesArray;
}