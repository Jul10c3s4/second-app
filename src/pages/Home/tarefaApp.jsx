import { useEffect, useState } from 'react';
import { Card } from '../../components/card';
import './styles.css';
import listImage from '../../assets/listas.png';
export const TarefaApp = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [],
  );

  const addTask = () => {
    if (input) {
      setTasks((prevState) => [...prevState, input]);
      setInput('');
    } else {
      alert('Digite uma tarefa para adicionar !');
    }
  };

  const excluirTask = async (index) => {
    if (index > -1) {
      let newTasks = tasks;
      newTasks.splice(index, 1);
      setTasks([...newTasks]);
    }
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert(window.innerWidth);
  }, [tasks]);

  return (
    <div className="tarefaApp">
      <div className="container">
        <div className="title">
          <h1>Gerenciador de tarefas</h1>
          <img src={listImage} />
        </div>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Digite sua tarefa"
        />
        <button className="buttonAdd" onClick={addTask}>
          Adicionar tarefa
        </button>
        <div className="cards">
          {tasks.map((task, index) => {
            return (
              <Card
                title={task}
                key={index}
                index={index}
                onClick={excluirTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
