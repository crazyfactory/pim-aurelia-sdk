/*
 The contents of this file are automatically generated

 Version: DEV
 Date:    4/11/2016 12:05:24
 */

import {ICountryData, ICurrencyData, ICurrencyExchangeRateData, IPieceAttributeData, IPieceGroupData, IPieceGroupTypeData, IPagedResultData, IPieceData, IPieceSelectorData} from 'pim-data';
import {IApiConfiguration} from "pim-api-core";

declare module "pim-api" {
	export class CountriesApi {
		constructor(config?: IApiConfiguration);

		Create(data: ICountryData): Promise<ICountryData>;

		Delete(key: string): Promise<boolean>;

		Get(key: string): Promise<ICountryData>;

		GetAll(): Promise<ICountryData[]>;

		Update(data: ICountryData): Promise<ICountryData>;
	}

	export class CurrenciesApi {
		constructor(config?: IApiConfiguration);

		Create(data: ICurrencyData): Promise<ICurrencyData>;

		Delete(key: string): Promise<boolean>;

		Get(key: string): Promise<ICurrencyData>;

		GetAll(): Promise<ICurrencyData[]>;

		GetRate(key: string, date: string): Promise<ICurrencyExchangeRateData>;

		Update(data: ICurrencyData): Promise<ICurrencyData>;
	}
}


/* End of file */