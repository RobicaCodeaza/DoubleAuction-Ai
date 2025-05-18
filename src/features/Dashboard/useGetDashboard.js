import { getDashboard } from '@/services/apiDashboard'
import { useQuery } from '@tanstack/react-query'

export function useDashboards(model) {
    const {
        isLoading,
        data: dashboard,
        error,
    } = useQuery({
        queryKey: ['dashboard', model?.id],
        queryFn: () => getDashboard(model?.id),
        enabled: !!model?.id, // Only run the query if user_id exists
    })

    return { isLoading, error, dashboard }
}
