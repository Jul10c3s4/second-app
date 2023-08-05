import { Component } from 'react';

export class App extends Component {
  state = {
    // eslint-disable-next-line no-undef
    counter: (number = 0),
  };

  handleClick = () => {
    //o prevState serve para pegar o estado atual de alguma variável do estado, e o prevProps serve para pegar alguma props que foi passada como parametro para a classe
    this.setState(
      (prevState, prevProps) => {
        //dessa maneira não correrá o risco de alterar o estado da variável errada
        // eslint-disable-next-line react/prop-types
        return { counter: prevState.counter + prevProps.numberToInclement };
      },
      //ao passar uma calback após alterar o estado, a callback será executada logo em seguida de modo a pegar o estado atual invés do antigo impedindo que pegue o estado desatualizado
      () => {
        alert(this.state.counter);
      },
    );
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <h2>Click no contador</h2>
        <button onClick={this.handleClick}>Add 1</button>
      </div>
    );
  }
}
