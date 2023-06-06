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

import { JwtRequestModel } from '../models/jwt-request-model';


/**
 * Jwt Controller
 */
@Injectable({
  providedIn: 'root',
})
export class JwtControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createTokenUsingPost
   */
  static readonly CreateTokenUsingPostPath = '/login';

  /**
   * createToken.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTokenUsingPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  createTokenUsingPost$Response(params: {

    /**
     * request
     */
    request: JwtRequestModel;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, JwtControllerService.CreateTokenUsingPostPath, 'post');
    if (params) {
      rb.body('request', params.request, {});
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
   * createToken.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTokenUsingPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createTokenUsingPost(params: {

    /**
     * request
     */
    request: JwtRequestModel;
  },
  context?: HttpContext

): Observable<void> {

    return this.createTokenUsingPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
