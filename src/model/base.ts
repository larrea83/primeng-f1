import { Constants } from '../utils/constants.utils';

export abstract class Base{
    id:number;
    url:string;
    name:string;
    
    public abstract getEntityName():string;
    public abstract toEntity(r:any): Base;

    /**
     * Extracts the ID of the Base object (or any class which implements it)
     * @param data Base object to extract the ID
     */
    public extractId(data: Base) {
        let extractedId = data.url.replace(Constants.BASE_ENDPOINT + '/' + data.getEntityName() + '/', '').replace('/', '');
        return parseInt(extractedId);
    }
}