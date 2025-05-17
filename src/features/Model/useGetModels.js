import { getModels } from '@/services/apiModel'
import { useQuery } from '@tanstack/react-query'

export function useModels() {
    const {
        isLoading,
        data: models,
        error,
    } = useQuery({
        queryKey: ['models'],
        queryFn: () => getModels(),
        // enabled: !!user.user_id, // Only run the query if user_id exists
    })

    return { isLoading, error, models }
}
