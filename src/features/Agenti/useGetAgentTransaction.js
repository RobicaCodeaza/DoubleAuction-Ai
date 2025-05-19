import { getTranzactiiAgent } from '@/services/apiAgent'
import { useQuery } from '@tanstack/react-query'

export function useAgentTransactii(modelId, agentId) {
    const {
        isLoading,
        data: tranzactiiAgent,
        error,
    } = useQuery({
        queryKey: ['agent-detalii', modelId, agentId],
        queryFn: () => getTranzactiiAgent(modelId, agentId),
        enabled: !!modelId, // Only run the query if user_id exists
    })

    return { isLoading, error, tranzactiiAgent }
}
