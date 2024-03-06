import { supabase } from "./supabase";

export async function findAll() {
   const { data } = await supabase.from('ingredients').select().order("name").returns<IngredientsResponse[]>(); // pegando todos e ordenando pelo nome
    return data ?? []
}

async function findByIds(ids: string[]) {
    const { data } = await supabase.from('ingredients').select().in("id", ids).order("name").returns<IngredientsResponse[]>();
}