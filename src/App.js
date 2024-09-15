import logo from './logo.svg';
import './App.css';
import me from './files/me.jpg'
import project1 from './files/project1.jpg'
import project2 from './files/project2.jpg'
import project3 from './files/project3.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Portifolio</h1>
      </header>
      <section id='AM'>
        <h2>About Me</h2>
        <img src={me} alt="Wryce Eyriel Hizon" style={{ width: '150px'}} />
        <p>I am Wryce Eyriel Hizon and I am a CompSci Student!</p>
      </section>

      <section id="P">
        <h2>Projects</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ textAlign: 'center', width: '100%' }}>
            <h3>Project Laptop</h3>
            <img src={project1} alt="Project 1" style={{ width: '350px' }} />
          </li>
          <li style={{ textAlign: 'center', width: '100%' }}>
            <h3>Project Workplace</h3>
            <img src={project2} alt="Project 2" style={{ width: '350px' }} />
          </li>
          <li style={{ textAlign: 'center', width: '100%' }}>
            <h3>Project Time</h3>
            <img src={project3} alt="Project 3" style={{ width: '350px' }} />
          </li>
        </ul>
      </section>

      <section id="CM">
        <h2>Contact Me</h2>
        <p>Name: Wryce Eyriel Hizon</p>
        <p>Address: Batangas, Lipa City</p>
        <p>Email: wryce_eyriel_hizon@dlsl.edu.ph<br /><br /></p>
      </section>
    </div>
  );
}

export default App;
