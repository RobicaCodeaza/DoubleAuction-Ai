import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { createAgent as apiCreateAgent } from '../../services/apiAgent'

export function useCreateAgent() {
    const queryClient = useQueryClient()

    const { isLoading: isCreating, mutate: createAgent } = useMutation({
        mutationFn: apiCreateAgent,
        onSuccess: () => {
            toast.success('Agentul a fost creat cu succes.')
            queryClient.invalidateQueries({
                queryKey: ['agents'],
            })
            // reset()
        },
        onError: (err) => toast.error(err.message),
    })

    return { isCreating, createAgent }
}
