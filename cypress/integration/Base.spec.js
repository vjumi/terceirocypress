/// <reference types="cypress"/>

import Paciente from '../support/pages/Medicos/EF002 - Manter Paciente/Pesquisar-Paciente'
import CadastroPaciente from '../support/pages/Medicos/EF002 - Manter Paciente/Cadastrar-Paciente'

import Login from '../support/pages/Medicos/EF016 - Realizar Login';

import PrescricaoConsultar from '../support/pages/Medicos/EF004 - Manter Relatório Médico/Pesquisar Prescricoes'
import PrescricaoCadastrar from '../support/pages/Medicos/EF004 - Manter Relatório Médico/Relatorio_Medico_Cadastrar'
import PrescricaoEditar from '../support/pages/Medicos/EF004 - Manter Relatório Médico/Relatorio_Medico_Editar'
import PrescricaoGerarRelatorioMedicoPDF from '../support/pages/Medicos/EF004 - Manter Relatório Médico/Relatorio_Medico_Gerar_PDF'
import PrescricaoExcluirRelatorioMedico from '../support/pages/Medicos/EF004 - Manter Relatório Médico/Relatorio_Medico_Excluir'
import PrescricaoVisualizarRelatorioMedico from '../support/pages/Medicos/EF004 - Manter Relatório Médico/Relatorio_Medico_Visualizar'
import PrescricaoWhatsApp from '../support/pages/Medicos/EF004 - Manter Relatório Médico/Relatorio_Medico_WhatsApp'

import LocalAtendimento from '../support/pages/Medicos/EF003 - Manter Local Atendimento'

import Receita_Simples_Pesquisar from '../support/pages/Medicos/EF006 - Manter Receita Simples/Receita_Simples_Pesquisar';
import CadastrarReceitaSimples from '../support/pages/Medicos/EF006 - Manter Receita Simples/Receita_Simples_Cadastrar';
import ReceitaSimplesExcluir from '../support/pages/Medicos/EF006 - Manter Receita Simples/Receita_Simples_Excluir'
import ReceitaSimplesVisualizar from '../support/pages/Medicos/EF006 - Manter Receita Simples/Receita_Simples_Visualizar'
import ReceitaSimplesPDF from '../support/pages/Medicos/EF006 - Manter Receita Simples/Receita_Simples_Gerar_PDF'
import ReceitaSimplesAlterar from '../support/pages/Medicos/EF006 - Manter Receita Simples/Receita_Simples_Alterar'
import PesquisarReceitaSimples from '../support/pages/Medicos/EF006 - Manter Receita Simples/Receita_Simples_Pesquisar'

import ReceitaAntimicrobiana from '../support/pages/Medicos/EF007 - Manter Receita Antimicrobiana/Receita_Antimicrobiana_Pesquisar'
import ReceitaAntimicrobianaIncluir from '../support/pages/Medicos/EF007 - Manter Receita Antimicrobiana/Receita_Antimicrobiana_Incluir'
import ExcluirReceitaAntimicrobiana from '../support/pages/Medicos/EF007 - Manter Receita Antimicrobiana/Receita_Antimicrobiana_Excluir'
import SalvarReceitaAntmicrobiana from '../support/pages/Medicos/EF007 - Manter Receita Antimicrobiana/Receita_Antimicrobiana_Salvar'

import ReceitaControleEspecialCadastrar from '../support/pages/Medicos/EF008 - Manter Receita Controle Especial/Receita_Controle_Especial_Cadastrar'
import ReceitaControleEspecialPesquisar from '../support/pages/Medicos/EF008 - Manter Receita Controle Especial/Receita_Controle_Especial_Pesquisar';
import ReceitaControleEspecialEditar from '../support/pages/Medicos/EF008 - Manter Receita Controle Especial/Receita_Controle_Especial_Editar';
import ReceitaControleEspecialVisualizar from '../support/pages/Medicos/EF008 - Manter Receita Controle Especial/Receita_Controle_Especial_Visualizar';
import ReceitaControleEspecialGerarPDF from '../support/pages/Medicos/EF008 - Manter Receita Controle Especial/Receita_Controle_Especial_Gerar_PDF';

 

