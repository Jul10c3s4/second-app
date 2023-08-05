import P from 'prop-types';
import './styles.css';
export const Card = ({ title, onClick, index }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <button
        onClick={() => {
          onClick(index);
        }}
      >
        excluir tarefa
      </button>
    </div>
  );
};

Card.propTypes = {
  title: P.string,
  onClick: P.func,
  index: P.number,
};
