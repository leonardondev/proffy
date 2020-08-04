import React from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da Semana</label>
            <input type="text" id="week-day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
}

export default TeacherList;
