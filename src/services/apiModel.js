import supabase from './supabase'

// 1. Obține toate modelele
export async function getModels() {
    const { data, error } = await supabase.from('model').select('*')
    if (error) throw new Error('Nu s-au putut încărca modelele')
    return data
}

// 2. Obține un singur model după ID
export async function getModel(id) {
    const { data, error } = await supabase
        .from('model')
        .select('*')
        .eq('id', id)
        .single()
    if (error) throw new Error('Modelul nu a fost găsit')
    return data
}

// 3. Creează un model nou
export async function createModel(nouModel) {
    const { data, error } = await supabase
        .from('model')
        .insert([nouModel])
        .select()
        .single()
    if (error) throw new Error('Modelul nu a putut fi creat')
    return data
}

// 4. Actualizează un model
export async function updateModel(id, campuriActualizate) {
    const { data, error } = await supabase
        .from('model')
        .update(campuriActualizate)
        .eq('id', id)
        .select()
        .single()
    if (error) throw new Error('Modelul nu a putut fi actualizat')
    return data
}

// 5. Șterge un model
export async function deleteModel(id) {
    const { data, error } = await supabase.from('model').delete().eq('id', id)
    if (error) throw new Error('Modelul nu a putut fi șters')
    return data
}
