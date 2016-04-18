import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';
import {IApiConfiguration, ApiPromise} from 'pim-core';

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

	protected _fetch(method:string, url:string, data:any = undefined):ApiPromise<any> {
		return <any> this.http
			.fetch(url, {
				method: method,
				body: data !== undefined ? json(data) : undefined
			})
			.then((response) => {
				var ct = response.headers.get("Content-Type");
				//console.log("Url", response.url);
				//console.log("Content-Type", ct);

				// Real json objects
				if (ct.indexOf("application/json") >= 0) {
					return response.json();
					/*return response.json().then(function (json) {
						console.log("JSON Result", json);
						return json;
					});*/
				}
				// Json String result and other texts
				else if (ct.indexOf("text/plain") >= 0) {
					return response.text();
					/*return response.text().then(function (text) {
						console.log("TEXT Result", text);
						return text;
					});*/
				}
			});
	}

	protected _get(url:string):ApiPromise<any> {
		return this._fetch("get", url);
	}

	protected _post(url:string, data:any):ApiPromise<any> {
		return this._fetch("post", url, data);
	}

	protected _patch(url:string, data:any):ApiPromise<any> {
		return this._fetch("patch", url, data);
	}

	protected _delete(url:string, data:any):ApiPromise<any> {
		return this._fetch("delete", url, data);
	}

	protected _put(url:string, data:any):ApiPromise<any> {
		return this._fetch("put", url, data);
	}

	protected _head(url:string):ApiPromise<any> {
		return this._fetch("head", url);
	}
}