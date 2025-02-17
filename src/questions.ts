interface Question {
  questionText: string;
  answerOptions: {
    answerText: string;
    isCorrect: boolean;
  }[];
}

export const questions: Question[] = [
  {
    questionText: "What is the primary function of a router in computer networking?",
    answerOptions: [
      { answerText: "To connect multiple networks and forward data between them", isCorrect: true },
      { answerText: "To provide wireless internet access", isCorrect: false },
      { answerText: "To store website data", isCorrect: false },
      { answerText: "To protect against viruses", isCorrect: false },
    ],
  },
  {
    questionText: "Which protocol is used for secure web browsing?",
    answerOptions: [
      { answerText: "FTP", isCorrect: false },
      { answerText: "HTTP", isCorrect: false },
      { answerText: "HTTPS", isCorrect: true },
      { answerText: "SMTP", isCorrect: false },
    ],
  },
  {
    questionText: "What is RAM primarily used for in a computer?",
    answerOptions: [
      { answerText: "Long-term storage", isCorrect: false },
      { answerText: "Temporary data storage and active programs", isCorrect: true },
      { answerText: "Processing calculations", isCorrect: false },
      { answerText: "Network communication", isCorrect: false },
    ],
  },
  {
    questionText: "What is the purpose of DNS in networking?",
    answerOptions: [
      { answerText: "To encrypt data", isCorrect: false },
      { answerText: "To compress files", isCorrect: false },
      { answerText: "To translate domain names to IP addresses", isCorrect: true },
      { answerText: "To block malicious websites", isCorrect: false },
    ],
  },
  {
    questionText: "Which of these is not a programming paradigm?",
    answerOptions: [
      { answerText: "Object-Oriented Programming", isCorrect: false },
      { answerText: "Functional Programming", isCorrect: false },
      { answerText: "Digital Programming", isCorrect: true },
      { answerText: "Procedural Programming", isCorrect: false },
    ],
  },
  {
    questionText: "What is the purpose of an IP address?",
    answerOptions: [
      { answerText: "To identify devices on a network", isCorrect: true },
      { answerText: "To store passwords", isCorrect: false },
      { answerText: "To compress data", isCorrect: false },
      { answerText: "To encrypt messages", isCorrect: false },
    ],
  },
  {
    questionText: "What is the function of an operating system?",
    answerOptions: [
      { answerText: "To play games", isCorrect: false },
      { answerText: "To manage hardware and software resources", isCorrect: true },
      { answerText: "To browse the internet", isCorrect: false },
      { answerText: "To create documents", isCorrect: false },
    ],
  },
  {
    questionText: "Which network topology requires a central hub?",
    answerOptions: [
      { answerText: "Mesh", isCorrect: false },
      { answerText: "Ring", isCorrect: false },
      { answerText: "Star", isCorrect: true },
      { answerText: "Bus", isCorrect: false },
    ],
  },
  {
    questionText: "What is a firewall's main purpose?",
    answerOptions: [
      { answerText: "To speed up internet connection", isCorrect: false },
      { answerText: "To store data", isCorrect: false },
      { answerText: "To monitor and control network traffic", isCorrect: true },
      { answerText: "To provide wireless access", isCorrect: false },
    ],
  },
  {
    questionText: "Which of these is not a type of computer network?",
    answerOptions: [
      { answerText: "LAN (Local Area Network)", isCorrect: false },
      { answerText: "WAN (Wide Area Network)", isCorrect: false },
      { answerText: "CAN (Computer Area Network)", isCorrect: true },
      { answerText: "MAN (Metropolitan Area Network)", isCorrect: false },
    ],
  },
];