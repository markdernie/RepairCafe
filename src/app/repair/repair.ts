import {v4 as uuidv4} from 'uuid'
export class Repair {
    id:string=uuidv4();
    age:number=Date.now();
    description:string='';
}
