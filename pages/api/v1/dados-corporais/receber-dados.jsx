import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content: "Você está logado e por isso tem acesso a este conteúdo.",
    });
  } else {
    res.send({
      error: "Você precisa estar logado para enviar estes dados.",
    });
  }
};
