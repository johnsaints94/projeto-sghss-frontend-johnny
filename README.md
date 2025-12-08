# VidaPlus - Sistema de Gestão Hospitalar

Este projeto é uma aplicação web frontend para gestão hospitalar, desenvolvida como parte do trabalho acadêmico da disciplina de Desenvolvimento Web.

## 📋 Sobre o Projeto

O **VidaPlus** é um sistema completo que simula as operações de um hospital, oferecendo interfaces específicas para três tipos de usuários:
1.  **Pacientes**: Agendamento de consultas, visualização de histórico, teleconsultas e notificações.
2.  **Profissionais de Saúde**: Gestão de agenda, prontuário eletrônico, prescrição de receitas e teleatendimento.
3.  **Administradores**: Gestão de usuários, controle de leitos, relatórios gerenciais e controle de suprimentos.

## 🚀 Tecnologias Utilizadas

*   **HTML5**: Estruturação semântica das páginas.
*   **CSS3**: Estilização personalizada e uso de variáveis CSS.
*   **Bootstrap 5**: Framework para layout responsivo e componentes de interface.
*   **JavaScript (Vanilla)**: Lógica de interação, manipulação do DOM e simulação de banco de dados (Mock Data).

## 📂 Estrutura de Pastas

```
Projeto Frontend Hospital/
├── css/
│   └── style.css          # Estilos globais e variáveis
├── js/
│   └── main.js            # Lógica principal e dados simulados
├── pages/
│   ├── admin/             # Páginas do Administrador
│   │   ├── dashboard.html
│   │   ├── leitos.html
│   │   ├── relatorios.html
│   │   ├── suprimentos.html
│   │   └── usuarios.html
│   ├── paciente/          # Páginas do Paciente
│   │   ├── agendamento.html
│   │   ├── dashboard.html
│   │   ├── historico.html
│   │   ├── notificacoes.html
│   │   └── teleconsulta.html
│   ├── profissional/      # Páginas do Profissional
│   │   ├── agenda.html
│   │   ├── dashboard.html
│   │   ├── prescricao.html
│   │   ├── prontuario.html
│   │   └── teleconsulta.html
│   └── recuperar-senha.html
├── index.html             # Página de Login
└── README.md              # Documentação do projeto
```

## ⚙️ Como Executar

1.  Baixe ou clone este repositório.
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` em seu navegador de preferência.

## 🔑 Credenciais de Acesso (Simulação)

Para testar as diferentes funcionalidades, utilize as seguintes credenciais na tela de login:

| Perfil | E-mail | Senha |
| :--- | :--- | :--- |
| **Paciente** | `paciente@email.com` | `123456` |
| **Profissional** | `medico@vidaplus.com` | `123456` |
| **Administrador** | `admin@vidaplus.com` | `123456` |

> **Nota:** Como este é um projeto frontend, não há persistência real de dados em banco de dados. As informações são armazenadas temporariamente ou simuladas via JavaScript.

## 👨‍💻 Autor

Desenvolvido por Johnny Santos.
