@AGENTS.md

# Projeto GG Studio — regras de trabalho

Este repositório foi criado a partir do modelo `ggstudio-dev/modelo-site`. É **um** projeto (demo de portfólio ou trabalho de cliente) da GG Studio, de Guilherme (brasileiro, a viver em Portugal). Estas regras valem tanto no PC como numa sessão do Claude Code na nuvem (que só vê este repositório).

## Como falar comigo (Guilherme)
- Responder em **português de Portugal**.
- Explicar passo a passo tudo o que eu tiver de fazer (onde tocar, o que copiar, o que significa cada termo). Muitas vezes estou só com o telemóvel.
- No fim de cada entrega: resumo curto do que foi feito + **link de pré-visualização da Vercel** para eu ver no telemóvel.

## Antes de começar
1. Ler `materiais/BRIEFING.md` (se existir): anúncio original, proposta enviada, valor e prazo combinados, mensagem do cliente.
2. Ver os ficheiros em `materiais/` (logótipo, textos, fotos do cliente).
3. Se faltar informação essencial, perguntar **uma vez**, com tudo o que falta numa só mensagem. Para o resto, escolher valores sensatos e dizer quais foram.

## Stack
- Next.js (App Router, TypeScript) + Tailwind CSS. Deploy na Vercel (equipa GG Studio, projeto ligado a este repositório).
- Sites simples: sem base de dados, sem login, sem dependências desnecessárias.
- Formulários: enviar por email/WhatsApp/Google Sheets conforme o briefing; nunca guardar dados pessoais sem necessidade.

## Qualidade
- Usar a skill `frontend-design` para qualquer interface: o resultado não pode parecer um modelo genérico.
- Mobile-first; testar a largura de telemóvel (360–414 px) antes de entregar.
- Acessibilidade básica: contraste, `alt` nas imagens, labels nos formulários, navegação por teclado.
- Performance: imagens com `next/image`, fontes com `next/font`, sem bibliotecas pesadas para coisas simples.
- Sites simples dispensam TDD; lógica (calculadoras, regras de preço, validações) leva testes.
- Antes de entregar a um cliente: correr `/code-review` e corrigir o que for importante.

## Conteúdo e idioma
- Textos na língua do cliente: **PT-PT** para Portugal, **PT-BR** para o Brasil, inglês/espanhol conforme o briefing. Nunca misturar PT-PT e PT-BR.
- Sites para a UE: aviso de cookies (só se houver cookies não essenciais), política de privacidade, consentimento explícito nos formulários (RGPD).
- Demos de portfólio: conteúdo **fictício** (empresa, nomes, moradas, telefones inventados e claramente de exemplo), imagens livres de direitos, aviso discreto "Projeto de demonstração — GG Studio".

## Regras que nunca se quebram
- Nunca fazer commit de `.env*` (exceto `.env.example`), chaves ou palavras-passe. Segredos só nas variáveis da Vercel.
- Nunca reutilizar código, textos ou imagens de **outro cliente**. O que for genérico e reutilizável volta ao `modelo-site`, nunca de cliente para cliente.
- Nunca pôr contactos do Guilherme (email, telefone, WhatsApp) em demos ou pré-visualizações enviadas pelas plataformas — as plataformas proíbem levar o cliente para fora.
- Pré-visualizações para clientes: `noindex` até à entrega final.

## Checklist de entrega
- [ ] Briefing cumprido ponto por ponto (listar no resumo final)
- [ ] Testado em telemóvel e computador
- [ ] Sem erros na consola nem no `npm run build`
- [ ] Textos revistos (idioma certo, sem "lorem ipsum")
- [ ] RGPD (se UE): privacidade + consentimento nos formulários
- [ ] Link da Vercel enviado ao Guilherme
