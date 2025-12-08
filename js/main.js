/*
 * VidaPlus - Sistema de Gestão Hospitalar
 * Arquivo JavaScript Principal
 * Desenvolvido para o Projeto Multidisciplinar
 */

// =============================================
// DADOS MOCKADOS (SIMULANDO BANCO DE DADOS)
// =============================================

// Usuarios do sistema para simular login
const usuarios = [
    {
        id: 1,
        nome: "Maria Silva Santos",
        email: "paciente@email.com",
        cpf: "123.456.789-00",
        senha: "123456",
        tipo: "paciente",
        telefone: "(11) 99999-1234",
        dataNascimento: "1985-03-15"
    },
    {
        id: 2,
        nome: "Dr. João Pedro Oliveira",
        email: "medico@vidaplus.com",
        cpf: "987.654.321-00",
        senha: "123456",
        tipo: "profissional",
        especialidade: "Cardiologia",
        crm: "CRM/SP 123456"
    },
    {
        id: 3,
        nome: "Ana Carolina Admin",
        email: "admin@vidaplus.com",
        cpf: "111.222.333-44",
        senha: "123456",
        tipo: "admin",
        cargo: "Gerente Administrativo"
    }
];

// Consultas agendadas
const consultas = [
    {
        id: 1,
        pacienteId: 1,
        profissionalId: 2,
        data: "2026-12-15",
        horario: "09:00",
        especialidade: "Cardiologia",
        status: "confirmado",
        unidade: "Hospital Central"
    },
    {
        id: 2,
        pacienteId: 1,
        profissionalId: 2,
        data: "2026-12-20",
        horario: "14:30",
        especialidade: "Cardiologia",
        status: "pendente",
        unidade: "Clínica Norte"
    },
    {
        id: 3,
        pacienteId: 1,
        profissionalId: 2,
        data: "2026-11-10",
        horario: "10:00",
        especialidade: "Cardiologia",
        status: "realizado",
        unidade: "Hospital Central"
    }
];

// Historico clinico
const historicoClinico = [
    {
        id: 1,
        pacienteId: 1,
        tipo: "consulta",
        data: "2026-11-10",
        titulo: "Consulta Cardiológica",
        descricao: "Paciente apresentou pressão arterial controlada. Mantido tratamento atual.",
        profissional: "Dr. João Pedro Oliveira"
    },
    {
        id: 2,
        pacienteId: 1,
        tipo: "exame",
        data: "2026-11-05",
        titulo: "Eletrocardiograma",
        descricao: "Resultado dentro dos parâmetros normais. Sem alterações significativas.",
        profissional: "Dr. João Pedro Oliveira"
    },
    {
        id: 3,
        pacienteId: 1,
        tipo: "procedimento",
        data: "2026-10-20",
        titulo: "Coleta de Sangue",
        descricao: "Hemograma completo e perfil lipídico. Resultados disponíveis em 3 dias.",
        profissional: "Enf. Patricia Lima"
    }
];

// Notificacoes
const notificacoes = [
    {
        id: 1,
        usuarioId: 1,
        tipo: "consulta",
        titulo: "Lembrete de Consulta",
        mensagem: "Sua consulta com Dr. João Pedro está agendada para amanhã às 09:00.",
        data: "2026-12-14",
        lida: false
    },
    {
        id: 2,
        usuarioId: 1,
        tipo: "exame",
        titulo: "Resultado Disponível",
        mensagem: "O resultado do seu exame de sangue já está disponível.",
        data: "2026-12-10",
        lida: true
    },
    {
        id: 3,
        usuarioId: 1,
        tipo: "alerta",
        titulo: "Atualização Cadastral",
        mensagem: "Por favor, atualize seus dados cadastrais para manter seu prontuário em dia.",
        data: "2026-12-08",
        lida: false
    }
];

// Leitos do hospital
const leitos = [
    { id: 1, numero: "101", ala: "A", status: "ocupado", paciente: "Carlos Mendes" },
    { id: 2, numero: "102", ala: "A", status: "livre", paciente: null },
    { id: 3, numero: "103", ala: "A", status: "manutencao", paciente: null },
    { id: 4, numero: "104", ala: "A", status: "ocupado", paciente: "Fernanda Costa" },
    { id: 5, numero: "201", ala: "B", status: "livre", paciente: null },
    { id: 6, numero: "202", ala: "B", status: "ocupado", paciente: "Roberto Lima" },
    { id: 7, numero: "203", ala: "B", status: "livre", paciente: null },
    { id: 8, numero: "204", ala: "B", status: "ocupado", paciente: "Julia Santos" },
    { id: 9, numero: "301", ala: "UTI", status: "ocupado", paciente: "Antonio Pereira" },
    { id: 10, numero: "302", ala: "UTI", status: "livre", paciente: null }
];

