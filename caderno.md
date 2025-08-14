# Anotações Importantes

## De nada adianta Colocar combustível no carro e esquecer de dar partida.

Esse é o lembrete (!)amigável de mim para mim mesmo para lembrar que `variavelQualquerQueSeja.json()` precisa da praga maligna dos `()` no final.

## Erro de digitação em uma distração de 10 segundos pode virar uma manutenção de código de 1h.

NUNCA DIGITE CÓDIGO SEM CAFEÍNA EM NÍVEIS ACEITÁVEIS NO SEU SANGUE.

## Fazendo uma busca typeahead

Primeira coisa: coloque um escutador de eventos para checar as informações à medida que eles forem sendo digitados com o `addEventListener("input", função)`.
Isso fará com que o navegador fique ouvindo tudo que for digitado.

## Método patch

Put é para alterar vários parâmetros de um registro no banco de dados. Porém o patch é mais recomendado para alterar apenas uma propriedade. Basta passar apenas a(s) propriedades que você quer atualizar.

### De acordo com o para saber mais da alura:

Nesta aula, utilizamos o PATCH para fazer a funcionalidade de favoritar pensamentos.

Vamos conhecê-lo um pouco mais?

1. O que são PATCH e PUT?

PATCH e PUT são métodos HTTP usados para atualizar recursos em um servidor, mas eles funcionam de maneiras diferentes.

O PUT é utilizado para substituir um recurso existente ou criar um novo recurso se ele não existir. Quando você usa PUT, você deve enviar a representação completa do recurso que está sendo atualizado ou criado. Isso significa que o recurso no servidor é substituído pela versão fornecida na requisição PUT. Por exemplo, utilizamos o PUT quando editamos um pensamento por completo, em suas várias propriedades, como autoria e conteúdo.

Por sua vez, o PATCH é usado para fazer atualizações parciais em um recurso existente. Em vez de enviar o recurso completo, você envia apenas as mudanças que deseja aplicar. PATCH é útil quando você precisa atualizar apenas uma parte de um recurso sem afetar o restante. No nosso caso, só podemos favoritar um pensamento que já existe no projeto e, além disso, apenas atualizamos o status de “favorito” ou “não-favorito” — ou seja, uma parte do pensamento; não o pensamento por completo. 2. Quando usar PUT?

    Substituição completa: use PUT quando você precisa substituir um recurso inteiro. Por exemplo, se você tiver um objeto de usuário com várias propriedades e quiser atualizar todas as propriedades, você enviaria o objeto completo com PUT;
    Criação de recurso: se o recurso ainda não existir no servidor, PUT pode ser usado para criá-lo com a representação fornecida.

3. Quando usar PATCH?

   Atualização parcial: utilize o PATCH quando você precisar modificar apenas algumas partes de um recurso. Isso economiza largura de banda e evita o envio de dados que não foram alterados;
   Atualizações específicas: ideal para alterações específicas, como atualizar apenas o endereço de e-mail, enquanto mantém outras informações inalteradas.

4. Principais diferenças

Vamos resumir tudo o que vimos da seguinte forma:
Abrangência da atualização:

    PUT: atualiza ou substitui o recurso completo;
    PATCH: atualiza apenas os campos especificados.

Uso de dados:

    PUT: envia todos os dados do recurso;
    PATCH: envia apenas as alterações.

Agora que você compreendeu as diferenças entre PUT e PATCH, poderá escolher o método mais apropriado para atualizar recursos em uma API. Logo, seu código ficará mais eficiente ao interagir com um servidor.

## Formatar datas em JavaScript

### Para que sofrer??

Vamos usar o "porta-peruca ambulante" para anotar as datas e pensar em um formato que seja mais acssível. Vamos às anotaçõs importantes:

1. O JavaScript (como quase todas as linguagens) se baseia no inglês para anotar as datas quando você precisar passar as informações no formato `data = new Date("MM-DD-YYYY")` substitua pelo formato que você já está acostumado ao preencher zilhões de formulários.
2. Ele também pode ser usado com uma "pegadinha" para escrever a data completa. `data = new Date(2025, 06, 25)` Isso retorna 25 de julho de 2025. O mês usa a mesma lógica de arrays para ser composto. Para ficar mais fácil a sua vida, use valor do mês no calendario-1 e seja feliz.
3. O new Date() sempre retorna como o dia completo, existem formas de trabalhar com datas e horários mais completos (veja o repositório da lista de compras para pegar detalhes de como extrair apenas o horário e/dia da semana)

## Regex

Aqui podemos usar algumas outras formas para garantir que o formulário não fique fraco e com dados vazios. Isso pode prejudicar a regra de negócio de alguns formulários. Dito isso usaremos o regex.
`const regexConteudo = /^[A-za-z]{10,}$/ `
Essa variável diz que estou limitando algum campo a ter apenas letras e no mínimo 10 caracteres. Entre colchetes eu digo o que é válido e entre chaves eu digo a quantidade de caracteres.

Agora basta adicionar uma função que valida se esse campo está certo e, se não estiver, mandar uma mensagem de comunicação com o usuário da página.
