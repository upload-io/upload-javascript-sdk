/* tslint:disable */
/* eslint-disable */
/**
 * upload-api
 * Upload API
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: hello@upload.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// @ts-ignore
import * as runtime from "../runtime";
import type {
  // @ts-ignore
  AccountJobType,
  // @ts-ignore
  ErrorResponse,
  // @ts-ignore
  JobSummary,
  // @ts-ignore
  ListRecentJobsResponse
} from "../models";

export interface CancelJobParams {
  accountId: string;
  jobType: AccountJobType;
  jobId: string;
}

export interface GetJobParams {
  accountId: string;
  jobType: AccountJobType;
  jobId: string;
}

export interface ListRecentJobsParams {
  accountId: string;
  jobType: Array<AccountJobType>;
}

/**
 *
 */
export class JobApi extends runtime.BaseAPI {
  /**
   * Cancels an in-progress job.  This endpoint requires a `secret_*` API key.
   */
  private async cancelJobRaw(
    requestParameters: CancelJobParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling cancelJob."
      );
    }

    if (requestParameters.jobType === null || requestParameters.jobType === undefined) {
      throw new runtime.RequiredError(
        "jobType",
        "Required parameter requestParameters.jobType was null or undefined when calling cancelJob."
      );
    }

    if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
      throw new runtime.RequiredError(
        "jobId",
        "Required parameter requestParameters.jobId was null or undefined when calling cancelJob."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/jobs/{jobType}/{jobId}`
          .replace(
            `{${"accountId"}}`,
            // @ts-ignore
            "accountId" === "filePath"
              ? String(requestParameters.accountId).substr(1)
              : encodeURIComponent(String(requestParameters.accountId))
          )
          .replace(
            `{${"jobType"}}`,
            // @ts-ignore
            "jobType" === "filePath"
              ? String(requestParameters.jobType).substr(1)
              : encodeURIComponent(String(requestParameters.jobType))
          )
          .replace(
            `{${"jobId"}}`,
            // @ts-ignore
            "jobId" === "filePath"
              ? String(requestParameters.jobId).substr(1)
              : encodeURIComponent(String(requestParameters.jobId))
          ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Cancels an in-progress job.  This endpoint requires a `secret_*` API key.
   */
  async cancelJob(
    requestParameters: CancelJobParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.cancelJobRaw(requestParameters, initOverrides);
  }

  /**
   * Gets information on a job (e.g. a batch file deletion).  This endpoint requires a `secret_*` API key.
   */
  private async getJobRaw(
    requestParameters: GetJobParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<JobSummary>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling getJob."
      );
    }

    if (requestParameters.jobType === null || requestParameters.jobType === undefined) {
      throw new runtime.RequiredError(
        "jobType",
        "Required parameter requestParameters.jobType was null or undefined when calling getJob."
      );
    }

    if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
      throw new runtime.RequiredError(
        "jobId",
        "Required parameter requestParameters.jobId was null or undefined when calling getJob."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/jobs/{jobType}/{jobId}`
          .replace(
            `{${"accountId"}}`,
            // @ts-ignore
            "accountId" === "filePath"
              ? String(requestParameters.accountId).substr(1)
              : encodeURIComponent(String(requestParameters.accountId))
          )
          .replace(
            `{${"jobType"}}`,
            // @ts-ignore
            "jobType" === "filePath"
              ? String(requestParameters.jobType).substr(1)
              : encodeURIComponent(String(requestParameters.jobType))
          )
          .replace(
            `{${"jobId"}}`,
            // @ts-ignore
            "jobId" === "filePath"
              ? String(requestParameters.jobId).substr(1)
              : encodeURIComponent(String(requestParameters.jobId))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Gets information on a job (e.g. a batch file deletion).  This endpoint requires a `secret_*` API key.
   */
  async getJob(
    requestParameters: GetJobParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<JobSummary> {
    const response = await this.getJobRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Lists the most recently issued jobs (e.g. batch file deletions, folder deletions, etc.).  This endpoint requires a `secret_*` API key.
   */
  private async listRecentJobsRaw(
    requestParameters: ListRecentJobsParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ListRecentJobsResponse>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling listRecentJobs."
      );
    }

    if (requestParameters.jobType === null || requestParameters.jobType === undefined) {
      throw new runtime.RequiredError(
        "jobType",
        "Required parameter requestParameters.jobType was null or undefined when calling listRecentJobs."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.jobType) {
      queryParameters["jobType"] = requestParameters.jobType;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/jobs`.replace(
          `{${"accountId"}}`,
          // @ts-ignore
          "accountId" === "filePath"
            ? String(requestParameters.accountId).substr(1)
            : encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Lists the most recently issued jobs (e.g. batch file deletions, folder deletions, etc.).  This endpoint requires a `secret_*` API key.
   */
  async listRecentJobs(
    requestParameters: ListRecentJobsParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ListRecentJobsResponse> {
    const response = await this.listRecentJobsRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
