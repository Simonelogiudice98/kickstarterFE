
export interface IProjectData {
    id?:number;
    title: string;
    description: string;
    goal:number;
    endDate:Date;
    imageUrl:string;
    category: { name:string},
}
