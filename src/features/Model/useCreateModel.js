import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { createModel as apiCreateModel } from '../../services/apiModel'

export function useCreateModel() {
    const queryClient = useQueryClient()

    const { isLoading: isCreating, mutate: createModel } = useMutation({
        mutationFn: apiCreateModel,
        onSuccess: () => {
            toast.success('Modelul a fost creat cu succes.')
            queryClient.invalidateQueries({
                queryKey: ['models'],
            })
            // reset();
        },
        onError: (err) => toast.error(err.message),
    })

    return { isCreating, createModel }
}
