import { createCategoryRepository, deleteCategoryRepository, getCategoriesRepository, updateCategoryRepository } from "./categories.repository";


export async function getCategoriesServices(page: number = 1) {
    return await getCategoriesRepository(page)
}

export async function createCategoryServices(name: string) {
    return await createCategoryRepository(name)
}

export async function updateCategoryServices(id: number, name: string) {
    return await updateCategoryRepository(id, name)
}

export async function deleteCategoryServices(id: number) {
    return await deleteCategoryRepository(id)
}
