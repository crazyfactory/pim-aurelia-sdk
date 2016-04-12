import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';
import {IApiConfiguration} from 'pim-core';

export class BaseApi {

	public static getDefaultConfig(): IApiConfiguration {
		return {
			baseUrl: 'http://localhost:5000/',
			token: null
		};
	};

	constructor(config?: IApiConfiguration) {
		// Reset to empty if falsy
		config = config || {};

		// Get Default Config initially
		this._config = BaseApi.getDefaultConfig();

		// Merge in new Values
		this._config.baseUrl = config.baseUrl || this._config.baseUrl;
		this._config.token = config.token || this._config.token;
	}

	private _http: HttpClient;

	private _config: IApiConfiguration = {};

	private get http():HttpClient {
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

	protected _fetch(method:string, url:string, data:any = undefined):Promise<any> {
		return this.http
			.fetch(url, {
				method: method,
				body: json(data)
			})
			.then(response => response.json());
	}

	protected _get(url:string):Promise<any> {
		return this._fetch("get", url);
	}

	protected _post(url:string, data:any):Promise<any> {
		return this._fetch("post", url, data);
	}

	protected _patch(url:string, data:any):Promise<any> {
		return this._fetch("patch", url, data);
	}

	protected _delete(url:string, data:any):Promise<any> {
		return this._fetch("delete", url, data);
	}

	protected _put(url:string, data:any):Promise<any> {
		return this._fetch("put", url, data);
	}

	protected _head(url:string, data:any):Promise<any> {
		return this._fetch("head", url, data);
	}
}