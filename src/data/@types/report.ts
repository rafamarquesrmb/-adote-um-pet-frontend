import { Pet } from "./Pet";

export interface Report{
    id: number;
    value: string;
    email: string;
    pet : Pet;
}