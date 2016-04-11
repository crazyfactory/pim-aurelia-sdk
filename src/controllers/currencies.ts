/*
   The contents of this file are automatically generated

   Version: DEV
   Date:    4/11/2016 10:55:00
*/

import {ApiController} from '../pim-base';
import {ICurrencyData, ICurrencyExchangeRateData} from 'pim-data';

export class CurrenciesController extends ApiController {
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
