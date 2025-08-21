import { useEffect } from 'react'
import { API_PER_PAGE } from 'constants/constants'
import { isArray } from 'helpers/helpers'
import { DiscourseReviewType } from 'services/apis/discourseApis'
import { QUERY_CLIENT } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

export const useCrudDiscourseReviewsPagination = (
  queryKey: string, // e.g. UTILS_QUERY_KEYS.discourse.reviews
  listQueryKey: any, // the listQueryKey from useCrud that is e.g. [UTILS_QUERY_KEYS.discourse.reviews, filters]
  page: number,
) => {
  const { list: paginatedList, isLoading: isLoadingPagination } = useCrud<DiscourseReviewType>({
    queryKey: queryKey,
    filters: { page: page, perPage: API_PER_PAGE },
    configs: { enabled: page !== 1 },
  })

  useEffect(() => {
    QUERY_CLIENT.setQueryData(
      listQueryKey,
      (list: DiscourseReviewType[]): DiscourseReviewType[] => {
        if (!list || !isArray(list)) return []

        return [...list, ...paginatedList]
      },
    )
  }, [paginatedList])

  return {
    isLoadingPagination,
  }
}
