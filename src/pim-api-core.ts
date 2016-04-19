import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';
import {IApiConfiguration, IApiException} from 'pim-core';

export class BaseConfiguration {

	/* STATIC */

	private static get standardConfiguration() {
		return {
			baseUrl: 'http://localhost:5000/',
			token: null
		};
	}

	private static _default: IApiConfiguration = {};

	public static setDefault(config: IApiConfiguration) {

		// Fix null values
		config = config || {};

		// Merge new config values into custom values.
		this._default = Object.assign({}, this._default, config);
	}

	public static getDefault(): IApiConfiguration {
		// Merge standard values and custom values.
		return Object.assign({}, this.standardConfiguration, this._default);
	};
}

export class BaseApi {

	/* INSTANCE */

	constructor(config?: IApiConfiguration) {

		// Set instance configuration
		this._config = config || {};
	}

	private _config: IApiConfiguration = {};

	private _getConfiguration(): IApiConfiguration {
		return Object.assign({}, BaseConfiguration.getDefault(), this._config);
	}

	private _getHttpClient(config: IApiConfiguration = {}):HttpClient {
		return new HttpClient().configure(config =>
			config
				.useStandardConfiguration()
		);
	}

	protected _fetch(method:string, url:string, data:any = undefined): Promise<any> {

		// Get fresh configuration
		let config = this._getConfiguration();

		// Combine URL if no protocol is present
		url = url.indexOf("://") >= 0
			? url
			: config.baseUrl + url;

		// Make Request and return Promise
		return this._getHttpClient(config)
			.fetch(url, {
				method: method,
				body: data !== undefined ? json(data) : undefined
			})
			.then((response) => {
				let ct = response.headers.get("Content-Type");

				//console.log("Url", response.url);
				//console.log("Content-Type", ct);

				if (response.ok) {

					// No Content-Type (2xx Code, maybe NoContent etc.)
					if (!ct) {
						return null;
					}

					// Real json objects
					if (ct.indexOf("application/json") >= 0) {
						return response.json();
					}

					// Json String result and other texts
					else if (ct.indexOf("text/plain") >= 0) {
						return response.text();
					}

					// Files/Blobs?
					//
					//

					// Unknown Content Type!
					throw new Error("Unhandled Content-Type '" + ct + "' \r\n  Url: " + response.url);
				}

				// Response is not ok, but somehow didn't throw up earlier? Throw it now!
				throw response;
			});
	}

	protected _get(url:string): Promise<any> {
		return this._fetch("get", url);
	}

	protected _post(url:string, data:any): Promise<any> {
		return this._fetch("post", url, data);
	}

	protected _patch(url:string, data:any): Promise<any> {
		return this._fetch("patch", url, data);
	}

	protected _delete(url:string, data:any): Promise<any> {
		return this._fetch("delete", url, data);
	}

	protected _put(url:string, data:any): Promise<any> {
		return this._fetch("put", url, data);
	}

	protected _head(url:string): Promise<any> {
		return this._fetch("head", url);
	}
}