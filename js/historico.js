
const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];


const historicoList = document.getElementById('historicoList');
medicamentos.forEach(medicamento => {
  const li = document.createElement('li');
  li.textContent = `${medicamento.nome} - ${medicamento.dosagem} - ${medicamento.frequencia}`;
  historicoList.appendChild(li);
});