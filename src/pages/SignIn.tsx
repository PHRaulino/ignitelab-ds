import { FormEvent, useState } from "react";
import { Checkbox } from "../components/Checkbox";
import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";

export const SignIn = () => {
  const [isUserSignIn, setIsUserSignIn] = useState(false);

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'phraulino@mail.com.br',
      password: '12345'
    })

    setIsUserSignIn(true);
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça o login e comece a usar!
        </Text>
      </header>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch gap-4 w-full max-w-sm mt-10"
      >
        {isUserSignIn && <Text>Usuario Logado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3 ">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3 ">
          <Text className="font-semibold">Sua Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex item-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembra de mim por 30 dias
          </Text>
        </label>
        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora
          </a>
        </Text>
      </footer>
    </div>
  );
};
