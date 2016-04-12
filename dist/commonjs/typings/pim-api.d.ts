/*
 The contents of this file are automatically generated

 Version: DEV
 Date:    4/11/2016 12:05:24
 */

declare module 'pim-api' {

	//import {ICountryData, ICurrencyData, ICurrencyExchangeRateData, IPieceAttributeData, IPieceGroupData, IPieceGroupTypeData, IPagedResultData, IPieceData, IPieceSelectorData} from 'pim-data';
	//import {IApiConfiguration} from "pim-api-core";

	export module Data {
		export interface ISomeData {
			id: number;
		}
	}

	export class CountriesApi {
		constructor(config?: Data.ISomeData);

		Create(data: Data.ISomeData): Promise<Data.ISomeData>;

		Delete(key: string): Promise<boolean>;

		Get(key: string): Promise<Data.ISomeData>;

		GetAll(): Promise<Data.ISomeData[]>;

		Update(data: Data.ISomeData): Promise<Data.ISomeData>;
	}
}

/* End of file */