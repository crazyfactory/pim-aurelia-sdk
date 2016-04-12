import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';
import {IApiConfiguration} from 'pim-core';

export class BaseApi {

	protected static _defaultConfig: IApiConfiguration = {
		baseUrl: 'http://localhost:5000/api/'
	};

	constructor(config: IApiConfiguration = null) {
		// Reset to empty if falsy
		config = config || {};

		// Merge with default setings
		//this._config = $.extend(BaseApi._defaultConfig, config);
	}

	private _http: HttpClient;

	private _config: IApiConfiguration;

	protected get http():HttpClient {
		if (!this._http) {
			this._http = new HttpClient();
			this._http.configure(config =>
				config
					.useStandardConfiguration()
					.withBaseUrl(this._config.baseUrl)
			);
		}
		return this._http;
	}

	protected fetch(method:string, url:string, data:any = undefined):Promise<any> {
		return this.http
			.fetch(url, {
				method: method,
				body: json(data)
			})
			.then(response => response.json());
	}

	protected get(url:string):Promise<any> {
		return this.fetch("get", url);
	}

	protected post(url:string, data:any):Promise<any> {
		return this.fetch("post", url, data);
	}

	protected patch(url:string, data:any):Promise<any> {
		return this.fetch("patch", url, data);
	}

	protected delete(url:string, data:any):Promise<any> {
		return this.fetch("delete", url, data);
	}

	protected put(url:string, data:any):Promise<any> {
		return this.fetch("put", url, data);
	}

	protected head(url:string, data:any):Promise<any> {
		return this.fetch("head", url, data);
	}
}