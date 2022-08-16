export interface ISearchProps {
    onFocus?: () => void,
    onBlur?: () => void,
    onChange:  (...event: any[]) => void,
    selectValue?: string,
    clearSearchValue: () => void,
    value: any
}