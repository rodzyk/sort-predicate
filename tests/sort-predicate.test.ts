import { createSortPredicate } from '../src';

interface IModel {
    name: string;
}

describe('createSortPredicate', () => {
    const byName = createSortPredicate<IModel>("name");
    const byNameDesc = createSortPredicate<IModel>("name", "desc");

    const arr: IModel[] = [{ name: "002" }, { name: "001" }, { name: "003" }];
    const arrWithNull: IModel[] = [{ name: "002" }, { name: "001" }, { name: null as any }, { name: "003" }];

    test('should sort in ascending order by default', () => {
        const sortedArr = [...arr].sort(byName);
        expect(sortedArr).toEqual([{ name: "001" }, { name: "002" }, { name: "003" }]);
    });

    test('should sort in descending order when "desc" is specified', () => {
        const sortedArr = [...arr].sort(byNameDesc);
        expect(sortedArr).toEqual([{ name: "003" }, { name: "002" }, { name: "001" }]);
    });

    test('should handle null or undefined values correctly', () => {
        const sortedArr = [...arrWithNull].sort(byName);
        expect(sortedArr).toEqual([{ name: null }, { name: "001" }, { name: "002" }, { name: "003" }]);
    });

    test('should return 0 if values are equal', () => {
        const equalValuesArr: IModel[] = [{ name: "001" }, { name: "001" }];
        const result = byName(equalValuesArr[0], equalValuesArr[1]);
        expect(result).toBe(0);
    });
});