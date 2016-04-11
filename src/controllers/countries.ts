/*
   The contents of this file are automatically generated

   Version: DEV
   Date:   4/8/2016 14:25:33
*/

/* The contents of this file are automatically generated. */

import {PimBase} from '../pim-base';
import {ICountryData} from '../pim-data';

export class CountriesController extends PimBase.ApiController {
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

/* End of file */