// Suprimentos
const suprimentos = [
    { id: 1, nome: "Luvas Descartáveis (cx)", quantidade: 150, minimo: 50, unidade: "caixa" },
    { id: 2, nome: "Máscaras Cirúrgicas (cx)", quantidade: 30, minimo: 100, unidade: "caixa" },
    { id: 3, nome: "Álcool Gel 500ml", quantidade: 80, minimo: 30, unidade: "unidade" },
    { id: 4, nome: "Seringas 10ml (cx)", quantidade: 45, minimo: 40, unidade: "caixa" },
    { id: 5, nome: "Gaze Estéril (pct)", quantidade: 200, minimo: 80, unidade: "pacote" },
    { id: 6, nome: "Esparadrapo", quantidade: 25, minimo: 50, unidade: "rolo" }
];

// =============================================
// FUNCOES DE AUTENTICACAO
// =============================================

// Funcao para realizar login
function realizarLogin(event) {
    event.preventDefault();
    
    const tipoUsuario = document.getElementById('tipoUsuario').value;
    const emailCpf = document.getElementById('emailCpf').value;
    const senha = document.getElementById('senha').value;
    
    // Validacao basica
    if (!tipoUsuario || !emailCpf || !senha) {
        mostrarErro('Por favor, preencha todos os campos.');
        return false;
    }
    
    // Busca usuario no array de usuarios mockados
    const usuario = usuarios.find(u => 
        (u.email === emailCpf || u.cpf === emailCpf) && 
        u.senha === senha && 
        u.tipo === tipoUsuario
    );
    
    if (usuario) {
        // Salva usuario logado no localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        
        // Redireciona para o dashboard correspondente
        switch(usuario.tipo) {
            case 'paciente':
                window.location.href = 'pages/paciente/dashboard.html';
                break;
            case 'profissional':
                window.location.href = 'pages/profissional/dashboard.html';
                break;
            case 'admin':
                window.location.href = 'pages/admin/dashboard.html';
                break;
        }
    } else {
        mostrarErro('Email/CPF, senha ou tipo de usuário incorretos.');
    }
    
    return false;
}

// Funcao para mostrar mensagem de erro
function mostrarErro(mensagem) {
    const toastErro = document.getElementById('toastErro');
    const mensagemErro = document.getElementById('mensagemErro');
    
    if (toastErro && mensagemErro) {
        mensagemErro.textContent = mensagem;
        const toast = new bootstrap.Toast(toastErro);
        toast.show();
    } else {
        alert(mensagem);
    }
}

// Funcao para mostrar/esconder senha
function toggleSenha() {
    const inputSenha = document.getElementById('senha');
    const iconeSenha = document.getElementById('iconeSenha');
    
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        iconeSenha.classList.remove('bi-eye');
        iconeSenha.classList.add('bi-eye-slash');
    } else {
        inputSenha.type = 'password';
        iconeSenha.classList.remove('bi-eye-slash');
        iconeSenha.classList.add('bi-eye');
    }
}

// Funcao para fazer logout
function fazerLogout() {
    localStorage.removeItem('usuarioLogado');
    // Redireciona para a pagina de login
    window.location.href = getBasePath() + 'index.html';
}

// Funcao para obter usuario logado
function getUsuarioLogado() {
    const usuario = localStorage.getItem('usuarioLogado');
    return usuario ? JSON.parse(usuario) : null;
}

// Funcao para verificar se usuario esta logado
function verificarAutenticacao() {
    const usuario = getUsuarioLogado();
    if (!usuario) {
        window.location.href = getBasePath() + 'index.html';
        return false;
    }
    return true;
}

// Funcao para obter o caminho base (resolve problema de paths relativos)
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/pages/paciente/') || path.includes('/pages/profissional/') || path.includes('/pages/admin/')) {
        return '../../';
    } else if (path.includes('/pages/')) {
        return '../';
    }
    return '';
}

