import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'squidrouter/1 (api/6.1.1)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Returns supported chain/s
   *
   * @summary Get supported chains
   * @throws FetchError<400, types.GetChainsResponse400> Invalid request
   * @throws FetchError<404, types.GetChainsResponse404> Not found
   * @throws FetchError<500, types.GetChainsResponse500> Unkown error
   */
  getChains(metadata?: types.GetChainsMetadataParam): Promise<FetchResponse<200, types.GetChainsResponse200>> {
    return this.core.fetch('/chains', 'get', metadata);
  }

  /**
   * Returns transaction route information and call data object
   *
   * @summary Get transaction route information
   * @throws FetchError<400, types.GetRouteResponse400> Invalid request
   * @throws FetchError<404, types.GetRouteResponse404> Not found
   * @throws FetchError<500, types.GetRouteResponse500> Unkown error
   */
  getRoute(metadata: types.GetRouteMetadataParam): Promise<FetchResponse<200, types.GetRouteResponse200>> {
    return this.core.fetch('/route', 'get', metadata);
  }

  /**
   * Returns Squid SDK information
   *
   * @throws FetchError<400, types.GetSdkInfoResponse400> Invalid request
   * @throws FetchError<404, types.GetSdkInfoResponse404> Not found
   * @throws FetchError<500, types.GetSdkInfoResponse500> Unkown error
   */
  getSdkInfo(): Promise<FetchResponse<200, types.GetSdkInfoResponse200>> {
    return this.core.fetch('/sdk-info', 'get');
  }

  /**
   * Query Axelarscan for transaction status
   *
   * @summary Get transaction status
   * @throws FetchError<400, types.GetStatusResponse400> Invalid request
   * @throws FetchError<404, types.GetStatusResponse404> Not found
   * @throws FetchError<500, types.GetStatusResponse500> Unkown error
   */
  getStatus(metadata: types.GetStatusMetadataParam): Promise<FetchResponse<200, types.GetStatusResponse200>> {
    return this.core.fetch('/status', 'get', metadata);
  }

  /**
   * Returns token price
   *
   * @summary Get token price
   * @throws FetchError<400, types.GetTokenPriceResponse400> Invalid request
   * @throws FetchError<404, types.GetTokenPriceResponse404> Not found
   * @throws FetchError<500, types.GetTokenPriceResponse500> Unkown error
   */
  getTokenPrice(metadata: types.GetTokenPriceMetadataParam): Promise<FetchResponse<200, types.GetTokenPriceResponse200>> {
    return this.core.fetch('/token-price', 'get', metadata);
  }

  /**
   * Returns supported token/s
   *
   * @summary Get supported tokens
   * @throws FetchError<400, types.GetTokensResponse400> Invalid request
   * @throws FetchError<404, types.GetTokensResponse404> Not found
   * @throws FetchError<500, types.GetTokensResponse500> Unkown error
   */
  getTokens(metadata?: types.GetTokensMetadataParam): Promise<FetchResponse<200, types.GetTokensResponse200>> {
    return this.core.fetch('/tokens', 'get', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { GetChainsMetadataParam, GetChainsResponse200, GetChainsResponse400, GetChainsResponse404, GetChainsResponse500, GetRouteMetadataParam, GetRouteResponse200, GetRouteResponse400, GetRouteResponse404, GetRouteResponse500, GetSdkInfoResponse200, GetSdkInfoResponse400, GetSdkInfoResponse404, GetSdkInfoResponse500, GetStatusMetadataParam, GetStatusResponse200, GetStatusResponse400, GetStatusResponse404, GetStatusResponse500, GetTokenPriceMetadataParam, GetTokenPriceResponse200, GetTokenPriceResponse400, GetTokenPriceResponse404, GetTokenPriceResponse500, GetTokensMetadataParam, GetTokensResponse200, GetTokensResponse400, GetTokensResponse404, GetTokensResponse500 } from './types';
