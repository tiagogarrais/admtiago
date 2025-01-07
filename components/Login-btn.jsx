import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Logado no e-mail: {session.user.email} <br />
        <button onClick={() => signOut()}>Sair</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Entrar</button>
    </>
  );
}
