
const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];
const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];


medicamentos.forEach(medicamento => {
  const select = document.getElementById('lembreteMedicamento');
  const option = document.createElement('option');
  option.value = medicamento.nome;
  option.textContent = medicamento.nome;
  select.appendChild(option);
});


pacientes.forEach(paciente => {
  const select = document.getElementById('lembretePaciente');
  const option = document.createElement('option');
  option.value = paciente.nome;
  option.textContent = paciente.nome;
  select.appendChild(option);
});


document.getElementById('lembreteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const dataHora = document.getElementById('lembreteDataHora').value;
  const medicamento = document.getElementById('lembreteMedicamento').value;
  const paciente = document.getElementById('lembretePaciente').value;
  
  const lembretes = JSON.parse(localStorage.getItem('lembretes')) || [];
  lembretes.push({ dataHora, medicamento, paciente });
  localStorage.setItem('lembretes', JSON.stringify(lembretes));
  
  alert('Lembrete adicionado com sucesso!');
});
