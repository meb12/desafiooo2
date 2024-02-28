// POST
async function registrosAPI(nome, email, cpf, aniversario, senha) {
  const conexao = await fetch("http://localhost:5193/api/Usuario", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nomeUsuario: nome,
      email: email,
      cpf: cpf,
      dataNascimento: aniversario,
      senha: senha,
    }),
  });
  if (!conexao.ok) {
  }
  return conexao.json();
}
async function loginUser(email, senha) {
  const conexao = await fetch("http://localhost:5193/api/Login", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      senha: senha,
    }),
  });
  if (!conexao.ok) {
  }
  return conexao.json();
}

async function registrosPubli(titulo, subtitulo, texto, imagem) {
  const conexao = await fetch("http://localhost:5193/api/Postagem", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      titulo: titulo,
      subtitulo: subtitulo,
      noticia: texto,
      img: imagem,
    }),
  });
  if (!conexao.ok) {
  }
  return conexao.json();
}

// GET
async function listaNoticias() {
  const conexao = await fetch("http://localhost:5193/api/Postagem/GetAll", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  });
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

export const conectaAPI = {
  listaNoticias,
  registrosAPI,
  loginUser,
  registrosPubli,
};
