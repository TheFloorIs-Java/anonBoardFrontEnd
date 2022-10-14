import { genera } from './genera';
export interface post{
    post_id?: number;
    message?: string;
    title?: string;
    date?: Date;
    genera?: genera;
}