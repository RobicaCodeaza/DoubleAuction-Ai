import { calculeazaEficientePiataPeRunda } from '@/lib/helpers'
import { createDashboardEntries } from './apiDashboard'
import supabase from './supabase'

// 1. Obține toate tranzacțiile pentru un model
export async function getTranzactii(modelId) {
    const { data, error } = await supabase
        .from('Tranzactii')
        .select('*')
        .eq('model_id', modelId)
        .order('runda', { ascending: true })

    if (error) throw new Error('Nu s-au putut încărca tranzacțiile')
    return data
}

// 2. Creează o tranzacție nouă
export async function createTranzactie(tranzactie) {
    const { data, error } = await supabase
        .from('Tranzactii')
        .insert([tranzactie])
        .select()
        .single()

    if (error) throw new Error('Tranzacția nu a putut fi creată')
    return data
}

// 3. Șterge toate tranzacțiile dintr-un model (opțional)
export async function deleteTranzactiiByModel(modelId) {
    const { data, error } = await supabase
        .from('Tranzactii')
        .delete()
        .eq('model_id', modelId)

    if (error) throw new Error('Tranzacțiile nu au putut fi șterse')
    return data
}

export async function getTranzactiiAndUpdateDashboard(modelId) {
    console.log('getTranzactiiAndUpdateDashboard called with modelId:', modelId)
    let insertedDashboard

    // ✅ Obține tranzacțiile
    const { data: transactions, error: tranzError } = await supabase
        .from('Tranzactii')
        .select('*')
        .eq('model_id', modelId)
        .order('runda', { ascending: true })

    if (tranzError) throw new Error('Nu s-au putut încărca tranzacțiile')

    // ✅ Verifică dacă dashboard există deja
    const { data: existingDashboard, error: dashboardError } = await supabase
        .from('Dashboard')
        .select('id')
        .eq('model_id', modelId)
        .limit(1)

    if (dashboardError)
        throw new Error('Nu s-au putut verifica datele dashboard')

    if (existingDashboard.length === 0) {
        const { data: propuneri, error: propuneriError } = await supabase
            .from('Propuneri')
            .select('*')
            .eq('model_id', modelId)

        if (propuneriError) throw new Error('Nu s-au putut încărca propunerile')

        const propuneriPeRunda = {}
        for (const p of propuneri) {
            if (!propuneriPeRunda[p.runda]) propuneriPeRunda[p.runda] = []
            propuneriPeRunda[p.runda].push(p)
        }

        // ✅ Obține agenții doar dacă trebuie să calculezi dashboard-ul
        const { data: agents, error: agentError } = await supabase
            .from('Agent')
            .select('*')
            .eq('model_id', modelId)

        if (agentError) throw new Error('Nu s-au putut încărca agenții')

        const cantitatiDorite = agents
            .filter((a) => a.rol === 'cumparator')
            .map((a) => ({ agent_id: a.id, cantitate_initiala: a.cantitate }))

        const tranzactiiPeRunda = {}
        for (const t of transactions) {
            if (!tranzactiiPeRunda[t.runda]) tranzactiiPeRunda[t.runda] = []
            tranzactiiPeRunda[t.runda].push(t)
        }

        const eficiente = Object.entries(tranzactiiPeRunda).map(
            ([runda, tranz]) =>
                calculeazaEficientePiataPeRunda(
                    Number(runda),
                    tranz,
                    cantitatiDorite,
                    propuneriPeRunda[runda]?.length || 0,
                    modelId
                )
        )
        console.log('Eficiente calculate:', eficiente)

        // ✅ DOAR aici try/catch local, pentru funcția externă care poate arunca

        try {
            insertedDashboard = await createDashboardEntries(eficiente)
            console.log('Inserted dashboard entries:', insertedDashboard)
        } catch (error) {
            console.error('Eroare la inserarea în Dashboard:', error)
            throw error // lăsăm React Query să gestioneze
        }
    }

    const { data: updatedDashboard, error: refetchError } = await supabase
        .from('Dashboard')
        .select('*')
        .eq('model_id', modelId)
        .order('runda', { ascending: true })

    if (refetchError)
        throw new Error('Nu s-au putut încărca dashboard-ul după insert')

    // ✅ Returnează DOAR tranzacțiile
    return { transactions, updatedDashboard }
}
