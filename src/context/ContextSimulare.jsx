import { createContext, useContext, useEffect, useState } from 'react'
import { useModels } from '@/features/Model/useGetModels.js'

const ContextSimulare = createContext()

function ContextSimulareProvider({ children }) {
    const { models, isLoading } = useModels()

    // 🔶 Inițializare din localStorage (dacă există)
    const [model, setModel] = useState(() => {
        const saved = localStorage.getItem('simulareModel')
        return saved ? JSON.parse(saved) : null
    })

    const [etapa, setEtapa] = useState(() => {
        const saved = localStorage.getItem('simulareEtapa')
        return saved ? parseInt(saved, 10) : 0
    })

    // 🔶 La încărcarea modelelor, setăm primul model dacă nu avem deja unul salvat
    useEffect(() => {
        if (!isLoading && models && models.length > 0 && !model) {
            const firstModel = { id: models[0].id, nume: models[0].nume }
            setModel(firstModel)
            localStorage.setItem('simulareModel', JSON.stringify(firstModel))
        }
    }, [models, isLoading, model])

    // 🔶 Salvăm modelul în localStorage la schimbare
    useEffect(() => {
        if (model) {
            localStorage.setItem('simulareModel', JSON.stringify(model))
        }
    }, [model])

    // 🔶 Salvăm etapa în localStorage la schimbare
    useEffect(() => {
        localStorage.setItem('simulareEtapa', etapa)
    }, [etapa])

    function selecteazaModel(id) {
        const modelNou = models.find((m) => m.id === id)
        if (modelNou) {
            setModel({ id: modelNou.id, nume: modelNou.nume })
        }
    }

    function etapaUrmatoare() {
        setEtapa((etapa) => etapa + 1)
    }
    function etapaAnterioara() {
        setEtapa((etapa) => (etapa > 0 ? etapa - 1 : 0))
    }

    return (
        <ContextSimulare.Provider
            value={{
                model,
                etapa,
                selecteazaModel,
                etapaUrmatoare,
                etapaAnterioara,
            }}
        >
            {children}
        </ContextSimulare.Provider>
    )
}

function useModelContext() {
    const context = useContext(ContextSimulare)
    if (context === undefined)
        throw new Error(
            'ContextSimulare was used outside of ContextSimulareProvider'
        )
    return context
}

export { ContextSimulareProvider, useModelContext }
