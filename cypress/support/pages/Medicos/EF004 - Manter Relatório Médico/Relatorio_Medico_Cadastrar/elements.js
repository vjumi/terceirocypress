//elementos da página para executar as ações

export const ELEMENTS = {
    //Botão Editar
    botaoEditar:'[ng-reflect-ngb-tooltip="Não é possivel editar um docum"] > .btn',
    
    //Acessar Menu Precrição
    botaoAcessarPrescricao:':nth-child(4) > .sub-menu > .d-flex > .ng-star-inserted',
    
    //campos de pesquisa da grid
    cpf: ':nth-child(2) > .form-control',
    localAtendimentoPesquisar: 'tr > :nth-child(3) > .form-control',
    situacao: '#field_inSituacao',
    
    //Validar Grid 
    colunaCPF:'tbody.ng-star-inserted > :nth-child(1) > :nth-child(2)',
    colunaLocalAtendimento:'tbody.ng-star-inserted > :nth-child(1) > :nth-child(3)',
    colunaSituacao:'tbody.ng-star-inserted > :nth-child(1) > :nth-child(4)',

    //Botões de acesso ao Novo relatório médico
    abaAcessarRelatorioMedico: '#ngb-nav-6',
    botaoNovoRelatorioMedico: '.m-bottom-25 > .btn',
    botaoSalvarRelatorioMedico: '#save-entity',

    //Campos cadastro Relatório Médico
    cpfPaciente: '.form-inline > .col-md-6 > .ng-autocomplete > .autocomplete-container > .input-container > .ng-valid',
    descricao: '.ck-content',
    localAtendimento:':nth-child(9) > .col-md-6 > .ng-autocomplete > .autocomplete-container > .input-container > .ng-valid',
    selecionarLocalAtendimento:'.item > div.ng-star-inserted > .ng-star-inserted',
    

}