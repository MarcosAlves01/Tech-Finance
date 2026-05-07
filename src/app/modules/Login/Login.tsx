import { Card } from "@/components/ui/card";
import LoginForm from "./LoginForm";


export default function Login() {
    return (
        <div className="flex mt-50 items-center justify-center w-full">
            <Card className="w-88 h-98 items-center justify-between">
                <div className="flex flex-col items-center">
                    <strong>Bem vindo à Tech Finance</strong>
                    <p>Suas economias no lugar certo!</p>
                </div>
                <LoginForm />
                <div>
                    Todos os direitos reservdos
                </div>
            </Card>
        </div>
    )
}