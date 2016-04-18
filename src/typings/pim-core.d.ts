
declare module 'pim-core' {
	export interface IApiConfiguration {
		baseUrl?: string;
		token?: string;
	}

	export interface IApiException {
		status: number;
		statusText: string;
		message: string;
		url: string;
	}
}

