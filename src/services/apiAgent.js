import supabase from './supabase'

// 1. Obține toți agenții pentru un model
export async function getAgenti(modelId) {
    console.log('modelId', modelId)
    const { data, error } = await supabase
        .from('Agent')
        .select('*')
        .eq('model_id', modelId)

    if (error) throw new Error('Nu s-au putut încărca agenții')
    return data
}

// 2. Creează un agent
export async function createAgent(agent) {
    const { data, error } = await supabase
        .from('Agent')
        .insert([agent])
        .select()
        .single()

    if (error) throw new Error('Agentul nu a putut fi creat', error)
    return data
}

// 3. Actualizează un agent
export async function updateAgent(id, campuri) {
    const { data, error } = await supabase
        .from('Agent')
        .update(campuri)
        .eq('id', id)
        .select()
        .single()

    if (error) throw new Error('Agentul nu a putut fi actualizat')
    return data
}

// 4. Șterge un agent
export async function deleteAgent(id) {
    const { data, error } = await supabase.from('Agent').delete().eq('id', id)
    if (error) throw new Error('Agentul nu a putut fi șters')
    return data
}

/**
 * Obține toate tranzacțiile unui agent dintr-un model.
 * @param {number} modelId - ID-ul modelului
 * @param {number} agentId - ID-ul agentului
 * @returns {Promise<ITranzactie[]>} - Tranzacțiile agentului
 */
export async function getTranzactiiAgent(modelId, agentId) {
    const { data, error } = await supabase
        .from('Tranzactii')
        .select('*')
        .eq('model_id', modelId)
        .or(`cumparator.eq.${agentId},vanzator.eq.${agentId}`) // poate fi cumpărător sau vânzător
    console.log('data', data)
    if (error) throw new Error('Nu s-au putut încărca tranzacțiile agentului')
    return data
}
