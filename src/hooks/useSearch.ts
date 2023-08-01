import APIClient from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import convertToMilliscond from "../utilities/convertToMilliscond";

const useSearch = <T>(type: string, searchText: string) => {
  console.log(type);
  const apiClient = new APIClient<T>(`/search/${type}`);

  return useInfiniteQuery({
    queryKey: [`search ${searchText} in ${type} `, type, searchText],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          query: searchText,
          page: pageParam,
        },
      }),
    staleTime: convertToMilliscond("3h"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.total_pages !== allPages.length + 1
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useSearch;
