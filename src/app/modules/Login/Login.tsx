import { Card } from "@/components/ui/card";
import LoginForm from "./LoginForm";


export default function Login() {
    return (
        <div className="flex items-center justify-center w-full">
            <Card className="w-58">
                <div className="flex flex-col items-center">
                    <strong>Bem vindo à Tech Finance</strong>
                    <p>Suas economias no lugar certo!</p>
                </div>
                <LoginForm />
            </Card>
        </div>
    )
}