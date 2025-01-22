import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Bem vindo(a) {session.user.email} <br />
        <div className="center">
          <button onClick={() => signOut()}>Sair</button>
        </div>
      </>
    );
  }
  return (
    <div className="center">
      <button onClick={() => signIn()}>Entrar</button>
    </div>
  );
}
