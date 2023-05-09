import { IProjectData } from "./iproject-data";

export interface ICreateProjectResponse {
    success: boolean;
    message: string;
    data: IProjectData;
}
