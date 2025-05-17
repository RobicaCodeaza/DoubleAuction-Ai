import supabase from './supabase'

// 1. Obține metricile pentru un model (toate rundele)
export async function getDashboard(modelId) {
    const { data, error } = await supabase
        .from('Dashboard')
        .select('*')
        .eq('model_id', modelId)
        .order('runda', { ascending: true })

    if (error) throw new Error('Nu s-au putut încărca metricile dashboard-ului')
    return data
}

// 2. Creează o nouă intrare de metrică
export async function createDashboardEntry(entry) {
    const { data, error } = await supabase
        .from('Dashboard')
        .insert([entry])
        .select()
        .single()

    if (error) throw new Error('Nu s-a putut salva metrica în dashboard')
    return data
}
