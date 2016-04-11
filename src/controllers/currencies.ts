/*
   The contents of this file are automatically generated

   Version: DEV
   Date:   4/8/2016 14:25:33
*/

/* The contents of this file are automatically generated. */

import {PimBase} from '../pim-base';
import {ICurrencyData, ICurrencyExchangeRateData} from '../pim-data';

export class CurrenciesController extends PimBase.ApiController {
    public static Create(data: ICurrencyData): Promise<ICurrencyData> {
        return this.put(`api/currencies`, data);
    }

    public static Delete(key: string): Promise<boolean> {
        return this.delete(`api/currencies`, key);
    }

    public static Get(key: string): Promise<ICurrencyData> {
        return this.get(`api/currencies/${key}`);
    }

    public static GetAll(): Promise<ICurrencyData[]> {
        return this.get(`api/currencies`);
    }

    public static GetRate(key: string, date: string): Promise<ICurrencyExchangeRateData> {
        return this.get(`api/currencies/${key}/rates/${date}`);
    }

    public static Update(data: ICurrencyData): Promise<ICurrencyData> {
        return this.patch(`api/currencies`, data);
    }

}


/* End of file */

/* End of file */
