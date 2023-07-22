// api/usuario.ts
import { NextApiRequest, NextApiResponse } from "next";

type Usuario = {
  id: number;
  nome: string;
  email: string;
  contato: number;
  img: string;
};

let usuarios: Usuario[] = [
  {
    id: 1,
    nome: "João",
    email: "joao@example.com",
    contato: 123456789,
    img: "joao.jpg",
  },
  {
    id: 2,
    nome: "Maria",
    email: "maria@example.com",
    contato: 987654321,
    img: "maria.jpg",
  },
  {
    id: 3,
    nome: "João",
    email: "joao@example.com",
    contato: 123456789,
    img: "joao.jpg",
  },
  {
    id: 4,
    nome: "Maria",
    email: "maria@example.com",
    contato: 987654321,
    img: "maria.jpg",
  },
  {
    id: 5,
    nome: "João",
    email: "joao@example.com",
    contato: 123456789,
    img: "joao.jpg",
  },
  {
    id: 6,
    nome: "Maria",
    email: "maria@example.com",
    contato: 987654321,
    img: "maria.jpg",
  },
  {
    id: 7,
    nome: "João",
    email: "joao@example.com",
    contato: 123456789,
    img: "joao.jpg",
  },
  {
    id: 8,
    nome: "Maria",
    email: "maria@example.com",
    contato: 987654321,
    img: "maria.jpg",
  },
  {
    id: 9,
    nome: "João",
    email: "joao@example.com",
    contato: 123456789,
    img: "joao.jpg",
  },
  {
    id: 10,
    nome: "Maria",
    email: "maria@example.com",
    contato: 987654321,
    img: "maria.jpg",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(usuarios);
  }

  if (req.method === "POST") {
    const { nome, email, contato, img } = req.body;
    const id = usuarios[usuarios.length - 1].id + 1;
    const novoUsuario = { id, nome, email, contato, img };
    usuarios.push(novoUsuario);
    return res.status(201).json(novoUsuario);
  }

  if (req.method === "PUT") {
    const { id, nome, email, contato, img } = req.body;
    const index = usuarios.findIndex((usuario) => usuario.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
    usuarios[index] = { id, nome, email, contato, img };
    return res.status(200).json(usuarios[index]);
  }

  if (req.method === "DELETE") {
    const { id } = req.body;
    usuarios = usuarios.filter((usuario) => usuario.id !== id);
    return res.status(200).json({ message: "Usuário excluído com sucesso." });
  }

  return res.status(405).end();
}
