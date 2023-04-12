import { useEffect, useRef } from "react";
import axios, { AxiosRequestConfig, CancelTokenSource } from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
} from "react-query";

type RequestMethod = "get" | "post" | "put" | "delete";

interface UseApiConfig extends AxiosRequestConfig {
  method?: RequestMethod;
  body?: any;
}

const createRequest = async (config: UseApiConfig) => {
  const response = await axios(config);
  return response.data;
};

const useApi = (url: string, config: UseApiConfig = {}) => {
  const { method = "get", body, params, headers } = config;

  const apiMethod = method.toLowerCase() as RequestMethod;

  const queryClient = useQueryClient();
  const queryKey = useRef([url, params, headers]);
  const cancelTokenSource = useRef<CancelTokenSource | undefined>();

  const queryConfig: UseQueryOptions<any> = {
    queryFn: () =>
      createRequest({
        url,
        method: apiMethod,
        params,
        headers,
        cancelToken: cancelTokenSource.current?.token,
      }),
    enabled: apiMethod === "get",
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // Cache 5 minutes
  };

  const { data, error, isLoading, refetch } = useQuery(
    queryKey.current,
    queryConfig as any
  );

  const mutationConfig: UseMutationOptions<any, unknown, UseApiConfig> = {
    onMutate: () => {
      cancelTokenSource.current?.cancel();
      cancelTokenSource.current = axios.CancelToken.source();
    },
    onSuccess: () => {
      if (apiMethod === "get") {
        queryClient.invalidateQueries(queryKey.current);
      }
    },
  };

  const mutation = useMutation(
    (customConfig: UseApiConfig) =>
      createRequest({
        url,
        method: apiMethod,
        data: body,
        params,
        headers,
        cancelToken: cancelTokenSource.current?.token,
        ...customConfig,
      }),
    mutationConfig
  );

  useEffect(() => {
    return () => {
      cancelTokenSource.current?.cancel();
    };
  }, []);

  return {
    data,
    isLoading,
    isError: error,
    request: mutation.mutate,
    refetch,
  };
};

export default useApi;
