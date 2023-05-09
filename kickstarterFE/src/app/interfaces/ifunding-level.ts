import { IReward } from "./ireward";

export interface IFundingLevel {
    description: string;
    minContribution:number;
    reward:IReward;
}
