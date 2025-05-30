## 1. Simulando uma API com JSON Server

Você está desenvolvendo a aplicação web ADOPET, um site para adoção de animais, e precisa buscar dados de um servidor com as informações dos pets. No entanto, você ainda não tem um back-end pronto. Para contornar isso, você pode utilizar o JSON Server para simular uma API.

Logo, abra seu editor de código, crie um novo projeto e faça a configuração do JSON-Server para simular um back-end que retorna os dados de animais para adoção.

Utilize os dados fictícios a seguir:
`{
  "pets": [
    {
      "id": "1a2b",
      "especie": "felina",
      "nome": "Mimi",
      "raca": "Siamês"
    },
    {
      "id": "2b3c",
      "especie": "canina",
      "nome": "Rex",
      "raca": "Labrador"
    },
    {
      "id": "3c4d",
      "especie": "felina",
      "nome": "Luna",
      "raca": "Persa"
    },
    {
      "id": "4d5e",
      "especie": "canina",
      "nome": "Max",
      "raca": "Beagle"
    },
    {
      "id": "5e6f",
      "especie": "felina",
      "nome": "Simba",
      "raca": "Maine Coon"
    },
    {
      "id": "6f7g",
      "especie": "canina",
      "nome": "Bella",
      "raca": "Bulldog"
    },
    {
      "id": "7g8h",
      "especie": "felina",
      "nome": "Oscar",
      "raca": "Bengal"
    },
    {
      "id": "8h9i",
      "especie": "canina",
      "nome": "Lola",
      "raca": "Poodle"
    },
    {
      "id": "9i0j",
      "especie": "felina",
      "nome": "Nina",
      "raca": "Sphynx"
    },
    {
      "id": "0j1k",
      "especie": "canina",
      "nome": "Charlie",
      "raca": "Golden Retriever"
    }
  ]
}`

## 2 Buscando dados da API

Agora que você tem uma API simulada rodando, você precisa buscar os dados dessa API. Faça uma requisição para buscar os dados dos pets.

## 3 Exibindo dados no Front-end

Você já configurou uma API simulada com JSON Server e fez a requisição para buscar os dados dos pets. Agora, é hora de exibir esses dados na interface da aplicação web.

Crie uma função em JavaScript que renderize os dados dos pets no frontend, exibindo-os em uma lista.

Lembre-se que o projeto não estará estilizado, então, caso queira, crie um arquivo ".css" e adicione estilo para as classes dos elementos.

---

## Resolução do Exercício 1

Como foi algo que eu fiz, mas não executei diversas vezes acabou que eu não memorizei. Então vou digitar a resposta aqui.

---

### Resposta

<ul>
<li>Comece um novo projeto no VS Code (ou outro editor de código qualquer);</li>
<li>Tenha o Node.js instalado para rodar as dependências;</li>
<li>Inicie o comando "npm init -y" para rodar as dependências do node </li>
<li>Crie um diretório com o nome de: "backend";</li>
<li>Crie o db.json neste diretório (aproveite para colar o modelo do exercício);</li>
<li>No terminal, instale o JSON SERVER com o comando "npm install json-server" </li>
<li>Vá no arquivo package.json e adicione um script: "start" "json-server --watch db.json --port 3000" e rode o comando "npm start"</li>
</ul>

<h4>Observações:</h4>

- O número da porta precisa estar disponível para funcionar, chute um valor elevado e evite portas comuns de comunicação http/https/ftp/ para não ter problemas de conlito
- Ao final do processo de abrir o servidor o endereço será http://localhost:`portaescolhida`/`nome do Objeto`
