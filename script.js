function mostrarPopup(tipo) {
  let conteudo = '';
  if (tipo === 'habilidades') {
    conteudo = '<h2>Minhas Qualidades</h2><p>Sou alguém que valoriza a calma, sempre buscando manter a tranquilidade, mesmo nos momentos de pressão. Acredito que a positividade e a exploração constante são essenciais para o meu desenvolvimento. Sou comprometido com o que faço, dedicando-me ao máximo para alcançar meus objetivos.</p><p><strong>TENHO MAIS DE 70 CURSOS ALURA PARA QUALQUER SITUAÇÃO DA VIDA</strong></p>';
  } else if (tipo === 'projetos') {
    conteudo = '<h2>Minhas Realizações</h2><p>Participei da execução de um projeto prático de instalação elétrica, onde obtive experiência no manuseio de equipamentos e na execução de tarefas técnicas, aprimorando minhas habilidades na área.</p>';
  } else if (tipo === 'preferencias') {
    conteudo = '<h2>Minhas Opiniões</h2><p>Valorizo ambientes colaborativos e transparentes, onde todos compartilham suas ideias e buscam a excelência juntos. Acredito na força do trabalho em equipe e na importância de um clima positivo no ambiente de trabalho.</p>';
  } else if (tipo === 'contato') {
    conteudo = '<h2>Converse Comigo</h2><p>Entre em contato pelo número (11) 99999999 ou por e-mail: <strong>exemplo@dominio.com</strong>. Estou sempre aberto a novas possibilidades de aprender e crescer junto com pessoas que compartilham da mesma paixão pelo desenvolvimento.</p>';
  }

  document.getElementById('popup-conteudo').innerHTML = conteudo;
  document.getElementById('popup').style.display = 'flex';
}

function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}

function mostrarSignificado(palavra) {
let significado = '';
if (palavra === 'paciencia') {
  significado = '<strong>Calma:</strong> Capacidade de manter a serenidade em situações adversas. A paciência é essencial para tomar decisões ponderadas.';
} else if (palavra === 'alegria') {
  significado = '<strong>Positividade:</strong> Ter uma atitude otimista diante da vida, focando nas coisas boas e no que pode ser aprendido com cada experiência.';
} else if (palavra === 'estudo') {
  significado = '<strong>Exploração:</strong> Processo contínuo de aprendizado e descoberta. Estudar é um meio de expandir horizontes e alcançar novos conhecimentos.';
} else if (palavra === 'dedicacao') {
  significado = '<strong>Compromisso:</strong> Ato de se dedicar com afinco a uma tarefa ou objetivo, colocando esforço e tempo para alcançá-los com excelência.';
}

alert(significado); // Exibe o significado da palavra em um alert
}
