export interface IQuestion {
    id: string,
    description: string,
    mandatoryImage?: boolean,
    options: { label: string, value: number }[]
}