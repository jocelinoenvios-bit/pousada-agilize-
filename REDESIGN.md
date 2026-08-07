# Redesign v2 — Agilize Pousada e Flats
### Identidade real · Azul-marinho & Ouro

Este documento registra a segunda fase do projeto: o redesign completo do site a partir de referências e ativos reais da marca, substituindo a proposta inicial (ver `PROPOSAL.md`, que documentava a pesquisa e a v1 do site).

---

## 1. O que mudou e por quê

### 1.1 A referência de design pedida não pôde ser acessada
Foi solicitada a análise de `pousadavillagevicosa.com.br` como referência de estrutura, navegação e UX. Três tentativas de acesso (busca de conteúdo via ferramenta de fetch, requisição direta e navegador headless) foram bloqueadas pela política de rede deste ambiente e, adicionalmente, o site retornou 403 (proteção anti-bot) na única tentativa que chegou ao destino. **Não foi possível analisar o site pixel a pixel.** O que se sabe, via busca, é o perfil do empreendimento de referência: bangalôs com piscina privativa, mirante, bar de estrada de montanha, em Viçosa do Ceará (Serra da Ibiapaba) — um resort boutique de serra, não um site que pôde ser auditado tela a tela.

Diante disso, o redesign foi conduzido a partir de: (1) padrões consolidados de hotelaria boutique de alto padrão no Brasil e no mundo (hero cinematográfico, header transparente-para-sólido, galeria com lightbox, prova social qualificada, reserva direta), e (2) a identidade visual **real** da Agilize, que se sobrepôs à direção "preto + verde escuro" pedida inicialmente — ver próximo item.

### 1.2 Descoberta decisiva: a marca já existe e está em uso real
Durante a conversa, você enviou capturas de tela reais: fachada do prédio, letreiro iluminado, lounge da recepção, posts e Reels do Instagram (**@agilizepousadaeflats**, com engajamento real — 587 curtidas no vídeo de inauguração), e materiais de campanha ("Histórias que hospedamos", flyers de estacionamento/carregador elétrico).

Isso revelou que a Agilize **já tem identidade visual real, aplicada fisicamente** (fachada, letreiro em neon, mural do estacionamento) e digitalmente (Instagram ativo desde antes da inauguração, com evento de inauguração já realizado em 27 de junho). Isso contradiz o que o `PROPOSAL.md` original registrava ("sem presença digital indexada") — a pesquisa original via busca pública simplesmente não encontrou o Instagram, que existe e está ativo.

Diante do conflito entre a nova direção pedida (preto + verde escuro + dourado) e a marca real (azul-marinho profundo + dourado/prata + logo de ondas), a decisão — tomada por você quando perguntado diretamente — foi **usar a marca real**. O site agora estende a identidade que já está na fachada, no letreiro e no Instagram, em vez de criar uma segunda identidade visual conflitante.

### 1.3 Paleta recalibrada a partir de amostras de cor reais
As cores não foram "chutadas" — foram extraídas por amostragem de pixel das fotos reais que você enviou (fundo do letreiro, área do flyer):

| Uso | Cor | Origem |
|---|---|---|
| Azul-marinho primário | `#071B42` | Amostrado do fundo do letreiro/flyer reais (RGB 0,23,65 calibrado) |
| Azul-marinho profundo | `#04091C` | Variação mais escura, para rodapé e seções de contraste máximo |
| Dourado | `#C9A227` | Calibrado a partir dos elementos dourados dos flyers e botões de CTA reais |
| Branco / marfim | `#FFFFFF` / `#F3F2ED` | Base neutra, seções claras |

Tipografia: **Playfair Display** (serifada editorial, para headlines — tom "hotel de assinatura") + **Outfit** (geométrica moderna, para corpo/UI). Substituem Fraunces/Manrope da v1, que combinavam com a paleta terracota anterior, não com a identidade azul-marinho real.

### 1.4 Fotos reais incorporadas
Você enviou 5 capturas de tela do Instagram/flyers da pousada. Foram recortadas (com Pillow) as regiões fotográficas limpas, removendo textos e elementos de interface do Instagram, e salvas em `assets/img/real/`:

- `facade-night.jpg` — fachada iluminada à noite, com letreiro "AGILIZE POUSADA E FLATS"
- `facade-parking.jpg` — mural do estacionamento privativo com carregador para carro elétrico
- `lounge-sofa.jpg` — lounge da recepção, parede ripada com logo em neon dourado
- `logo-sign.jpg` — close do letreiro/logo real
- `cafe-coffee.jpg` — foto de Instagram Stories em ambiente de café (não usada no site: continha mão e pés de uma pessoa em enquadramento casual, pouco adequada como imagem institucional; mantida no diretório caso queiram usá-la em redes sociais)

Essas fotos substituem os placeholders correspondentes no hero (home), na seção de boas-vindas, em "A Pousada" e na galeria (agora com **lightbox** clicável). As demais acomodações/ambientes (quartos, piscina, café da manhã servido) ainda não têm fotos reais — permanecem como blocos de composição (mesma lógica da v1: nunca usar banco de imagens genérico fingindo ser a propriedade real).

---

## 2. O que foi construído nesta fase

- **Header transparente → sólido ao rolar**, com o ícone de ondas da marca real substituindo o monograma genérico da v1.
- **Hero em foto real** (estrutura pronta para vídeo: basta trocar `<img class="hero-fallback">` por `<video autoplay muted loop poster="...">` — comentário já deixado no código-fonte).
- **Galeria com lightbox**: clique para ampliar, navegação por setas/teclado, legendas.
- **Seção "Avaliações dos hóspedes"** redesenhada: nota geral + barras de nota por categoria (limpeza, localização, atendimento, custo-benefício) além dos depoimentos em carrossel — todas ainda são **exemplos ilustrativos**, já que a pousada é recém-inaugurada e não há coleta pública de reviews ainda. Substituir por avaliações reais assim que existirem no Google/Instagram.
- **Seção "Estrutura e Comodidades"** reescrita em `acomodacoes.html` com as comodidades reais confirmadas pelos seus materiais de marketing: suítes confortáveis, café da manhã, estacionamento privado, Wi-Fi de qualidade, **mini academia**, **carregador para carro elétrico**, atendimento 24h, segurança.
- Links de Instagram no rodapé e nos CTAs agora apontam para o perfil real (`instagram.com/agilizepousadaeflats`).
- Paleta, tipografia e `theme-color`/favicon atualizados em todas as 7 páginas.

## 3. O que ainda está pendente (mesmo checklist da v1, atualizado)
- [ ] Vídeo institucional para o hero (estrutura de código já pronta para receber)
- [ ] Fotos profissionais de quartos, piscina e café da manhã servido
- [ ] Avaliações reais (Google Meu Negócio, Instagram) substituindo os exemplos
- [ ] Telefone, e-mail, endereço e CNPJ reais no rodapé e no schema.org
- [ ] Confirmar handle exato do Instagram (aparece como `@agilizepousadaeflats` no perfil e `@agilize.pousadaeflats` em uma peça de campanha — confirmar qual é o oficial atual)
- [ ] Link do Facebook (não localizado com certeza — a página "Agilize" encontrada em buscas é de um Centro Clínico e Empresarial homônimo em Varjota, **não** a pousada)

---

*Este documento complementa, sem substituir, o `PROPOSAL.md` original — que permanece válido como registro da pesquisa regional (Varjota, Açude Araras, benchmarking de hotelaria) e como estratégia de SEO/conversão, ainda aplicável à v2.*
