const QUESTIONS = {
    MATHEMATICS: {
        quiz1: [
            {
                q: "What is the derivative of f(x) = x^2 ?",
                options: ["2x", "x", "x^2", "2"],
                answerIndex: 0,
                explanation: "d/dx(x^2) = 2x"
            },
            {
                q: "What is the integral of 2x dx?",
                answerIndex: 0,
                options: ["x^2 + C", "2x + C", "x + C", "1 + C"],
                explanation: "∫2x dx = x^2 + C"
            }
        ],
        quiz2: [
            {   q: "What is the limit of (1+1/n)^n as n→∞?", 
                options: ["e", "1", "0", "∞"], 
                answerIndex: 0, 
                explanation: "Classic limit e" 
            },
            {   q: "If f(x)=sin x, what is f'(0)?", 
                options: ["0","1","-1","undefined"], 
                answerIndex: 1, 
                explanation: "cos 0 = 1" 
            }
        ]
    },

    CHEMISTRY: {
        quiz1: [
            { q: "What is the atomic number of oxygen?", options: ["8","6","16","2"], answerIndex: 0, explanation: "O has atomic number 8" },
            { q: "Which bond is the strongest?", options: ["Ionic","Covalent single","Triple covalent","Hydrogen"], answerIndex: 2, explanation: "Triple bonds are stronger" }
        ],
        quiz2: [
            { q: "What is the molar mass of H2O (approx)?", options: ["18 g/mol","20 g/mol","16 g/mol","2 g/mol"], answerIndex: 0, explanation: "H2O ≈18" },
            { q: "pH 7 is:", options: ["Neutral","Acidic","Basic","Unknown"], answerIndex: 0, explanation: "pH7 neutral" }
        ]
    },

    ENGLISH: {
        quiz1: [
            { q: "Which is a past tense form of 'run'?", options: ["ran","runned","run","running"], answerIndex: 0, explanation: "ran is past" },
            { q: "Choose the plural of 'mouse'", options: ["mice","mouses","mouse","meese"], answerIndex: 0, explanation: "mice" }
        ],
        quiz2: [
            { q: "Which is a conjunction?", options: ["and","run","beautiful","quickly"], answerIndex: 0, explanation: "and connects clauses" },
            { q: "Which is an adjective?", options: ["red","run","slowly","beauty"], answerIndex: 0, explanation: "red describes noun" }
        ]
    },

    SPORTS: {
        quiz1: [
            { q: "How many players in a football (soccer) team on pitch?", options: ["11","10","9","12"], answerIndex: 0, explanation: "11 players" },
            { q: "A standard basketball quarter length (NBA)", options: ["12 min","10 min","15 min","8 min"], answerIndex: 0, explanation: "12 minutes" }
      ],
        quiz2: [
            { q: "Which exercise best for cardio?", options: ["Running","Bicep curl","Plank","Squat hold"], answerIndex: 0, explanation: "Running is cardio" },
            { q: "Stretching before workout should be:", options: ["dynamic","static","none","vibration"], answerIndex: 0, explanation: "dynamic warmups" }
      ]
    },

    AI: {
        quiz1: [
            { q: "What does 'supervised learning' require?", options: ["Labeled data","No data","Only images","No human"], answerIndex: 0, explanation: "Supervised learning needs labels" },
            { q: "What is an LLM?", options: ["Large Language Model","Little Learning Machine","Long Label Model","Linear Logistic Model"], answerIndex: 0, explanation: "Large Language Model" }
        ],
        quiz2: [
            { q: "What is overfitting?", options: ["Model fits train too closely","Model fits well","No training","Perfect generalization"], answerIndex: 0, explanation: "Overfitting = too tailored to train set" },
            { q: "Which is a metric for classification?", options: ["Accuracy","MSE","RMSE","Variance"], answerIndex: 0, explanation: "Accuracy for classification" }
        ]
      }
};