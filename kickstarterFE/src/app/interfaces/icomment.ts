import { IAuthor } from "./iauthor";
import { IUser } from "./iuser";

export interface IComment {

    body: string;
    author: IAuthor;
    date: Date;
}
