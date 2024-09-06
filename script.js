const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você tem uma mão ruim no truco, o que faz?",
        alternativas: [
        {
        texto: "Blefo e tento enganar os adversários",
        afirmacao: [
        "Se você blefa, é uma pessoa corajosa e adora correr riscos.",
        ],
        
        },
        {
        texto: "Jogo de forma conservadora",
        afirmacao: [
        " Se joga conservador, prefere a segurança e a análise cuidadosa das situações.",
        
        ],
        
        },
    ]
        },
        {
        enunciado: "Como você reage quando alguém grita TRUCO?",
        alternativas: [
        {
        texto: "Aceito o desafio sem pensar",
        
        afirmacao: [
        "Quem aceita na hora é competitivo e confiante",
        
        ],
       
        },
        {
        texto: "Avalio a minha mão antes de decidir",
        
        afirmacao: [
        "Quem avalia antes de decidir é mais estrategista e calculista.",
        
        ],
       
        },
        ]
        },
        {
        enunciado: "Você prefere jogar truco com parceiros que são mais:",
        alternativas: [
        {
        texto: "Agressivos e ousados",
        
        afirmacao: [
        "Se prefere parceiros agressivos, você valoriza a adrenalina e jogadas rápidas. ",
    
        ],
       
        },
        {
        
        texto: "Calmos e analíticos",
        
        afirmacao: [
        "Se prefere os calmos, é porque aprecia a estratégia e o controle.",
        
        ],
        
        },
        ]
        },
        {
        enunciado: "Quando está perdendo, você:",
        alternativas: [
        {
        texto: "Redobra o esforço e parte para o tudo ou nada",
        
        afirmacao: [
        "Quem vai para o tudo ou nada é destemido e intenso",
        
        ],
        
        },
        {
        texto: "Mantém a calma e tenta reverter o jogo com paciência",
        
        afirmacao: [
        "Quem mantém a calma é resiliente e focado.",
        
        ],
       
        },
        ]
        },
        
        {
        enunciado: "Você prefere jogar truco com baralho novo ou baralho velho?",
        alternativas: [
        {
        texto: "Baralho novo",
        
        afirmacao: [
        "Preferir um baralho novo indica que você gosta de novidades e precisão. ",
        
        ],
        
        },
        {
        texto: " Baralho velho",
        
        afirmacao: [
        "Se prefere o velho, valoriza o conforto e a familiaridade.",
        
        ],
        
        },
        ]
        },
        {
        enunciado: "Qual é a sua reação quando seu parceiro pede seis?",
        alternativas: [
        {
        texto: "Confio e apoio a jogada",
        
        afirmacao: [
        
        " Se você confia sem hesitar, é leal e ousado.",
        
        ],
        
        
        },
        {
        texto: " Fico cauteloso e penso duas vezes",
        
        afirmacao: [
        "Se fica cauteloso, é uma pessoa mais analítica e cuidadosa com as apostas.",
        
        ],
        
        },
        ]
        },
        {
        enunciado: "Quando você recebe uma carta forte, como o Zap, você:",
        alternativas: [
        {
        texto: " Fica empolgado e usa logo",
        
        afirmacao: [
        " Quem usa logo é impulsivo e aproveita as oportunidades no momento. ",
        
        ],
       
        },
        {
        texto: " Segura até o momento certo",
        
        afirmacao: [
        " Quem segura é mais paciente e estratégico.",
        
        ],
       
        },
        ]
        },
        
        {
        enunciado: "Você prefere ganhar no grito ou na estratégia?",
        alternativas: [
        {
        texto: "No grito",
        afirmacao: [
        "Ganhar no grito mostra que você adora dominar pela emoção e energia.",
         
        ],
        },
        {
        texto: " Na estratégia",
        
        afirmacao: [
        " Ganhar na estratégia revela que você gosta de vencer com planejamento e mente fria.",
          
        ],
        },
        ]
    }
    ];                     
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigada por responder";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();