import {autoinject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';

export class ApiController {

	private static _http: HttpClient;

	private static _baseUrl: string = 'http://localhost:5000/api/';

	public static get baseUrl() {
		return this._baseUrl;
	}

	public static set baseUrl(value: string) {
		this._baseUrl = value;
		this._http = null;
	}

	protected static get http():HttpClient {
		if (!this._http) {
			this._http = new HttpClient();
			this._http.configure(config =>
				config
					.useStandardConfiguration()
					.withBaseUrl(ApiController._baseUrl)
			);
		}
		return this._http;
	}

	protected static fetch(method:string, url:string, data:any = undefined):Promise<any> {
		return this.http
			.fetch(url, {
				method: method,
				body: json(data)
			})
			.then(response => response.json());
	}

	protected static get(url:string):Promise<any> {
		return this.fetch("get", url);
	}

	protected static post(url:string, data:any):Promise<any> {
		return this.fetch("post", url, data);
	}

	protected static patch(url:string, data:any):Promise<any> {
		return this.fetch("patch", url, data);
	}

	protected static delete(url:string, data:any):Promise<any> {
		return this.fetch("delete", url, data);
	}

	protected static put(url:string, data:any):Promise<any> {
		return this.fetch("put", url, data);
	}

	protected static head(url:string, data:any):Promise<any> {
		return this.fetch("head", url, data);
	}
}