import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/19802320?s=460&u=8b3e4cbb9dacb722482982bcf6324b03149c9962&v=4" alt="Leonardo"/>
        <div>
          <strong>Leonardo</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Enthusiast of the best web & mobile development technologies.
        <br /><br />
        Passionate about education and changing people's lives through programming. More than 200,000 people have already undergone one of my trainings.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