// =============================================
// FUNCOES DE VALIDACAO
// =============================================

// Validar CPF (simplificado)
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    
    if (cpf.length !== 11) return false;
    
    // Verifica se todos os digitos sao iguais
    if (/^(\d)\1+$/.test(cpf)) return false;
    
    return true;
}

// Validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validar senha (minimo 6 caracteres)
function validarSenha(senha) {
    return senha.length >= 6;
}

// Formatar CPF
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
}

// Formatar telefone
function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
    telefone = telefone.replace(/(\d)(\d{4})$/, '$1-$2');
    return telefone;
}

// =============================================
// FUNCOES DO MENU LATERAL
// =============================================

// Toggle do menu lateral
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    if (sidebar) {
        sidebar.classList.toggle('show');
    }
    if (overlay) {
        overlay.classList.toggle('show');
    }
}

// Fechar sidebar ao clicar no overlay
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    if (sidebar) {
        sidebar.classList.remove('show');
    }
    if (overlay) {
        overlay.classList.remove('show');
    }
}

// =============================================
// FUNCOES DE INTERFACE
// =============================================

// Atualizar informacoes do usuario na interface
function atualizarInfoUsuario() {
    const usuario = getUsuarioLogado();
    
    if (usuario) {
        // Atualiza nome do usuario onde existir
        const nomeElements = document.querySelectorAll('.usuario-nome');
        nomeElements.forEach(el => {
            el.textContent = usuario.nome;
        });
        
        // Atualiza iniciais do avatar
        const avatarElements = document.querySelectorAll('.user-avatar');
        avatarElements.forEach(el => {
            const iniciais = usuario.nome.split(' ').map(n => n[0]).join('').substring(0, 2);
            el.textContent = iniciais.toUpperCase();
        });
        
        // Atualiza saudacao
        const saudacaoElement = document.querySelector('.saudacao');
        if (saudacaoElement) {
            const hora = new Date().getHours();
            let saudacao = 'Bom dia';
            if (hora >= 12 && hora < 18) saudacao = 'Boa tarde';
            else if (hora >= 18) saudacao = 'Boa noite';
            
            const primeiroNome = usuario.nome.split(' ')[0];
            saudacaoElement.textContent = `${saudacao}, ${primeiroNome}!`;
        }
    }
}

// Formatar data para exibicao
function formatarData(dataString) {
    const data = new Date(dataString + 'T00:00:00');
    return data.toLocaleDateString('pt-BR');
}

// Formatar data e hora
function formatarDataHora(dataString, horaString) {
    const data = new Date(dataString + 'T00:00:00');
    return `${data.toLocaleDateString('pt-BR')} às ${horaString}`;
}

// =============================================
// FUNCOES DE CARREGAMENTO DE DADOS
// =============================================