describe('ProjetoBase', () => {Cypress.on('uncaught:exception', (err, runnable) => {return false;});


  it('Realizar Login com sucesso', () => {
    Login.acessarLogin()
    Login.preencherLogin()
  });

  it('Pesquisar - Paciente', () => {
    Paciente.acessarPaciente()
    Paciente.pesquisarPaciente()
  });

  it('Paciente - Cadastrar', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    cy.readFile('./cypress/support/pages/Medicos/EF002 - Manter Paciente/Cadastrar-Paciente/dadosTeste.json').then((registros) => {
      registros.forEach( (paciente) => {
        let paciente_data = new CadastroPaciente(paciente)
        paciente_data.acessarCadastroPaciente()
        paciente_data.invalidandoResponsavelLegal()
      });
    })
  });

  it('Prescrições - Pesquisar', () => { 

    Login.acessarLogin()
    Login.preencherLogin()

    PrescricaoConsultar.acessarPrescricoes()
    PrescricaoConsultar.pesquisarPrescricoes()
 
  });

  it('Prescrições - Relatório Médico - Cadastrar', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    PrescricaoCadastrar.cadastrarRelatorioMedico()

  });

  it('Prescrições - Relatorio Médico - Editar', () => {

    Login.acessarLogin()
    Login.preencherLogin()


    PrescricaoEditar.editarRelatorioMedico()



  });

  it('Prescrições - Gerar Relatorio Médico  PDF', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    PrescricaoConsultar.acessarPrescricoes()
    PrescricaoConsultar.pesquisarPrescricoes()


    PrescricaoGerarRelatorioMedicoPDF.PrescricaoGerarRelatorioMedicoPDF()



  });

  it('Prescrições - Excluir Relatorio Médico', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    PrescricaoCadastrar.cadastrarRelatorioMedicoMassaParaDeletar()
    PrescricaoConsultar.pesquisarPrescricoesMassaDeletar()

    PrescricaoExcluirRelatorioMedico.PrescricaoExcluirRelatorioMedico()


  });

  it('Prescrições - Visualizar Relatorio Médico', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    
    PrescricaoConsultar.acessarPrescricoes()
    PrescricaoConsultar.pesquisarPrescricoes()

    PrescricaoVisualizarRelatorioMedico.PrescricaoVisualizarRelatorioMedico()




  });

  it('Prescrições - WhatsAPP', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    
    PrescricaoConsultar.acessarPrescricoes()
    PrescricaoConsultar.pesquisarPrescricoes()

    PrescricaoWhatsApp.PrescricaoWhatsApp()




  });

  it('Acesso Local Atendimento - Medicos', () => {
    
    Login.acessarLogin()
    Login.preencherLogin()
    LocalAtendimento.acessarPgLocais()
    LocalAtendimento.buscarNomeLocal()
    LocalAtendimento.encontrarEstado()
    LocalAtendimento.incluirLocal()
  });

  it('Local Atendimento - Cadastrar', () => {
  Login.acessarLogin()
    Login.preencherLogin()
    LocalAtendimento.acessarPgLocais()
    LocalAtendimento.incluirLocal()
  });

  it('Local Atendimento - Alterar cadastro', () => {
    Login.acessarLogin()
      Login.preencherLogin()
      LocalAtendimento.acessarPgLocais()
      LocalAtendimento.AlterarLocal()
  });

  it('Receita Simples - Pesquisar', () => {

    Login.acessarLogin()
    Login.preencherLogin()
    Receita_Simples_Pesquisar.pesquisarReceitaSimples()



  });

  it('Receita Simples - Cadastrar', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    Receita_Simples_Pesquisar.acessarReceitaSimples()
    CadastrarReceitaSimples.CadastrarReceitaSimples()



  });

  it('Receita Simples - Excluir', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    Receita_Simples_Pesquisar.acessarReceitaSimples()

    CadastrarReceitaSimples.CadastrarReceitaSimplesMassaExclusao()
    PesquisarReceitaSimples.pesquisarReceitaSimplesMassaExclusao()

    ReceitaSimplesExcluir.ReceitaSimplesExcluir()



  });

  it('Receita Simples - Visualizar', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    Receita_Simples_Pesquisar.acessarReceitaSimples()
    ReceitaSimplesVisualizar.ReceitaSimplesVisualizar()




  });

  it('Receita Simples - Gerar PDF', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    Receita_Simples_Pesquisar.acessarReceitaSimples()
    ReceitaSimplesPDF.ReceitaSimplesPDF()




  });

  it('Receita Simples - Editar', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    Receita_Simples_Pesquisar.acessarReceitaSimples()
    ReceitaSimplesAlterar.ReceitaSimplesAlterar()





  });

  it('Receita Controle Especial - Cadastrar', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    ReceitaControleEspecialCadastrar.ReceitaControleEspecialCadastrar(); 

  });

  it('Receita Controle Especial - Pesquisar', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    ReceitaControleEspecialPesquisar.ReceitaControleEspecialPesquisar(); 

  });

  it('Receita Controle Especial - Editar', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    ReceitaControleEspecialEditar.ReceitaControleEspecialEditar(); 

  });

  it('Receita Controle Especial - Visualizar', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    ReceitaControleEspecialVisualizar.ReceitaControleEspecialVisualizar(); 

  });
  it('Receita Antimicrobiana - pesquisar', () => {

    Login.acessarLogin()
    Login.preencherLogin()
    ReceitaAntimicrobiana.acessarAntimicrobiano()
    ReceitaAntimicrobiana.PesquisarporData()
    ReceitaAntimicrobiana.PesquisarporLocaldeAtendimento()
    ReceitaAntimicrobiana.PesquisarporSituação()
    
    });

  it('Receita Antimicrobiana - Incluir e salvar', () => {

    Login.acessarLogin()
    Login.preencherLogin()
    ReceitaAntimicrobianaIncluir.acessarIncluirReceitaAntimicrobiano()
    ReceitaAntimicrobianaIncluir.salvarNovaReceita()
    //ReceitaAntimicrobianaIncluir.AcessarNovoPaciente()
      
    });

