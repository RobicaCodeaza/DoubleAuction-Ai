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
