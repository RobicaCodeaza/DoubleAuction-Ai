import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { createDashboardEntry as apiCreateDashboardEntry } from '@/services/apiDashboard'

export function useCreateDashboard() {
    const queryClient = useQueryClient()

    const { isLoading: isCreating, mutate: createDashboardEntry } = useMutation(
        {
            mutationFn: apiCreateDashboardEntry,
            onSuccess: () => {
                toast.success(
                    'Datele de pe dashboard au fost actualizate cu succes.'
                )
                queryClient.invalidateQueries({
                    queryKey: ['dashboard'],
                })
                // reset()
            },
            onError: (err) => toast.error(err.message),
        }
    )

    return { isCreating, createDashboardEntry }
}
