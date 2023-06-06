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

import { UserReq } from '../models/user-req';


/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
export class UserControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createUsingPost1
   */
  static readonly CreateUsingPost1Path = '/user';

  /**
   * create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUsingPost1()` instead.
   *
   * This method doesn't expect any request body.
   */
  createUsingPost1$Response(params: {

    /**
     * u
     */
    u: UserReq;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.CreateUsingPost1Path, 'post');
    if (params) {
      rb.body('u', params.u, {});
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
   * create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUsingPost1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createUsingPost1(params: {

    /**
     * u
     */
    u: UserReq;
  },
  context?: HttpContext

): Observable<void> {

    return this.createUsingPost1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findAllUsingGet1
   */
  static readonly FindAllUsingGet1Path = '/user/findAll';

  /**
   * findAll.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllUsingGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllUsingGet1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.FindAllUsingGet1Path, 'get');
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
   * findAll.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllUsingGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllUsingGet1(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.findAllUsingGet1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByIdUsingGet1
   */
  static readonly FindByIdUsingGet1Path = '/user/{id}';

  /**
   * findById.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByIdUsingGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByIdUsingGet1$Response(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.FindByIdUsingGet1Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * findById.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByIdUsingGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByIdUsingGet1(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<void> {

    return this.findByIdUsingGet1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateUsingPut1
   */
  static readonly UpdateUsingPut1Path = '/user/{id}';

  /**
   * update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUsingPut1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateUsingPut1$Response(params: {

    /**
     * id
     */
    id: any;

    /**
     * user
     */
    user: UserReq;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UpdateUsingPut1Path, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body('user', params.user, {});
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
   * update.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUsingPut1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateUsingPut1(params: {

    /**
     * id
     */
    id: any;

    /**
     * user
     */
    user: UserReq;
  },
  context?: HttpContext

): Observable<void> {

    return this.updateUsingPut1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteUsingDelete1
   */
  static readonly DeleteUsingDelete1Path = '/user/{id}';

  /**
   * delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUsingDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUsingDelete1$Response(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.DeleteUsingDelete1Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * delete.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUsingDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUsingDelete1(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteUsingDelete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
