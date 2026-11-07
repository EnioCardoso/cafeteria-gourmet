# Grão Nobre — e-commerce de cafeteria

Aplicação acadêmica estática (HTML, CSS e JavaScript) com Supabase/PostgreSQL.

## Publicação em 15 minutos

1. Crie um projeto em [Supabase](https://supabase.com), abra **SQL Editor** e execute todo o arquivo `supabase.sql`.
2. Em **Authentication > Providers > Email**, desative temporariamente a confirmação de e-mail para facilitar a demonstração, ou confirme cada cadastro por e-mail.
3. Em **Project Settings > API**, copie a **Project URL** e a chave **anon public** para `js/supabase-client.js`. Nunca use a `service_role` no navegador.
4. Cadastre uma conta pelo site e, no SQL Editor, execute `update public.usuarios set perfil='admin' where email='SEU_EMAIL';` para liberar o painel `admin/`.
5. Crie um repositório GitHub chamado `cafeteria-gourmet`, envie esta pasta e habilite **Settings > Pages > Deploy from a branch > main / (root)**.
6. Aguarde o endereço `https://SEU_USUARIO.github.io/cafeteria-gourmet/` aparecer em Pages. Teste cadastro, pedido e status antes de entregar.

## Tecnologias

HTML5, CSS3, JavaScript vanilla, Supabase Auth, PostgreSQL/Supabase e GitHub Pages. Pagamento é simulado, propositalmente, para o escopo acadêmico.

## Estrutura

`index.html` catálogo; `produto.html` detalhes; `carrinho.html`; `checkout.html`; `meus-pedidos.html`; `login.html`; `admin/` administração; `supabase.sql` banco e dados iniciais.

## Segurança implementada

As tabelas usam Row Level Security: cada cliente vê apenas os próprios pedidos; somente o perfil `admin` altera produtos e status. A chave anon é apropriada para frontend porque as políticas do banco definem o acesso.
