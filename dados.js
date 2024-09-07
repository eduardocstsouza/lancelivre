let dados = [
    {
        nome: "Lionel Messi",
        descricao: "Lionel Messi é amplamente considerado um dos maiores jogadores de futebol de todos os tempos. Com sua habilidade extraordinária, dribles precisos e visão de jogo única, ele brilhou no Barcelona, conquistando inúmeros títulos, e agora atua no Inter Miami, continuando a encantar fãs ao redor do mundo.",
        link: "https://pt.wikipedia.org/wiki/Lionel_Messi",
        tags:"goat anão argentina barcelona et intermiami"
    },
    {
        nome: "Raphinha Beloli",
        descricao: "Raphinha é um jogador brasileiro talentoso, reconhecido por sua velocidade e habilidade no drible. Depois de se destacar no futebol europeu, especialmente no Leeds United e Barcelona, ele é visto como uma das promessas mais empolgantes do futebol brasileiro.",
        link: "https://pt.wikipedia.org/wiki/Raphinha",
        tags: "brasileiro promessa"
    },
    {
        nome: "Cristiano Ronaldo",
        descricao: "Cristiano Ronaldo é um dos maiores artilheiros da história do futebol, conhecido por sua força física e precisão nas finalizações. Ele brilhou em clubes como Manchester United, Real Madrid e Juventus, e continua sua carreira no Al Nassr, na Arábia Saudita.",
        link: "https://pt.wikipedia.org/wiki/Cristiano_Ronaldo",
        tags: "robozao papai cris artilheiro"
    },
    {
        nome: "Lamine Yamal",
        descricao: "Lamine Yamal é um jovem prodígio espanhol, visto como uma das grandes promessas do futebol mundial. Atuando pelo Barcelona, ele já demonstra um talento impressionante e é seguido de perto por todos os fãs do esporte.",
        link: "https://pt.wikipedia.org/wiki/Lamine_Yamal",
        tags: "espanhol jovem promessa artilheiro juventude"
    },
    {
        nome: "Neymar Junior",
        descricao:"Neymar é um dos atacantes mais talentosos do futebol brasileiro, famoso por suas habilidades e estilo de jogo criativo. Após uma carreira de destaque no Barcelona e PSG, ele atualmente joga no Al-Hilal, na Arábia Saudita.",
        link:"https://pt.wikipedia.org/wiki/Neymar",
        tags:"menino ney neymar adulto"
    },
    {
        nome: "Jude Bellingham",
        descricao:"Jude Bellingham é um meio-campista inglês jovem e promissor, conhecido por sua versatilidade e maturidade em campo. Atualmente, ele é uma peça fundamental no Real Madrid e na seleção inglesa.",
        link:"https://pt.wikipedia.org/wiki/Jude_Bellingham",
        tags:"ingles jovem promessa real madrid"
    },
    {
        nome: "Pedri Gonzáles",
        descricao:"Pedri é um meio-campista espanhol talentoso, que se destacou no Barcelona e na seleção espanhola. Ele foi premiado com o Golden Boy em 2021, reconhecimento ao melhor jogador Sub-21 atuando na Europa.",
        link:"https://pt.wikipedia.org/wiki/Pedri",
        tags:"espanhol meio-campista barcelona"
    },
    {
        nome: "Erling Haaland",
        descricao:"Erling Haaland é um atacante norueguês conhecido por sua impressionante capacidade de marcar gols. Atualmente, ele é uma das estrelas do Manchester City, onde continua a quebrar recordes e se afirmar como um dos melhores atacantes do mundo.",
        link:"https://pt.wikipedia.org/wiki/Erling_Haaland",
        tags:"noruegues atacante manchester city"
    },
    {
        nome: "Robert Lewandowski",
        descricao:"Robert Lewandowski é um dos mais prolíficos artilheiros do futebol mundial. Após uma carreira de sucesso no Bayern de Munique, onde conquistou inúmeros títulos, ele atualmente defende o Barcelona e é o capitão da seleção polonesa.",
        link:"https://pt.wikipedia.org/wiki/Robert_Lewandowski",
        tags:"polones atacante barcelona"
    },
    {
        nome: "Kevin De Bruyne",
        descricao:"Kevin De Bruyne é um dos melhores meio-campistas do mundo, conhecido por sua visão de jogo, precisão nos passes e versatilidade. Ele é uma peça chave no Manchester City e tem sido fundamental para o sucesso da seleção belga.",
        link:"https://pt.wikipedia.org/wiki/Kevin_De_Bruyne",
        tags:"belga meio-campista manchester city"
    },
    {
        nome: "Kylian Mbappé",
        descricao:"Kylian Mbappé é um dos jogadores mais talentosos de sua geração, famoso por sua velocidade e habilidade técnica. Atualmente atua no Real Madrid e foi fundamental para a conquista da Copa do Mundo de 2018 pela França.",
        link:"https://pt.wikipedia.org/wiki/Kylian_Mbappé",
        tags:"frances atacante psg real madrid"
    },
    {
        nome: "Mohamed Salah",
        descricao:"Mohamed Salah é um dos principais jogadores do Liverpool, conhecido por sua velocidade, dribles e capacidade de marcar gols. Ele também é o capitão da seleção egípcia e é amplamente respeitado no mundo do futebol.",
        link:"https://pt.wikipedia.org/wiki/Mohamed_Salah",
        tags:"egipcio atacante liverpool"
    },
    {
        nome: "Karim Benzema",
        descricao:"Karim Benzema é um dos melhores atacantes franceses de todos os tempos. Ele teve uma carreira ilustre no Real Madrid, conquistando vários títulos, e atualmente joga no Al-Ittihad, na Arábia Saudita.",
        link:"https://pt.wikipedia.org/wiki/Karim_Benzema",
        tags:"frances atacante al-ittihad"
    },
    {
        nome: "Bruno Fernandes",
        descricao:"Bruno Fernandes é um meio-campista português de destaque, conhecido por sua capacidade de criar jogadas e marcar gols. Ele é uma das principais estrelas do Manchester United e da seleção portuguesa.",
        link:"https://pt.wikipedia.org/wiki/Bruno_Fernandes",
        tags:"portugues meio-campista manchester united"
    },
    {
        nome: "Marquinhos",
        descricao:"Marquinhos é um zagueiro brasileiro reconhecido por sua liderança e solidez defensiva. Ele é o capitão do PSG e uma figura importante na seleção brasileira.",
        link:"https://pt.wikipedia.org/wiki/Marcos_Ao%C3%A1s_Corr%C3%AAa",
        tags:"brasileiro zagueiro psg"
    },
    {
        nome: "Rodrygo Goes",
        descricao:"Rodrygo é um jovem atacante brasileiro que brilha no Real Madrid. Ele é conhecido por sua habilidade, velocidade e potencial de se tornar um dos melhores do mundo.",
        link:"https://pt.wikipedia.org/wiki/Rodrygo_Goes",
        tags:"brasileiro atacante real madrid"
    },
    {
        nome: "Phil Foden",
        descricao:"Phil Foden é um dos maiores talentos do futebol inglês, jogando como meio-campista no Manchester City. Ele é conhecido por sua versatilidade, técnica apurada e papel crucial no sucesso de seu clube.",
        link:"https://pt.wikipedia.org/wiki/Phil_Foden",
        tags:"ingles meio-campista manchester city"
    },
];