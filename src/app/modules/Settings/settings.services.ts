import { ChangePasswordPayload, UpdateProfilePayload } from "./types"
import { changePasswordRepository, getProfileRepository, updateProfileRepository } from "./settings.repository"

export async function getProfileServices() {
    return await getProfileRepository()
}

export async function updateProfileServices(payload: UpdateProfilePayload) {
    return await updateProfileRepository(payload)
}

export async function changePasswordServices(payload: ChangePasswordPayload) {
    return await changePasswordRepository(payload)
}
