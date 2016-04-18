
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

	export interface ApiPromise<T> {
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): ApiPromise<TResult>;
		then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): ApiPromise<TResult>;

		/**
		 * Attaches callback for the resolution of an Api Exception
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch(onrejected?: (exception: IApiException) => T | PromiseLike<T>): Promise<T>;
		catch(onrejected?: (exception: IApiException) => void): Promise<T>;

		[Symbol.toStringTag]: "ApiPromise";
	}
}

