/*
 The contents of this file are automatically generated

 Version: DEV
 Date:    4/11/2016 12:05:24
 */

declare module 'pim-api' {

	import {ICountryData, ICurrencyData, ICurrencyExchangeRateData, IPieceAttributeData, IPieceGroupData, IPieceGroupTypeData, IPagedResultData, IPieceData, IPieceSelectorData} from 'pim-data';
	import {IApiConfiguration} from 'pim-core';


	export class CountriesApi {
		constructor(config?: ICountryData);

		Create(data: ICountryData): Promise<ICountryData>;

		Delete(key: string): Promise<boolean>;

		Get(key: string): Promise<ICountryData>;

		GetAll(): Promise<ICountryData[]>;

		Update(data: ICountryData): Promise<ICountryData>;
	}
}

/* End of file */