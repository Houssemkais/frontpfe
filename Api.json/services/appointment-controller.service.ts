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

import { AppointmentCreateModel } from '../models/appointment-create-model';
import { AppointmentUpdateModel } from '../models/appointment-update-model';


/**
 * Appointment Controller
 */
@Injectable({
  providedIn: 'root',
})
export class AppointmentControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createUsingPost
   */
  static readonly CreateUsingPostPath = '/appointment';

  /**
   * create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUsingPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  createUsingPost$Response(params: {

    /**
     * a
     */
    a: AppointmentCreateModel;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.CreateUsingPostPath, 'post');
    if (params) {
      rb.body('a', params.a, {});
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
   * To access the full response (for headers, for example), `createUsingPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createUsingPost(params: {

    /**
     * a
     */
    a: AppointmentCreateModel;
  },
  context?: HttpContext

): Observable<void> {

    return this.createUsingPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findAllUsingGet
   */
  static readonly FindAllUsingGetPath = '/appointment/findAll';

  /**
   * findAll.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllUsingGet$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.FindAllUsingGetPath, 'get');
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
   * To access the full response (for headers, for example), `findAllUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllUsingGet(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.findAllUsingGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByIdUsingGet
   */
  static readonly FindByIdUsingGetPath = '/appointment/{id}';

  /**
   * findById.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByIdUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByIdUsingGet$Response(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.FindByIdUsingGetPath, 'get');
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
   * To access the full response (for headers, for example), `findByIdUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByIdUsingGet(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<void> {

    return this.findByIdUsingGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateUsingPut
   */
  static readonly UpdateUsingPutPath = '/appointment/{id}';

  /**
   * update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUsingPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateUsingPut$Response(params: {

    /**
     * appointmentUpdateModel
     */
    appointmentUpdateModel: AppointmentUpdateModel;

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.UpdateUsingPutPath, 'put');
    if (params) {
      rb.body('appointmentUpdateModel', params.appointmentUpdateModel, {});
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
   * update.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUsingPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateUsingPut(params: {

    /**
     * appointmentUpdateModel
     */
    appointmentUpdateModel: AppointmentUpdateModel;

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<void> {

    return this.updateUsingPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteUsingDelete
   */
  static readonly DeleteUsingDeletePath = '/appointment/{id}';

  /**
   * delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUsingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUsingDelete$Response(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.DeleteUsingDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteUsingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUsingDelete(params: {

    /**
     * id
     */
    id: any;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteUsingDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
