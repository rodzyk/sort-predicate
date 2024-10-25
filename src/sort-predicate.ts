export const createSortPredicate = <T>(field: keyof T, order: 'asc' | 'desc' = 'asc') => {
    return (a: T, b: T) => {
        const valueA = a[field];
        const valueB = b[field];

        if (valueA < valueB) {
            return order === 'asc' ? -1 : 1;
        }
        if (valueA > valueB) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    };
}