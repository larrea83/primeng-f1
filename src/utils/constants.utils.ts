import { SelectItem } from 'primeng/primeng';

export class Constants {
        public static DRIVER_TAG: string = "/drivers";

    public static BASE_ENDPOINT: string = "http://ergast.com/api/f1";
    public static DRIVERS_ENDPOINT: string = Constants.BASE_ENDPOINT + Constants.DRIVER_TAG;


    public static JSON_EXTENSION: string = ".json";
    public static DEFAULT_LANGUAGE: string = "es";


    public static YEARS: SelectItem[] = [
        { label: '--', value: null },
        { label: '2017', value: '2017' },
        { label: '2016', value: '2016' },
        { label: '2015', value: '2015' },
        { label: '2014', value: '2014' },
        { label: '2013', value: '2013' },
        { label: '2012', value: '2012' },
        { label: '2011', value: '2011' },
        { label: '2010', value: '2010' },
        { label: '2009', value: '2009' },
        { label: '2008', value: '2008' },
        { label: '2007', value: '2007' }
    ];
}