import { getAgenti } from '@/services/apiAgent'
import { useQuery } from '@tanstack/react-query'

export function useAgents(model) {
    const {
        isLoading,
        data: agents,
        error,
    } = useQuery({
        queryKey: ['agents', model?.id],
        queryFn: () => getAgenti(model?.id),
        enabled: !!model?.id, // Only run the query if user_id exists
    })

    return { isLoading, error, agents }
}
