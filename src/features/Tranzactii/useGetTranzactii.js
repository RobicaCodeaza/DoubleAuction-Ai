import { getTranzactii } from '@/services/apiTranzactii'
import { useQuery } from '@tanstack/react-query'

export function useTransactions() {
    const {
        isLoading,
        data: transactions,
        error,
    } = useQuery({
        queryKey: ['transactions'],
        queryFn: () => getTranzactii(),
        // enabled: !!user.user_id, // Only run the query if user_id exists
    })

    return { isLoading, error, transactions }
}
