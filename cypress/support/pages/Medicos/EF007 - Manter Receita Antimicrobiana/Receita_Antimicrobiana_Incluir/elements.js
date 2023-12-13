//elementos da pagina para executar as acoes

export const ELEMENTS = {

    //acesso
    BtnPrescricao: ':nth-child(4) > .sub-menu > .d-flex > .ng-star-inserted',
    BtnReceitaAntimicrobiana: ' #ngb-nav-3',
    btnNovaReceitaAntimicrobiana: '.m-bottom-25 > .btn',
    campoMedicamento: '.div3AccordionMedicamentos',
    BtnNovoLocal: '.col-md-3 > .btn',
    campoCadastro: '.ml-sm-auto',
    validarVisuallizar: '/consulta-documento/view-pdf',

    //questionario
    IncluirNovoPaciente: '.mt-4.ng-star-inserted > .btn',
    IncluirNomePaciente: '.form-inline > .col-md-6 > .ng-autocomplete > .autocomplete-container > .input-container > .ng-untouched',
    IncluirNomeLocal: ':nth-child(10) > .col-md-6 > .ng-autocomplete > .autocomplete-container > .input-container > .ng-untouched',
    CampoPaciente: '.modal-border-form',
    IncluirNomedoMedicamento: '.card-body > .row > :nth-child(1) > .ng-autocomplete > .autocomplete-container > .input-container > .ng-pristine',  
    incluirPodologia: '.row > :nth-child(2) > .ng-autocomplete > .autocomplete-container > .input-container > .ng-untouched',
    DuracaoMedicamento: '#duracao',
    incluirOutraDuracao: '#collapseMedicamento1 > .card-body > .row > :nth-child(3) > #duracao',
    IncluirDosagem: '#dose',
    OutraDosagem: '#collapseMedicamento1 > .card-body > .row > :nth-child(4) > #dose',
    visualizarNovaReceita: '#visualize',
    
    //botoes
    btnSalvarNovaReceita: '.divCollapseMedicamentoBotoes > .btn-primary',
    BtnMaisMedicamentos:'.mb-3 > .btn',
    BtnSalvarMaisMedicamentos: '#collapseMedicamento1 > .card-body > .row > .divCollapseMedicamentoBotoes > .btn-primary'


}