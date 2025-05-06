function mostrarPopup(tipo) {
    let conteudo = '';
    if (tipo === 'habilidades') {
      conteudo = '<h2>Minhas Habilidades</h2><p>Sou paciente, alegre, estudioso e dedicado. Tenho mais de 60 cursos diversos que me ajudaram a desenvolver uma ampla gama de habilidades.</p>';
    } else if (tipo === 'projetos') {
      conteudo = '<h2>Meus Projetos</h2><p>Realizei a instalação de uma eletrocalha em um projeto prático, onde adquiri experiência com instalações elétricas e práticas industriais.</p>';
    } else if (tipo === 'preferencias') {
      conteudo = '<h2>Minhas Preferências</h2><p>Prefiro trabalhar em uma equipe unida e honesta, onde todos compartilham ideias e buscam soluções em conjunto.</p>';
    } else if (tipo === 'contato') {
      conteudo = '<h2>Entre em Contato</h2><p>Você pode me contactar pelo número (11) 99999999 ou por e-mail: <strong>exemplo@dominio.com</strong>. Estou sempre aberto a novas oportunidades!</p>';
    }
  
    // Exibe o popup
    document.getElementById('popup-conteudo').innerHTML = conteudo;
    document.getElementById('popup').style.display = 'flex';
  }
  
  function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
  }
  