export interface IUser {
    id?:number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isCreator: boolean;
    
    //must contain an array of projects ids 
    likedProjects?:number[]
}
