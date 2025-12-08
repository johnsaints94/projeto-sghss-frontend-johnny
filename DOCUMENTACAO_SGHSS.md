# Documentação do Projeto SGHSS - Sistema de Gestão Hospitalar e de Serviços de Saúde

**Aluno:** [Seu Nome Aqui]
**Curso:** Análise e Desenvolvimento de Sistemas
**Disciplina:** Projeto Multidisciplinar
**Data:** 07/12/2025

---

## 1. Introdução

### 1.1 Contexto
O projeto SGHSS (Sistema de Gestão Hospitalar e de Serviços de Saúde) foi desenvolvido para atender às necessidades da instituição **VidaPlus**, visando modernizar e integrar os processos de gestão hospitalar. O sistema busca solucionar problemas relacionados ao agendamento de consultas, gestão de prontuários eletrônicos, controle de leitos e suprimentos, além de oferecer funcionalidades de telemedicina.

### 1.2 Objetivo
O objetivo principal deste projeto é desenvolver a interface Front-end de um sistema web responsivo, intuitivo e seguro, que permita a interação eficiente entre os três principais atores: Pacientes, Profissionais de Saúde e Administradores. O foco foi na usabilidade, acessibilidade e conformidade com a LGPD.

---

## 2. Requisitos do Sistema

O projeto contempla os requisitos funcionais e não funcionais essenciais para a operação do sistema, conforme o roteiro da instituição VidaPlus.

### 2.1 Requisitos Funcionais (RF)
*   **RF001 - Gestão de Usuários:** O sistema permite o cadastro e autenticação de diferentes perfis de usuários (Paciente, Profissional, Admin).
*   **RF002 - Agendamento de Consultas:** Pacientes podem visualizar horários disponíveis e agendar consultas; Profissionais podem visualizar sua agenda diária.
*   **RF003 - Prontuário Eletrônico:** Profissionais de saúde podem acessar e registrar informações no histórico clínico dos pacientes.
*   **RF004 - Telemedicina:** Funcionalidade para realização de consultas remotas via vídeo.
*   **RF005 - Gestão de Recursos:** Administradores podem gerenciar a ocupação de leitos e o estoque de suprimentos.

### 2.2 Requisitos Não Funcionais (RNF)
*   **RNF001 - Responsividade:** A interface adapta-se a diferentes tamanhos de tela (desktop, tablet, mobile) utilizando o framework Bootstrap 5.
*   **RNF002 - Usabilidade:** Interface limpa e intuitiva, com feedback visual para ações do usuário (toasts, modais).
*   **RNF003 - Segurança:** Proteção de rotas (redirecionamento se não autenticado) e conformidade com a LGPD (aviso de privacidade).

---

## 3. Modelagem e Arquitetura

### 3.1 Arquitetura Frontend
O projeto foi desenvolvido utilizando uma arquitetura baseada em páginas HTML5, estilização com CSS3 e lógica de interação com JavaScript (ES6+).
*   **Framework CSS:** Bootstrap 5.3.2 para layout responsivo e componentes de interface.
*   **Ícones:** Bootstrap Icons.
*   **Estrutura de Pastas:**
    *   `/css`: Estilos personalizados.
    *   `/js`: Lógica principal (`main.js`) contendo dados mockados e funções de controle.
    *   `/pages`: Páginas HTML organizadas por perfil (`admin`, `paciente`, `profissional`).

### 3.2 Dados Mockados
Para fins de prototipagem funcional sem backend ativo, foi implementada uma camada de dados simulados (Mock Data) no arquivo `main.js`. Isso inclui arrays de objetos para `usuarios`, `consultas`, `historicoClinico`, `leitos` e `suprimentos`, permitindo testar fluxos completos de CRUD e visualização.

---

## 4. Implementação

A implementação focou na criação de uma experiência de usuário fluida. Abaixo, os principais módulos desenvolvidos:

### 4.1 Módulo de Autenticação
*   **Login:** Validação de credenciais contra a base mockada e redirecionamento baseado no tipo de usuário.
*   **Cadastro:** Formulário com validação de CPF e e-mail, criando novos registros na memória da sessão.

### 4.2 Módulo do Paciente
*   **Dashboard:** Visão geral de próximas consultas e notificações.
*   **Agendamento:** Interface para marcar novas consultas, validando datas futuras.
*   **Histórico:** Linha do tempo visual com registros médicos passados.

### 4.3 Módulo do Profissional
*   **Prontuário:** Busca de pacientes e visualização detalhada do histórico.
*   **Prescrição:** Formulário para emissão de receitas médicas.

### 4.4 Módulo Administrativo
*   **Gestão de Leitos:** Visualização gráfica do status dos leitos (Livre, Ocupado, Manutenção).
*   **Suprimentos:** Tabela com indicadores visuais de baixo estoque.

**Repositório do Projeto:** [Inserir Link do Repositório GitHub Aqui]
**Link de Publicação (Deploy):** [Inserir Link da Página Publicada Aqui (ex: Vercel, GitHub Pages)]

---

## 5. Plano de Testes e Qualidade

Foram realizados testes manuais funcionais para validar os fluxos principais do sistema.

### 5.1 Casos de Teste Executados

| ID | Caso de Teste | Entrada | Resultado Esperado | Resultado Obtido |
| :--- | :--- | :--- | :--- | :--- |
| **CT001** | Login com credenciais válidas | E-mail: `paciente@email.com`, Senha: `123456` | Redirecionamento para Dashboard do Paciente | **Sucesso** |
| **CT002** | Login com senha inválida | E-mail: `paciente@email.com`, Senha: `000000` | Mensagem de erro "Email/CPF ou senha incorretos" | **Sucesso** |
| **CT003** | Agendar Consulta | Data futura, Especialidade: Cardiologia | Mensagem de sucesso e atualização da lista | **Sucesso** |
| **CT004** | Cadastro de Paciente | Dados válidos, CPF novo | Mensagem de sucesso e redirecionamento para Login | **Sucesso** |
| **CT005** | Responsividade Mobile | Acessar em tela < 576px | Menu lateral colapsável e grid ajustado | **Sucesso** |

---

## 6. Conclusão

O desenvolvimento do projeto SGHSS permitiu aplicar na prática os conceitos de desenvolvimento web frontend, arquitetura de informação e usabilidade. O sistema atende aos requisitos propostos, oferecendo uma interface funcional e amigável para todos os perfis de usuário. A utilização de dados mockados possibilitou a validação completa dos fluxos de navegação e regras de negócio no lado do cliente, preparando o terreno para uma futura integração com API Backend.

---

## 7. Referências

1.  **Bootstrap Documentation**. Disponível em: https://getbootstrap.com/docs/5.3/. Acesso em: Dez. 2025.
2.  **MDN Web Docs**. JavaScript e HTML5. Disponível em: https://developer.mozilla.org/. Acesso em: Dez. 2025.
3.  **Orientações Unificadas para o Desenvolvimento do Projeto Multidisciplinar**. Uninter, 2025.
