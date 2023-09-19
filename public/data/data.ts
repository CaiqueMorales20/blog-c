// Data
export const postData = [
  {
    id: '2',
    title: 'HTML Semântico',
    tech: ['HTML'],
    content: {
      title: 'HTML Semântico e seus benefícios',
      description: [
        {
          type: 'text',
          content:
            'Flexbox basicamente é o que vai trazer a responsividade pro seu site. Você vai acabar por usa-lo em 80%, das vezes em que tiver fazendo um layout, nos outros 20% fará uso do "grid", mas isso é algo que falarei em um post aparte.',
        },
      ],
    },
  },
  {
    id: '1',
    title: 'Flexbox',
    tech: ['HTML', 'CSS'],
    content: {
      title: 'Flexbox',
      description: [
        {
          type: 'text',
          content:
            'Flexbox basicamente é o que vai trazer a responsividade pro seu site. Você vai acabar por usa-lo em 80%, das vezes em que tiver fazendo um layout, nos outros 20% fará uso do "grid", mas isso é algo que falarei em um post aparte.',
        },
        {
          type: 'text',
          content: 'Para podermos entender melhor vamos partir para o código.',
        },
        {
          type: 'text',
          content: 'Primeiro crie o seguinte template no seu index.html:',
        },
        {
          type: 'image',
          content: '/classes/class_01/code-1.png',
        },
        {
          type: 'text',
          content:
            'Em seguida, altere crie um arquivo style.css com o seguinte código e faça as devidas alterações no index.html:',
        },
        {
          type: 'code',
          content: `class HelloMessage extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <button onClick={this.handlePress}>Say Hello</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />, 
  mountNode 
);`,
        },
        {
          type: 'image',
          content: '/classes/class_01/code-2.png',
        },
        {
          type: 'image',
          content: '/classes/class_01/code-3.png',
        },
        {
          type: 'text',
          content:
            'Se tudo ocorreu certo, ao visualizar o arquivo, a seguinte tela deve ser renderizada:',
        },
        {
          type: 'image',
          content: '/classes/class_01/code-4.png',
        },
      ],
    },
  },
]