// Carregar proximas consultas do paciente
function carregarProximasConsultas() {
    const usuario = getUsuarioLogado();
    const container = document.getElementById('proximasConsultas');
    
    if (!container || !usuario) return;
    
    const consultasFuturas = consultas.filter(c => 
        c.pacienteId === usuario.id && 
        new Date(c.data) >= new Date() &&
        c.status !== 'cancelado'
    ).slice(0, 3);
    
    if (consultasFuturas.length === 0) {
        container.innerHTML = '<p class="text-muted">Nenhuma consulta agendada.</p>';
        return;
    }
    
    let html = '';
    consultasFuturas.forEach(consulta => {
        const profissional = usuarios.find(u => u.id === consulta.profissionalId);
        html += `
            <div class="d-flex justify-content-between align-items-center p-3 bg-light rounded mb-2">
                <div>
                    <strong>${consulta.especialidade}</strong>
                    <br>
                    <small class="text-muted">${profissional ? profissional.nome : 'Profissional'}</small>
                </div>
                <div class="text-end">
                    <span class="status-badge ${consulta.status}">${consulta.status}</span>
                    <br>
                    <small>${formatarDataHora(consulta.data, consulta.horario)}</small>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Carregar historico clinico
function carregarHistoricoClinico() {
    const usuario = getUsuarioLogado();
    const container = document.getElementById('historicoTimeline');
    
    if (!container || !usuario) return;
    
    const historico = historicoClinico.filter(h => h.pacienteId === usuario.id);
    
    if (historico.length === 0) {
        container.innerHTML = '<p class="text-muted">Nenhum registro no histórico.</p>';
        return;
    }
    
    let html = '<div class="timeline">';
    historico.forEach(item => {
        html += `
            <div class="timeline-item ${item.tipo}">
                <div class="timeline-date">${formatarData(item.data)}</div>
                <div class="timeline-title">${item.titulo}</div>
                <div class="timeline-content">${item.descricao}</div>
                <small class="text-muted">${item.profissional}</small>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

// Carregar notificacoes
function carregarNotificacoes() {
    const usuario = getUsuarioLogado();
    const container = document.getElementById('listaNotificacoes');
    
    if (!container || !usuario) return;
    
    const notifs = notificacoes.filter(n => n.usuarioId === usuario.id);
    
    if (notifs.length === 0) {
        container.innerHTML = '<p class="text-muted text-center py-4">Nenhuma notificação.</p>';
        return;
    }
    
    let html = '';
    notifs.forEach(notif => {
        html += `
            <div class="notification-item ${notif.lida ? '' : 'unread'}">
                <div class="notification-icon ${notif.tipo}">
                    <i class="bi bi-${getIconeNotificacao(notif.tipo)}"></i>
                </div>
                <div class="notification-content">
                    <div class="notification-title">${notif.titulo}</div>
                    <div class="notification-text">${notif.mensagem}</div>
                    <div class="notification-time">${formatarData(notif.data)}</div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Obter icone para notificacao
function getIconeNotificacao(tipo) {
    switch(tipo) {
        case 'consulta': return 'calendar-check';
        case 'exame': return 'file-medical';
        case 'alerta': return 'exclamation-triangle';
        default: return 'bell';
    }
}

// Carregar leitos (para admin)
function carregarLeitos() {
    const container = document.getElementById('gridLeitos');
    
    if (!container) return;
    
    let html = '';
    leitos.forEach(leito => {
        html += `
            <div class="leito-item ${leito.status}" onclick="verDetalhesLeito(${leito.id})">
                <div class="leito-numero">${leito.numero}</div>
                <div class="leito-status">${leito.status.charAt(0).toUpperCase() + leito.status.slice(1)}</div>
                ${leito.paciente ? `<small class="text-muted">${leito.paciente}</small>` : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Atualiza contadores
    atualizarContadoresLeitos();
}

// Atualizar contadores de leitos
function atualizarContadoresLeitos() {
    const livres = leitos.filter(l => l.status === 'livre').length;
    const ocupados = leitos.filter(l => l.status === 'ocupado').length;
    const manutencao = leitos.filter(l => l.status === 'manutencao').length;
    
    const contadorLivres = document.getElementById('contadorLivres');
    const contadorOcupados = document.getElementById('contadorOcupados');
    const contadorManutencao = document.getElementById('contadorManutencao');
    
    if (contadorLivres) contadorLivres.textContent = livres;
    if (contadorOcupados) contadorOcupados.textContent = ocupados;
    if (contadorManutencao) contadorManutencao.textContent = manutencao;
}

// Carregar suprimentos (para admin)
function carregarSuprimentos() {
    const container = document.getElementById('tabelaSuprimentos');
    
    if (!container) return;
    
    let html = '';
    suprimentos.forEach(item => {
        const baixoEstoque = item.quantidade < item.minimo;
        html += `
            <tr class="${baixoEstoque ? 'table-warning' : ''}">
                <td>${item.nome}</td>
                <td>${item.quantidade} ${item.unidade}s</td>
                <td>${item.minimo} ${item.unidade}s</td>
                <td>
                    ${baixoEstoque ? 
                        '<span class="badge bg-danger">Baixo Estoque</span>' : 
                        '<span class="badge bg-success">Normal</span>'
                    }
                </td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="editarSuprimento(${item.id})">
                        <i class="bi bi-pencil"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    
    container.innerHTML = html;
}

// =============================================
// FUNCOES DE AGENDAMENTO
// =============================================

// Agendar nova consulta
function agendarConsulta(event) {
    event.preventDefault();
    
    const especialidade = document.getElementById('especialidade').value;
    const data = document.getElementById('dataConsulta').value;
    const horario = document.getElementById('horarioConsulta').value;
    const unidade = document.getElementById('unidade').value;
    
    if (!especialidade || !data || !horario || !unidade) {
        mostrarErro('Por favor, preencha todos os campos.');
        return false;
    }
    
    // Validar se a data e futura
    if (new Date(data) < new Date()) {
        mostrarErro('A data da consulta deve ser futura.');
        return false;
    }
    
    const usuario = getUsuarioLogado();
    
    // Adiciona nova consulta ao array
    const novaConsulta = {
        id: consultas.length + 1,
        pacienteId: usuario.id,
        profissionalId: 2,
        data: data,
        horario: horario,
        especialidade: especialidade,
        status: 'pendente',
        unidade: unidade
    };
    
    consultas.push(novaConsulta);
    
    // Mostra mensagem de sucesso
    alert('Consulta agendada com sucesso! Aguarde a confirmação.');
    
    // Recarrega lista de consultas
    carregarConsultasAgendadas();
    
    // Limpa formulario
    event.target.reset();
    
    return false;
}

// Carregar consultas agendadas
function carregarConsultasAgendadas() {
    const usuario = getUsuarioLogado();
    const container = document.getElementById('consultasAgendadas');
    
    if (!container || !usuario) return;
    
    const minhasConsultas = consultas.filter(c => c.pacienteId === usuario.id);
    
    if (minhasConsultas.length === 0) {
        container.innerHTML = '<p class="text-muted">Nenhuma consulta agendada.</p>';
        return;
    }
    
    let html = '<div class="table-responsive"><table class="table">';
    html += `
        <thead>
            <tr>
                <th>Especialidade</th>
                <th>Data/Hora</th>
                <th>Unidade</th>
                <th>Status</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    minhasConsultas.forEach(consulta => {
        html += `
            <tr>
                <td>${consulta.especialidade}</td>
                <td>${formatarDataHora(consulta.data, consulta.horario)}</td>
                <td>${consulta.unidade}</td>
                <td><span class="status-badge ${consulta.status}">${consulta.status}</span></td>
                <td>
                    ${consulta.status !== 'cancelado' && consulta.status !== 'realizado' ? 
                        `<button class="btn btn-sm btn-outline-danger" onclick="cancelarConsulta(${consulta.id})">
                            Cancelar
                        </button>` : '-'
                    }
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table></div>';
    container.innerHTML = html;
}

// Cancelar consulta
function cancelarConsulta(id) {
    if (confirm('Tem certeza que deseja cancelar esta consulta?')) {
        const consulta = consultas.find(c => c.id === id);
        if (consulta) {
            consulta.status = 'cancelado';
            carregarConsultasAgendadas();
            alert('Consulta cancelada com sucesso.');
        }
    }
}

// =============================================
// FUNCOES DA TELECONSULTA
// =============================================

// Iniciar teleconsulta
function iniciarTeleconsulta() {
    const videoContainer = document.querySelector('.video-placeholder');
    if (videoContainer) {
        videoContainer.innerHTML = `
            <i class="bi bi-person-video3"></i>
            <p>Conectando...</p>
            <div class="spinner-border text-light mt-2" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
        `;
        
        // Simula conexao apos 2 segundos
        setTimeout(() => {
            videoContainer.innerHTML = `
                <i class="bi bi-person-video3"></i>
                <p>Teleconsulta em andamento</p>
                <small>Aguardando o profissional...</small>
            `;
        }, 2000);
    }
}

// Encerrar teleconsulta
function encerrarTeleconsulta() {
    if (confirm('Tem certeza que deseja encerrar a teleconsulta?')) {
        window.location.href = 'dashboard.html';
    }
}

// Toggle do microfone
function toggleMicrofone() {
    const btn = document.getElementById('btnMicrofone');
    const icon = btn.querySelector('i');
    
    btn.classList.toggle('btn-secondary');
    btn.classList.toggle('btn-danger');
    
    if (icon.classList.contains('bi-mic-fill')) {
        icon.classList.remove('bi-mic-fill');
        icon.classList.add('bi-mic-mute-fill');
    } else {
        icon.classList.remove('bi-mic-mute-fill');
        icon.classList.add('bi-mic-fill');
    }
}

// Toggle da camera
function toggleCamera() {
    const btn = document.getElementById('btnCamera');
    const icon = btn.querySelector('i');
    
    btn.classList.toggle('btn-secondary');
    btn.classList.toggle('btn-danger');
    
    if (icon.classList.contains('bi-camera-video-fill')) {
        icon.classList.remove('bi-camera-video-fill');
        icon.classList.add('bi-camera-video-off-fill');
    } else {
        icon.classList.remove('bi-camera-video-off-fill');
        icon.classList.add('bi-camera-video-fill');
    }
}

// Enviar mensagem no chat
function enviarMensagem(event) {
    event.preventDefault();
    
    const input = document.getElementById('mensagemChat');
    const mensagem = input.value.trim();
    
    if (!mensagem) return false;
    
    const container = document.getElementById('chatMensagens');
    
    const novaMensagem = document.createElement('div');
    novaMensagem.className = 'chat-message sent';
    novaMensagem.textContent = mensagem;
    
    container.appendChild(novaMensagem);
    container.scrollTop = container.scrollHeight;
    
    input.value = '';
    
    return false;
}

// =============================================
// FUNCOES DO PROFISSIONAL
// =============================================

// Carregar agenda do profissional
function carregarAgendaProfissional() {
    const usuario = getUsuarioLogado();
    const container = document.getElementById('agendaHoje');
    
    if (!container || !usuario) return;
    
    const hoje = new Date().toISOString().split('T')[0];
    const consultasHoje = consultas.filter(c => 
        c.profissionalId === usuario.id && 
        c.data === hoje
    );
    
    if (consultasHoje.length === 0) {
        container.innerHTML = '<p class="text-muted">Nenhuma consulta para hoje.</p>';
        return;
    }
    
    let html = '';
    consultasHoje.forEach(consulta => {
        const paciente = usuarios.find(u => u.id === consulta.pacienteId);
        html += `
            <div class="d-flex justify-content-between align-items-center p-3 border-bottom">
                <div>
                    <strong>${consulta.horario}</strong> - ${paciente ? paciente.nome : 'Paciente'}
                    <br>
                    <small class="text-muted">${consulta.especialidade}</small>
                </div>
                <span class="status-badge ${consulta.status}">${consulta.status}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Buscar paciente para prontuario
function buscarPaciente(event) {
    event.preventDefault();
    
    const termo = document.getElementById('buscaPaciente').value.toLowerCase();
    const container = document.getElementById('resultadoBusca');
    
    if (!termo) {
        container.innerHTML = '';
        return false;
    }
    
    const pacientesEncontrados = usuarios.filter(u => 
        u.tipo === 'paciente' && 
        (u.nome.toLowerCase().includes(termo) || u.cpf.includes(termo))
    );
    
    if (pacientesEncontrados.length === 0) {
        container.innerHTML = '<p class="text-muted">Nenhum paciente encontrado.</p>';
        return false;
    }
    
    let html = '<div class="list-group">';
    pacientesEncontrados.forEach(paciente => {
        html += `
            <a href="#" class="list-group-item list-group-item-action" onclick="selecionarPaciente(${paciente.id})">
                <strong>${paciente.nome}</strong>
                <br>
                <small class="text-muted">CPF: ${paciente.cpf}</small>
            </a>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
    return false;
}

// Selecionar paciente para visualizar prontuario
function selecionarPaciente(id) {
    const paciente = usuarios.find(u => u.id === id);
    const container = document.getElementById('prontuarioPaciente');
    
    if (!paciente || !container) return;
    
    const historico = historicoClinico.filter(h => h.pacienteId === id);
    
    let html = `
        <div class="card mb-4">
            <div class="card-header">
                <h5 class="mb-0">Dados do Paciente</h5>
            </div>
            <div class="card-body">
                <p><strong>Nome:</strong> ${paciente.nome}</p>
                <p><strong>CPF:</strong> ${paciente.cpf}</p>
                <p><strong>Data de Nascimento:</strong> ${formatarData(paciente.dataNascimento)}</p>
                <p><strong>Telefone:</strong> ${paciente.telefone}</p>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Histórico Clínico</h5>
                <button class="btn btn-primary btn-sm" onclick="abrirModalRegistro(${id})">
                    <i class="bi bi-plus-lg"></i> Novo Registro
                </button>
            </div>
            <div class="card-body">
    `;
    
    if (historico.length === 0) {
        html += '<p class="text-muted">Nenhum registro no histórico.</p>';
    } else {
        html += '<div class="timeline">';
        historico.forEach(item => {
            html += `
                <div class="timeline-item ${item.tipo}">
                    <div class="timeline-date">${formatarData(item.data)}</div>
                    <div class="timeline-title">${item.titulo}</div>
                    <div class="timeline-content">${item.descricao}</div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += '</div></div>';
    
    container.innerHTML = html;
}

// =============================================
// FUNCOES DO ADMIN
// =============================================

// Carregar usuarios para gestao
function carregarUsuarios() {
    const container = document.getElementById('tabelaUsuarios');
    
    if (!container) return;
    
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <tr>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.cpf}</td>
                <td><span class="badge bg-${getBadgeTipoUsuario(usuario.tipo)}">${usuario.tipo}</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-primary me-1" onclick="editarUsuario(${usuario.id})">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="desativarUsuario(${usuario.id})">
                        <i class="bi bi-person-x"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    
    container.innerHTML = html;
}

// Obter cor do badge por tipo de usuario
function getBadgeTipoUsuario(tipo) {
    switch(tipo) {
        case 'paciente': return 'info';
        case 'profissional': return 'success';
        case 'admin': return 'primary';
        default: return 'secondary';
    }
}

// Filtrar tabela
function filtrarTabela(inputId, tabelaId) {
    const input = document.getElementById(inputId);
    const tabela = document.getElementById(tabelaId);
    
    if (!input || !tabela) return;
    
    const termo = input.value.toLowerCase();
    const linhas = tabela.querySelectorAll('tr');
    
    linhas.forEach(linha => {
        const texto = linha.textContent.toLowerCase();
        linha.style.display = texto.includes(termo) ? '' : 'none';
    });
}

// =============================================
// FUNCOES DE CADASTRO
// =============================================

// Realizar cadastro de novo usuario
function realizarCadastro(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const tipoUsuario = document.getElementById('tipoUsuario').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const aceitaTermos = document.getElementById('aceitaTermos').checked;
    
    // Validacoes
    if (!validarCPF(cpf)) {
        mostrarErro('CPF inválido.');
        return false;
    }
    
    if (!validarEmail(email)) {
        mostrarErro('E-mail inválido.');
        return false;
    }
    
    if (!validarSenha(senha)) {
        mostrarErro('A senha deve ter no mínimo 6 caracteres.');
        return false;
    }
    
    if (senha !== confirmarSenha) {
        mostrarErro('As senhas não coincidem.');
        return false;
    }
    
    if (!aceitaTermos) {
        mostrarErro('Você deve aceitar os termos de uso.');
        return false;
    }
    
    // Verifica se email ou cpf ja existe
    const usuarioExistente = usuarios.find(u => u.email === email || u.cpf === cpf);
    if (usuarioExistente) {
        mostrarErro('E-mail ou CPF já cadastrado.');
        return false;
    }
    
    // Cria novo usuario
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome,
        cpf: cpf,
        email: email,
        telefone: telefone,
        dataNascimento: dataNascimento,
        tipo: tipoUsuario,
        senha: senha
    };
    
    usuarios.push(novoUsuario);
    
    alert('Cadastro realizado com sucesso! Faça login para acessar o sistema.');
    window.location.href = '../index.html';
    
    return false;
}

// Recuperar senha
function recuperarSenha(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    
    if (!validarEmail(email)) {
        mostrarErro('E-mail inválido.');
        return false;
    }
    
    // Simula envio de email
    alert('Se o e-mail estiver cadastrado, você receberá as instruções para recuperar sua senha.');
    window.location.href = '../index.html';
    
    return false;
}

// =============================================
// INICIALIZACAO
// =============================================

// Executar quando a pagina carregar
document.addEventListener('DOMContentLoaded', function() {
    // Atualiza informacoes do usuario
    atualizarInfoUsuario();
    
    // Carrega dados especificos de cada pagina
    carregarProximasConsultas();
    carregarHistoricoClinico();
    carregarNotificacoes();
    carregarConsultasAgendadas();
    carregarAgendaProfissional();
    carregarLeitos();
    carregarSuprimentos();
    carregarUsuarios();
    
    // Adiciona mascara ao CPF
    const inputCpf = document.getElementById('cpf');
    if (inputCpf) {
        inputCpf.addEventListener('input', function(e) {
            e.target.value = formatarCPF(e.target.value);
        });
    }
    
    // Adiciona mascara ao telefone
    const inputTelefone = document.getElementById('telefone');
    if (inputTelefone) {
        inputTelefone.addEventListener('input', function(e) {
            e.target.value = formatarTelefone(e.target.value);
        });
    }
});
