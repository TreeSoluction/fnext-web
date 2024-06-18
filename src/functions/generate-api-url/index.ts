import { API_ENDPOINTS } from "@/constants/api-endpoints";

type Endpoint = keyof typeof API_ENDPOINTS;

type ConfigParams = {
  params?: Record<string, string | number>;
  query?: Record<string, string | number>;
};

/**
 * Generates the API URL based on the provided endpoint and configuration parameters.
 *
 * @param endpoint - The endpoint to generate the URL for.
 * @param params - The parameters to replace in the endpoint URL.
 * @param query - The query parameters to append to the URL.
 * @returns The generated API URL.
 */
export default function generateApiUrl(
  endpoint: Endpoint,
  { params, query }: ConfigParams,
): string {
  let final_endpoint = API_ENDPOINTS[endpoint];

  if (params) {
    Object.keys(params).forEach((key) => {
      final_endpoint = final_endpoint.replace(
        `:${key}`,
        params[key].toString(),
      );
    });
  }

  if (query) {
    const queryStr = Object.keys(query)
      .map((key) => `${key}=${query[key]}`)
      .join("&");
    final_endpoint = `${final_endpoint}?${queryStr}`;
  }

  return final_endpoint;
}

// generate the example code that assigns the execution of the above function to a variable
