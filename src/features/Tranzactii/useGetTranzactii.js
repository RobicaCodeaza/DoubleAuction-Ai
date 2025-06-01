import { getTranzactii } from '@/services/apiTranzactii'
import { useQuery } from '@tanstack/react-query'

export function useTransactions(model) {
    const {
        isLoading,
        data: transactions,
        error,
    } = useQuery({
        queryKey: ['transactions', model?.id],
        queryFn: () => getTranzactii(model?.id),
        enabled: !!model?.id, // Only run the query if user_id exists
    })

    return { isLoading, error, transactions }
}
