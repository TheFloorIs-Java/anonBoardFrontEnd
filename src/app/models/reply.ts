import { post } from "./post";

export interface reply{
    reply_id?: number;
    post?: post;
    date?: Date;
    message?: string;
    
}