export type Education={
    id:number,
    institute: string,
    duration: string,
    cpi?:number,
}
export const education:Education[] =[
    {
        id: 1,
        institute: "Dharmsinh Desai University",
        duration: '2021-2025',
        cpi: 9.01,
    },
    {
        id: 2,
        institute: "St. Mary's School",
        duration: '2006-2021',
    }
]