it('receita Antimicrobiana - Novo Paciente',() => {

  Login.acessarLogin()
  Login.preencherLogin()
  ReceitaAntimicrobianaIncluir.AcessarNovoPaciente()
  
  
    });  
    
  it('receita Antimicrobiana - excluir Medicamentos',() => {

    Login.acessarLogin()
    Login.preencherLogin()
    ExcluirReceitaAntimicrobiana.AcessarExcluirReceitaAtimicrobiana()
    ExcluirReceitaAntimicrobiana.ExcluirReceitaAntimicrobiana()
    
        });

  it('receita Antimicrobiana - Adcionar novo Medicamento',() => {

    Login.acessarLogin()
    Login.preencherLogin()
    ReceitaAntimicrobianaIncluir.acessarIncluirReceitaAntimicrobiano()
    ReceitaAntimicrobianaIncluir.adcionarMedicamento()
            
    });

  it('receita Antimicrobiana - cancelar Medicamento',() => {

    Login.acessarLogin()
    Login.preencherLogin()
    ExcluirReceitaAntimicrobiana.AcessarExcluirReceitaAtimicrobiana()
    ExcluirReceitaAntimicrobiana.CancelarReceitaAntmicrobiana()
              
  });

  it('receita Antimicrobiana - visualizar Receita',() => {

    Login.acessarLogin()
    Login.preencherLogin()
    ReceitaAntimicrobianaIncluir.acessarIncluirReceitaAntimicrobiano()
    ReceitaAntimicrobianaIncluir.visualizarNovaReceita()
              
  });

  it('receita Antimicrobiana - Salvar Receita Completa',() => {

    Login.acessarLogin()
    Login.preencherLogin()
    SalvarReceitaAntmicrobiana.acessarSalvarReceitaAntimicrobiano()
    SalvarReceitaAntmicrobiana.salvarReceitaCompleta()
              
  });

  

  

  it('Receita Controle Especial - GerarPDF', () => {

    Login.acessarLogin()
    Login.preencherLogin()

    ReceitaControleEspecialGerarPDF.ReceitaControleEspecialGerarPDF(); 

  });
    
});
