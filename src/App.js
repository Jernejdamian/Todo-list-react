import './App.css';
import Form from './Form';
import Tasks from "./Tasks";
import Buttons from './Buttons';
import Section from './Section';
import Container from './Container';

const tasks = [
  {
    content: "Sprzedać stary samochód", done: true
  },
  {
    content: "Kupić nowy samochód", done: false
  },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
