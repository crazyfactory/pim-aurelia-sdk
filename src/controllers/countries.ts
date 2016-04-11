/*
   The contents of this file are automatically generated

   Version: DEV
   Date:    4/11/2016 10:55:00
*/

import {ApiController} from '../pim-base';
import {ICountryData} from 'pim-data';

export class CountriesController extends ApiController {
    public static Create(data: ICountryData): Promise<ICountryData> {
        return this.put(`api/countries`, data);
    }

    public static Delete(key: string): Promise<boolean> {
        return this.delete(`api/countries`, key);
    }

    public static Get(key: string): Promise<ICountryData> {
        return this.get(`api/countries/${key}`);
    }

    public static GetAll(): Promise<ICountryData[]> {
        return this.get(`api/countries`);
    }

    public static Update(data: ICountryData): Promise<ICountryData> {
        return this.patch(`api/countries`, data);
    }

}

/* End of file */
