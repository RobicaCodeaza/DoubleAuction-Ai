import { getAgentDataAndCalculateMetrics } from '@/services/apiAgent'
import { useQuery } from '@tanstack/react-query'

export function useAgentDetails(modelId, agentId) {
    const {
        isLoading,
        data: agentDetails,
        error,
        refetch: refetchAgentDetails,
    } = useQuery({
        queryKey: ['agent', modelId, agentId],
        queryFn: () => getAgentDataAndCalculateMetrics(modelId, agentId),
        enabled: false, // Only run the query if we press 'detalii'
    })

    return { isLoading, error, agentDetails, refetchAgentDetails }
}
