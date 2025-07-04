const faqs = [
  {
    pergunta: "Qual é o horário de funcionamento do suporte ao cliente?",
    resposta: "Nosso suporte ao cliente está disponível 24 horas por dia, 7 dias por semana, através do nosso chat online, e-mail e telefone.",
  },
  {
    pergunta: "Como posso cancelar minha assinatura?",
    resposta: "Você pode cancelar sua assinatura a qualquer momento acessando a seção 'Minha Conta', navegando até 'Assinatura' e clicando em 'Cancelar'.",
  },
  {
    pergunta: "Quais são os métodos de pagamento aceitos?",
    resposta: "Aceitamos os principais cartões de crédito (Visa, MasterCard, American Express), PayPal e transferência bancária.",
  },
  {
    pergunta: "Existe um período de teste gratuito?",
    resposta: "Sim, oferecemos um período de teste gratuito de 14 dias para todos os novos usuários. Não é necessário cartão de crédito para começar.",
  },
  {
    pergunta: "Como posso atualizar minhas informações de perfil?",
    resposta: "Para atualizar suas informações, faça login em sua conta, vá para a seção 'Perfil' e edite os campos desejados. Não se esqueça de salvar as alterações.",
  }
];

function togglePerguntas(event) {
  const  cardQuestao = event.currentTarget;
  const resp = cardQuestao.querySelector('#resposta')
  const icon = cardQuestao.querySelector('.icon');
  
  if (resp.classList.contains('open')) {
    resp.classList.remove('open')
    icon.src = './assets/icon-arrow-down.svg'
    icon.alt = 'Icone de seta para baixo'
  } else {
    resp.classList.add('open');
    icon.src = './assets/icon-arrow-up.svg';
    icon.alt = 'Icone de seta para cima'
  }
}

window.onload = function() {
  const faqContainerList = document.querySelector("#faq-container-list");

  const questionCardtemplate = document.querySelector("#faq-container-template")

  faqs.forEach( (faq) => {
    const newFaqItem = document.importNode(questionCardtemplate.content, true);

    newFaqItem.querySelector("#pergunta").textContent = faq.pergunta;
    newFaqItem.querySelector("#resposta").textContent = faq.resposta;
    newFaqItem.querySelector('.faq-items').addEventListener('click', togglePerguntas)
      
    faqContainerList.appendChild(newFaqItem);
  })
}


// 1 Pegar o onclick da li 
// 2 Criar uma função para adicionar uma classe,
// 3 verificar se a classe existe
