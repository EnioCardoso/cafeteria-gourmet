# Documentação atualizada — PIT II

## Visão da solução

O Grão Nobre é um e-commerce responsivo para cafeteria gourmet delivery. O MVP implementa as histórias prioritárias da PIT I: cadastro/login, vitrine, detalhes, carrinho, checkout com pagamento simulado, acompanhamento de pedido, CRUD de produtos e gerenciamento de status pelo administrador.

## Requisitos funcionais implementados

| ID | Requisito | Evidência |
|---|---|---|
| RF01 | Cadastrar e autenticar cliente | `login.html`, Supabase Auth |
| RF02 | Exibir somente produtos ativos | `index.html`, política RLS |
| RF03 | Detalhar produto e adicionar ao carrinho | `produto.html` |
| RF04 | Alterar/remover itens e recalcular total | `carrinho.html` |
| RF05 | Criar pedido com endereço e pagamento simulado | `checkout.html` |
| RF06 | Consultar status do pedido | `meus-pedidos.html` |
| RF07 | CRUD/inativação de produtos | `admin/produtos.html` |
| RF08 | Atualizar status: Recebido, Em preparo, Saiu, Concluído | `admin/pedidos.html` |

## Requisitos não funcionais atendidos

Interface responsiva; comunicação HTTPS quando publicada; persistência do carrinho em `localStorage`; autenticação e regras de acesso via Supabase; regras de integridade e chaves estrangeiras no PostgreSQL. Pagamento real, recuperação de senha, notificações e busca avançada permanecem fora do MVP por serem prioridades B/C da PIT I.

## Tecnologias para colar na tabela da atividade

| Campo | Preenchimento |
|---|---|
| Linguagem | HTML5, CSS3 e JavaScript (Vanilla JS) |
| Banco de Dados | PostgreSQL (Supabase) |
| Hospedagem | GitHub Pages |
| Plataforma | Web responsiva |
| Modo de Codificação | (X) Tradicional ( ) Low-code ( ) No-code |
| Repositório | `https://github.com/SEU_USUARIO/cafeteria-gourmet` |
| Solução | `https://SEU_USUARIO.github.io/cafeteria-gourmet/` |

## Melhorias em relação ao planejamento inicial

O modelo de dados foi normalizado com a entidade `itens_pedido`, que preserva preço e quantidade da compra. Também foram incluídas políticas de segurança RLS, perfis cliente/admin, validações de banco e persistência do carrinho. O pagamento foi explicitamente delimitado como simulado, compatível com o escopo acadêmico.
