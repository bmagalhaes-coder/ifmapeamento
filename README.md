# IF Mapeamento — Guia de Organização do Projeto

Este site é feito só em HTML, CSS e JavaScript puro (sem frameworks,
sem passo de build). Basta abrir os arquivos `.html` num navegador
para funcionar.

Este README explica **onde mexer para editar cada coisa**, para que
quem for editar o projeto não precise abrir um arquivo aleatório
"no chute" para achar o que precisa.

## Como o site funciona (fluxo das páginas)

1. `index.html` (antigo `temporizador_logo.html`) — tela de abertura com a
   logo. Depois de alguns segundos, redireciona sozinha para
   `terreo.html`.
2. `terreo.html` — mapa do térreo do campus.
3. `primeiro_andar.html` — mapa do 1º andar do campus.
4. `pesquisa.html` — página de busca por sala/curso/ano.

Tanto `terreo.html` quanto `primeiro_andar.html` têm, no topo, o
botão de modo claro/escuro, e no rodapé, o botão "Pesquisar sala"
que leva para `pesquisa.html`. Os dois também têm um botão para
trocar entre os dois mapas ("1º andar" / "Térreo").

---

## Onde mexer em cada coisa

### Tela de logo inicial (index.html)

| Quero editar... | Arquivo |
|---|---|
| A imagem da logo, o fundo da tela | `index.html` / `logo_da_primeira_tela_do_site.css` |
| Quanto tempo a logo fica na tela antes de sumir, e quanto tempo demora até ir para o mapa do térreo | `temporizador_logo_da_primeira_tela_do_site.js` (os números estão comentados no arquivo, é só trocar) |

### Mapa do térreo (`terreo.html`)

| Quero editar... | Arquivo |
|---|---|
| Tamanho/posição do mapa (o `.png`) na tela, os botões fixos "1º andar"/"Térreo" e o botão "Pesquisar sala" do rodapé | `dimensões_png_terreo.css` |
| Os botões verdes (invisíveis, no térreo) que abrem o pop-up de cada bloco (biblioteca, quadra, cineteatro, blocos A/B e C/D etc.), e os botões das salas *dentro* de cada pop-up | `botões_verdes_terreo.js` (posições e imagem de cada pop-up) e `botões_verdes_terreo.css` (aparência dos botões e do pop-up) |
| Os quadradinhos claros (salas) e escuros (corredores) desenhados sobre o mapa do térreo | `quadradinhos_que_simbolizam_salas_e_corredores_terreo.js` (posição/tamanho de cada quadradinho) e `.css` (cor/aparência) |

### Mapa do 1º andar (`primeiro_andar.html`)

| Quero editar... | Arquivo |
|---|---|
| Tamanho/posição do mapa na tela, os botões fixos "1º andar"/"Térreo", o botão "Pesquisar sala" do rodapé, e o "giro" do mapa quando a tela fica larga | `dimensões_png_primeiro_andar.css` (tamanho/CSS do giro) e `dimensões_png_primeiro_andar.js` (o giro em si é feito pelo CSS; o JS só acompanha isso) |
| Os botões verdes que mostram o nome de cada sala e abrem os dados dela | `botões_verdes_primeiro_andar.js` (posição de cada botão — repare que existem **duas listas**: uma para celular e outra para quando o mapa gira em telas largas) e `botões_verdes_primeiro_andar.css` (aparência dos botões) |
| Os quadradinhos claros (salas) e escuros (corredores) desenhados sobre o mapa do 1º andar | `quadradinhos_que_simbolizam_salas_e_corredores_primeiro_andar.js` (também tem as duas listas, celular e mapa girado) e `.css` (cor/aparência) |

### Página de pesquisa (`pesquisa.html`)

| Quero editar... | Arquivo |
|---|---|
| Quais salas aparecem na lista de busca, e o que aparece no pop-up de cada uma (local, horário, descrição, equipamentos etc.) | `pesquisa.js` — **este é o único motivo para mexer nesse arquivo.** Ele também é usado pelos botões verdes do térreo e do 1º andar: ao clicar num botão verde de qualquer um dos dois mapas, é esse mesmo pop-up (com os mesmos dados) que aparece. |
| Aparência da página de pesquisa e dos pop-ups de sala | `pesquisa.css` |
| Estrutura da página (cabeçalho, campo de busca, botão de limpar) | `pesquisa.html` |

### Modo claro/escuro (usado nas 3 páginas: térreo, 1º andar e pesquisa)

| Quero editar... | Arquivo |
|---|---|
| Cores do modo escuro | `modo_escuro.css` |
| Comportamento do botão (salvar preferência, aplicar ao abrir a página) | `modo_escuro.js` |

### Destaque de salas no mapa (nova funcionalidade)

| Quero editar... | Arquivo |
|---|---|
| Lógica de destacar/limpar salas, criação do botão "Voltar ao normal", e adição do botão "Destacar" dentro dos pop-ups | `destaque_quadradinho_sala.js` |
| Estilo dos quadradinhos destacados (roxo transparente) e do botão "Voltar ao normal" | `destaque_quadradinho_sala.css` |

**Para que o destaque funcione:**
- Cada quadradinho (`.sala-mapa`) deve ter um atributo `data-sala` com o nome exato da sala (igual ao usado nos dados do `pesquisa.js`).
- No `pesquisa.js`, após montar o corpo do modal, chame `window.adicionarBotaoDestacarAoModal(modalBody, nomeDaSala)` para inserir o botão "Destacar no mapa".

---

## Sobre os nomes "dimensões", "botões verdes" e "quadradinhos"

Cada página de mapa (térreo e 1º andar) tem 3 preocupações
diferentes, cada uma no seu próprio par de arquivos `.css`/`.js`:

1. **`dimensões_png_...`** — o "esqueleto" da página: tamanho e
   centralização do mapa na tela, giro do mapa (só no 1º andar), os
   botões fixos de trocar de andar e o botão de pesquisar. É a base
   da página, por isso concentra também esses elementos fixos que
   não são nem botão verde nem quadradinho.
2. **`botões_verdes_...`** — os botões verdes clicáveis que mostram
   informação de uma sala (seja abrindo direto os dados, seja
   abrindo um pop-up com outros botões dentro, como no térreo).
3. **`quadradinhos_que_simbolizam_salas_e_corredores_...`** — os
   retângulos claros/escuros desenhados sobre o mapa só para dar a
   noção visual de "aqui é uma sala" / "aqui é corredor". Eles não
   são clicáveis (só os botões verdes são).

Como o `.andar-botoes` e o `.pesquisa`/`.botao-pesquisa` aparecem
nas duas páginas de mapa, o CSS deles está duplicado nos dois
arquivos `dimensões_png_terreo.css` e `dimensões_png_primeiro_andar.css`.
Se for mudar a aparência desses botões, lembre de mudar nos dois
arquivos.
