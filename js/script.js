
document.getElementById('pacienteForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('pacienteNome').value;
    const idade = document.getElementById('pacienteIdade').value;
    const historico = document.getElementById('pacienteHistorico').value;
    
    const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    pacientes.push({ nome, idade, historico_medico: historico });
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
    
    alert('Paciente adicionado com sucesso!');
  });
  

  document.getElementById('medicamentoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('medicamentoNome').value;
    const dosagem = document.getElementById('medicamentoDosagem').value;
    const frequencia = document.getElementById('medicamentoFrequencia').value;
    
    const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    medicamentos.push({ nome, dosagem, frequencia });
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
    
    alert('Medicamento adicionado com sucesso!');
  });
  

  document.getElementById('adicionarLembrete').addEventListener('click', () => {
    window.location.href = 'lembretes.html';
  });
  

  document.getElementById('historicoMedicamentos').addEventListener('click', () => {
    window.location.href = 'historico.html';
  });
  