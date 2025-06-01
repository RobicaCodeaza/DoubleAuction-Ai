import { getTranzactiiAndUpdateDashboard } from '@/services/apiTranzactii'
import { useQuery } from '@tanstack/react-query'

export function useTransactionsAndDashboard(model) {
    const { isLoading, data, error } = useQuery({
        queryKey: ['transactions & dashboard', model?.id],
        queryFn: () => getTranzactiiAndUpdateDashboard(model?.id),
        enabled: !!model?.id, // Only run the query if user_id exists
    })
    console.log(data)

    const transactions = data?.transactions || []
    const dashboard = data?.updatedDashboard || null

    return { isLoading, transactions, dashboard, error }
}
