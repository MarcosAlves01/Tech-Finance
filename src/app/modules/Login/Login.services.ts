import { LoginRepository } from "./Login.repository";



export async function LoginServices(email: string, password: string) {
    return await LoginRepository(email, password)
}