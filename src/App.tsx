import './App.css';
import { Questionnaire, QuestionnaireProps } from './components/Questionnaire/Questionnaire';

function App() {
  const myJson: QuestionnaireProps = {
    questionnaire: {
      id: "5d6c1c76-35b9-44cc-aabe-1b93c4ca783e",
      ref: "form_contato_tech4",
      title: "Formulário de contato",
      type: "simple",
      items: [
        {
          category: "question",
          type: "text",
          id: "30e55709-3a1e-469d-b900-23c49cbad2cc",
          ref: "primeiro_nome", //optional
          label: "Primeiro Nome",
          placeholder: "Digite aqui seu primeiro nome", //optional
          required: true
        },
        {
          category: "question",
          id: "7019b75d-2ebf-489a-a803-d613e29bf69c",
          ref: "email",
          label: "E-mail",
          placeholder: "Digite aqui email",
          type: "email",
          required: true
        },
        {
          category: "question",
          id: "7019b75d-2ebf-489a-a803-d613e29bf49c",
          ref: "mensagem",
          label: "Mensagem",
          placeholder: "Digite aqui sua mensagem para a Tech4",
          type: "textArea",
          required: true
        }
      ]
    }
  };

  return (
    <div className="App">
      {/* <h3>Mostrar o formulário:</h3> */}
      <Questionnaire questionnaire={myJson.questionnaire} />
    </div>
  );
}

export default App;
