import { getTranzactii } from '@/services/apiTranzactii'
import { useQuery } from '@tanstack/react-query'

export function useTransactions(model) {
    const { isLoading, data, error } = useQuery({
        queryKey: ['transactions', model?.id],
        queryFn: () => getTranzactii(model?.id),
        enabled: !!model?.id, // Only run the query if user_id exists
    })

    const transactions = data?.transactions
    const dashboardData = data?.dashboardData
    return { isLoading, error, transactions, dashboardData }
}
