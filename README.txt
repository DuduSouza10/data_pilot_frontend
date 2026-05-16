# Facilita Financeiro - Sidebar compartilhada

Arquivos principais:

- `sidebar.html`: menu lateral único para todas as páginas do sistema.
- `sidebar-shared.css`: estilos compartilhados da sidebar com ícones e botão de configurações no rodapé.
- `sidebar-loader.js`: carrega a sidebar automaticamente em cada página.

Páginas atualizadas:

- `home.html`
- `AI_page.html`
- `transactions.html`
- `accounts.html`
- `cash.html`
- `people.html`
- `reports.html`
- `settings.html`

Páginas sem sidebar mantidas:

- `login.html`
- `recover_password.html`

Importante:

Para o `fetch("sidebar.html")` funcionar, abra o projeto com servidor local, por exemplo no VS Code usando a extensão Live Server.
Não abra direto com duplo clique (`file:///`), porque alguns navegadores bloqueiam o carregamento do arquivo externo.
