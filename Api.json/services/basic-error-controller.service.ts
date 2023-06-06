/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



/**
 * Basic Error Controller
 */
@Injectable({
  providedIn: 'root',
})
export class BasicErrorControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation errorUsingGet
   */
  static readonly ErrorUsingGetPath = '/error';

  /**
   * error.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `errorUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingGet$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasicErrorControllerService.ErrorUsingGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * error.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `errorUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingGet(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.errorUsingGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation errorUsingPut
   */
  static readonly ErrorUsingPutPath = '/error';

  /**
   * error.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `errorUsingPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingPut$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasicErrorControllerService.ErrorUsingPutPath, 'put');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * error.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `errorUsingPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingPut(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.errorUsingPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation errorUsingPost
   */
  static readonly ErrorUsingPostPath = '/error';

  /**
   * error.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `errorUsingPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingPost$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasicErrorControllerService.ErrorUsingPostPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * error.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `errorUsingPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingPost(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.errorUsingPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation errorUsingDelete
   */
  static readonly ErrorUsingDeletePath = '/error';

  /**
   * error.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `errorUsingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingDelete$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasicErrorControllerService.ErrorUsingDeletePath, 'delete');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * error.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `errorUsingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingDelete(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.errorUsingDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation errorUsingOptions
   */
  static readonly ErrorUsingOptionsPath = '/error';

  /**
   * error.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `errorUsingOptions()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingOptions$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasicErrorControllerService.ErrorUsingOptionsPath, 'options');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * error.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `errorUsingOptions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingOptions(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.errorUsingOptions$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation errorUsingHead
   */
  static readonly ErrorUsingHeadPath = '/error';

  /**
   * error.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `errorUsingHead()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingHead$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasicErrorControllerService.ErrorUsingHeadPath, 'head');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * error.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `errorUsingHead$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingHead(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.errorUsingHead$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation errorUsingPatch
   */
  static readonly ErrorUsingPatchPath = '/error';

  /**
   * error.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `errorUsingPatch()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingPatch$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasicErrorControllerService.ErrorUsingPatchPath, 'patch');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * error.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `errorUsingPatch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  errorUsingPatch(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.errorUsingPatch$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
