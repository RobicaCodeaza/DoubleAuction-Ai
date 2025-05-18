import { createContext, useContext, useEffect, useState } from 'react'
import { useModels } from '@/features/Model/useGetModels.js'

const ContextSimulare = createContext()

function ContextSimulareProvider({ children }) {
    const { models, isLoading } = useModels()
    const [model, setModel] = useState(null) // { id, nume }
    const [etapa, setEtapa] = useState(0)
    useEffect(() => {
        if (!isLoading && models) {
            // Dacă nu există un model selectat, setăm primul model ca fiind selectat
            setModel(models[0])
            // console.log('modele', models)
        }
    }, [models, isLoading])

    function selecteazaModel(id) {
        const modelNou = models.find((m) => m.id === id)
        if (modelNou) {
            setModel({ id: modelNou.id, nume: modelNou.nume })
        }
    }

    // 🔁 Funcție: schimbă etapa
    function etapaUrmatoare() {
        setEtapa((etapa) => etapa + 1)
    }
    function etapaAnterioara() {
        setEtapa((etapa) => etapa - 1)
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
