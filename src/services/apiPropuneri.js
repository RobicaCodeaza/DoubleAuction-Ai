import supabase from './supabase'

// 1. Obține toate propunerile pentru un model și o rundă (opțional)
export async function getPropuneri({ modelId, runda = null }) {
    let query = supabase.from('Propuneri').select('*').eq('model_id', modelId)

    if (runda !== null) {
        query = query.eq('runda', runda)
    }

    const { data, error } = await query

    if (error) throw new Error('Nu s-au putut încărca propunerile')
    return data
}

// 2. Creează o propunere nouă
export async function createPropunere(propunere) {
    const { data, error } = await supabase
        .from('Propuneri')
        .insert([propunere])
        .select()
        .single()

    if (error) throw new Error('Propunerea nu a putut fi creată')
    return data
}

// 3. Actualizează o propunere (ex: completezi tranzacția)
export async function updatePropunere(id, campuriActualizate) {
    const { data, error } = await supabase
        .from('Propuneri')
        .update(campuriActualizate)
        .eq('id', id)
        .select()
        .single()

    if (error) throw new Error('Propunerea nu a putut fi actualizată')
    return data
}

// 4. Șterge toate propunerile pentru un model (opțional, resetare)
export async function deletePropuneriByModel(modelId) {
    const { data, error } = await supabase
        .from('Propuneri')
        .delete()
        .eq('model_id', modelId)

    if (error) throw new Error('Propunerile nu au putut fi șterse')
    return data
}

export async function getPropunerePersonala(agentId, modelId) {
    const { data, error } = await supabase
        .from('Propuneri')
        .select('*')
        .eq('agent_id', agentId)
        // .eq('runda', runda)
        .eq('model_id', modelId)
        .single()

    if (error) throw new Error('Nu s-au gasit propunerile agentului')
    return data
}
