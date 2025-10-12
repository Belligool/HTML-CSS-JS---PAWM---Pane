const QUESTIONS = {
    MATHEMATICS: {
        quiz1: [
            {
                q: "What is the derivative of f(x) = x^2 ?",
                options: ["x", "2x", "x^2", "2"],
                answerIndex: 1,
                explanation: "d/dx(x^2) = 2x"
            },
            {
                q: "What is the integral of 2x dx?",
                answerIndex: 2,
                options: ["2x + C", "1 + C", "x^2 + C", "x + C"],
                explanation: "∫2x dx = x^2 + C"
            },
            {
                q: "If f(x) = 3x^3 + 2x, what is f'(x)?",
                options: ["3x^2 + 2", "x^2 + 1", "9x^2 + 2", "9x + 2"],
                answerIndex: 2,
                explanation: "f'(x) = 9x^2 + 2 using power rule"
            },
            {
                q: "What is the domain of f(x) = 1/(x-2)?",
                options: ["x > 2", "x < 2", "All real numbers except x=2", "All real numbers"],
                answerIndex: 2,
                explanation: "Denominator cannot be zero"
            },
            {
                q: "Find ∫(3x^2 + 4x) dx",
                options: ["3x + 4 + C", "6x + 4 + C", "x^3 + 2x^2 + C", "x^3 + 4x^2 + C"],
                answerIndex: 2,
                explanation: "Power rule for integration"
            },
            {
                q: "What is f(2) if f(x) = x^2 - 3x + 5?",
                options: ["3", "1", "5", "7"],
                answerIndex: 0,
                explanation: "f(2) = 4 - 6 + 5 = 3"
            },
            {
                q: "Which of the following is not a function?",
                options: ["y = x^2", "x = y^2", "y = 2x + 1", "y = sin(x)"],
                answerIndex: 1,
                explanation: "x = y^2 fails vertical line test"
            },
            {
                q: "Find the inverse of f(x) = 2x + 3",
                options: ["f^-1(x) = (x-3)/2", "f^-1(x) = (x+3)/2", "f^-1(x) = x/2 - 3", "f^-1(x) = 2x - 3"],
                answerIndex: 0,
                explanation: "Swap x and y, then solve for y"
            }
        ],
        quiz2: [
            {   
                q: "What is the limit of (1+1/n)^n as n→∞?", 
                options: ["∞", "0", "1", "e"], 
                answerIndex: 3, 
                explanation: "Classic limit e ≈ 2.718" 
            },
            {   
                q: "If f(x)=sin x, what is f'(0)?", 
                options: ["-1", "0", "undefined", "1"], 
                answerIndex: 3, 
                explanation: "cos 0 = 1" 
            },
            {
                q: "Find the critical points of f(x) = x^2 - 4x + 3",
                options: ["x = 1, 3", "x = 0", "x = -2", "x = 2"],
                answerIndex: 3,
                explanation: "f'(x) = 2x - 4 = 0 → x = 2"
            },
            {
                q: "What is lim(x→0) sin(x)/x?",
                options: ["undefined", "∞", "0", "1"],
                answerIndex: 3,
                explanation: "Fundamental trigonometric limit"
            },
            {
                q: "What is the area under f(x) = x from 0 to 3?",
                options: ["9", "3", "6", "4.5"],
                answerIndex: 3,
                explanation: "∫₀³ x dx = [x²/2]₀³ = 9/2 = 4.5"
            },
            {
                q: "What is the derivative of e^x?",
                options: ["x*e^(x-1)", "e^(x-1)", "1", "e^x"],
                answerIndex: 3,
                explanation: "d/dx(e^x) = e^x"
            },
            {
                q: "Find ∫e^x dx from 0 to 1",
                options: ["e", "e - 1", "1", "e + 1"],
                answerIndex: 1,
                explanation: "[e^x]₀¹ = e - 1"
            },
            {
                q: "What is the derivative of ln(x)?",
                options: ["ln(x)", "e^x", "1/x", "x"],
                answerIndex: 2,
                explanation: "d/dx(ln(x)) = 1/x"
            }
        ]
    },

    CHEMISTRY: {
        quiz1: [
            { 
                q: "What is the atomic number of oxygen?", 
                options: ["16", "6", "2", "8"], 
                answerIndex: 3, 
                explanation: "O has atomic number 8" 
            },
            { 
                q: "Which bond is the strongest?", 
                options: ["Hydrogen", "Covalent single", "Ionic", "Triple covalent"], 
                answerIndex: 3, 
                explanation: "Triple bonds are stronger" 
            },
            {
                q: "How many valence electrons does carbon have?",
                options: ["8", "2", "6", "4"],
                answerIndex: 3,
                explanation: "Carbon is Group 14, has 4 valence electrons"
            },
            {
                q: "Which element is a noble gas?",
                options: ["Nitrogen", "Nickel", "Sodium", "Neon"],
                answerIndex: 3,
                explanation: "Noble gases are in Group 18"
            },
            {
                q: "What type of bond holds H2O molecules together?",
                options: ["Covalent bond", "Metallic bond", "Ionic bond", "Hydrogen bond"],
                answerIndex: 3,
                explanation: "Intermolecular force between water molecules"
            },
            {
                q: "Which has the most protons?",
                options: ["Carbon", "Oxygen", "Nitrogen", "Sulfur"],
                answerIndex: 3,
                explanation: "Sulfur has 16 protons"
            },
            {
                q: "What is the charge of a proton?",
                options: ["Neutral", "Negative", "-1", "Positive"],
                answerIndex: 3,
                explanation: "Protons carry a +1 charge"
            }
        ],
        quiz2: [
            { 
                q: "What is the molar mass of H2O (approx)?", 
                options: ["20 g/mol", "16 g/mol", "2 g/mol", "18 g/mol"], 
                answerIndex: 3, 
                explanation: "H2O ≈18" 
            },
            { 
                q: "pH 7 is:", 
                options: ["Basic", "Acidic", "Unknown", "Neutral"], 
                answerIndex: 3, 
                explanation: "pH7 neutral" 
            },
            {
                q: "In the reaction 2H2 + O2 → 2H2O, what is the stoichiometry ratio?",
                options: ["1:1:1", "2:2:2", "1:2:2", "2:1:2"],
                answerIndex: 3,
                explanation: "Coefficients show stoichiometric ratios"
            },
            {
                q: "What happens during an exothermic reaction?",
                options: ["Temperature decreases", "No change in energy", "Energy is absorbed", "Energy is released"],
                answerIndex: 3,
                explanation: "Exothermic releases heat"
            },
            {
                q: "Which has the highest electronegativity?",
                options: ["Nitrogen", "Oxygen", "Chlorine", "Fluorine"],
                answerIndex: 3,
                explanation: "Fluorine is most electronegative element"
            },
            {
                q: "What is the electron configuration of sodium (Na)?",
                options: ["1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁵", "1s² 2s² 2p⁶ 3s¹", "1s² 2s¹"],
                answerIndex: 2,
                explanation: "Na has 11 electrons"
            },
            {
                q: "Which of the following is an ionic compound?",
                options: ["CO2", "NaCl", "H2O", "O2"],
                answerIndex: 1,
                explanation: "NaCl forms from Na+ and Cl- ions"
            }
        ]
    },

    ENGLISH: {
        quiz1: [
            { 
                q: "Which is a past tense form of 'run'?", 
                options: ["running", "run", "runned", "ran"], 
                answerIndex: 3, 
                explanation: "ran is past" 
            },
            { 
                q: "Choose the plural of 'mouse'", 
                options: ["meese", "mouse", "mouses", "mice"], 
                answerIndex: 3, 
                explanation: "mice" 
            },
            {
                q: "Which sentence uses future tense correctly?",
                options: ["She goes tomorrow", "She going tomorrow", "She went tomorrow", "She will go tomorrow"],
                answerIndex: 3,
                explanation: "Will + verb is future tense"
            },
            {
                q: "What is the correct form: 'He ___ to the store'?",
                options: ["goes", "going", "go", "went"],
                answerIndex: 3,
                explanation: "Past tense with 'He'"
            },
            {
                q: "Choose the correct spelling:",
                options: ["acommodate", "acomodate", "accommodate", "accomodate"],
                answerIndex: 2,
                explanation: "Double c and double m"
            },
            {
                q: "Which is correct: 'They ___ already eaten'?",
                options: ["has", "is", "have", "does"],
                answerIndex: 2,
                explanation: "Plural subject needs 'have'"
            },
            {
                q: "What is the present perfect tense of 'go'?",
                options: ["goes", "will go", "has gone", "went"],
                answerIndex: 2,
                explanation: "Present perfect = has/have + past participle"
            }
        ],
        quiz2: [
            { 
                q: "Which is a conjunction?", 
                options: ["beautiful", "quickly", "run", "and"], 
                answerIndex: 3, 
                explanation: "and connects clauses" 
            },
            { 
                q: "Which is an adjective?", 
                options: ["beauty", "slowly", "run", "red"], 
                answerIndex: 3, 
                explanation: "red describes noun" 
            },
            {
                q: "What is the main verb in 'She has been running'?",
                options: ["has", "been", "has been", "running"],
                answerIndex: 3,
                explanation: "Running is the main verb in present perfect continuous"
            },
            {
                q: "Which word is an adverb?",
                options: ["quicken", "quickness", "quick", "quickly"],
                answerIndex: 3,
                explanation: "Adverbs modify verbs and usually end in -ly"
            },
            {
                q: "Choose the sentence with correct subject-verb agreement:",
                options: ["The team are playing well", "Each students learn", "The teams is playing", "The team is playing well"],
                answerIndex: 3,
                explanation: "Singular subject needs singular verb"
            },
            {
                q: "Which is a preposition?",
                options: ["jump", "beautiful", "under", "happily"],
                answerIndex: 2,
                explanation: "Prepositions show relationships between words"
            },
            {
                q: "What tense is 'She will have finished'?",
                options: ["Simple future", "Present perfect", "Future perfect", "Past perfect"],
                answerIndex: 2,
                explanation: "Will + have + past participle = future perfect"
            }
        ]
    },

    SPORTS: {
        quiz1: [
            { 
                q: "How many players in a football (soccer) team on pitch?", 
                options: ["10", "9", "12", "11"], 
                answerIndex: 3, 
                explanation: "11 players" 
            },
            { 
                q: "A standard basketball quarter length (NBA)", 
                options: ["10 min", "15 min", "8 min", "12 min"], 
                answerIndex: 3, 
                explanation: "12 minutes" 
            },
            {
                q: "What is a dynamic stretch used for?",
                options: ["Increasing flexibility long-term", "Building muscle strength", "Cooling down after exercise", "Warming up before exercise"],
                answerIndex: 3,
                explanation: "Dynamic stretches prepare muscles for activity"
            },
            {
                q: "How long should a typical warm-up last?",
                options: ["20-30 minutes", "No warm-up needed", "1-2 minutes", "5-10 minutes"],
                answerIndex: 3,
                explanation: "Proper warm-up prepares cardiovascular system"
            },
            {
                q: "What is the heart rate zone for aerobic cardio training?",
                options: ["90-100% of max heart rate", "40-50% of max heart rate", "100%+ of max heart rate", "60-75% of max heart rate"],
                answerIndex: 3,
                explanation: "Aerobic zone allows sustained activity"
            },
            {
                q: "How many sets and reps for beginner strength training?",
                options: ["5 sets of 20 reps", "10 sets of 1 rep", "1 set of 5 reps", "3 sets of 8-12 reps"],
                answerIndex: 3,
                explanation: "Standard beginner resistance protocol"
            },
            {
                q: "Which exercise is best for core stability?",
                options: ["Bicep curl", "Plank", "Leg press", "Bench press"],
                answerIndex: 1,
                explanation: "Planks engage core muscles"
            }
        ],
        quiz2: [
            { 
                q: "Which exercise best for cardio?", 
                options: ["Bicep curl", "Plank", "Squat hold", "Running"], 
                answerIndex: 3, 
                explanation: "Running is cardio" 
            },
            { 
                q: "Stretching before workout should be:", 
                options: ["vibration", "none", "static", "dynamic"], 
                answerIndex: 3, 
                explanation: "dynamic warmups" 
            },
            {
                q: "What is the primary benefit of strength training?",
                options: ["Reducing body fat only", "Improving coordination", "Increasing flexibility", "Building muscle and bone density"],
                answerIndex: 3,
                explanation: "Resistance training builds strength and muscle"
            },
            {
                q: "In football/soccer, how many defenders are typically in a 4-3-3 formation?",
                options: ["5", "2", "3", "4"],
                answerIndex: 3,
                explanation: "4-3-3 formation has 4 defenders"
            },
            {
                q: "What does HIIT stand for?",
                options: ["High Intensity Interval Time", "High Impact Internal Training", "High Intensity Interval Training", "Heavy Intensity Internal Time"],
                answerIndex: 2,
                explanation: "HIIT = High Intensity Interval Training"
            },
            {
                q: "How many matches are in a best-of-five tennis match?",
                options: ["1", "2", "Up to 5", "3"],
                answerIndex: 2,
                explanation: "Best of 5 means first to win 3 sets"
            },
            {
                q: "What is the recommended rest period between strength training sets?",
                options: ["30-45 seconds", "1-2 minutes", "5-10 minutes", "Never rest"],
                answerIndex: 1,
                explanation: "Rest allows muscle recovery between sets"
            }
        ]
    },

    AI: {
        quiz1: [
            { 
                q: "What does 'supervised learning' require?", 
                options: ["No data", "Only images", "No human", "Labeled data"], 
                answerIndex: 3, 
                explanation: "Supervised learning needs labels" 
            },
            { 
                q: "What is an LLM?", 
                options: ["Little Learning Machine", "Long Label Model", "Linear Logistic Model", "Large Language Model"], 
                answerIndex: 3, 
                explanation: "Large Language Model" 
            },
            {
                q: "What is unsupervised learning used for?",
                options: ["Classifying labeled data", "Regression only", "Natural language processing only", "Finding patterns in unlabeled data"],
                answerIndex: 3,
                explanation: "Unsupervised learning discovers hidden patterns"
            },
            {
                q: "Which type of machine learning learns from feedback?",
                options: ["Supervised learning", "Unsupervised learning", "Transfer learning", "Reinforcement learning"],
                answerIndex: 3,
                explanation: "Reinforcement learning uses rewards and penalties"
            },
            {
                q: "What is an intelligent agent in AI?",
                options: ["A human programmer", "A database", "A neural network only", "An entity that perceives and acts based on environment"],
                answerIndex: 3,
                explanation: "Agents interact with environments through perception and action"
            },
            {
                q: "What does a neural network mimic?",
                options: ["Databases", "The human brain", "Computer processors", "Logic gates"],
                answerIndex: 1,
                explanation: "Neural networks are inspired by biological neurons"
            },
            {
                q: "Which sampling method uses random selection?",
                options: ["Stratified", "Systematic", "Simple random", "Cluster"],
                answerIndex: 2,
                explanation: "Simple random sampling selects randomly"
            }
        ],
        quiz2: [
            { 
                q: "What is overfitting?", 
                options: ["Model fits well", "No training", "Perfect generalization", "Model fits train too closely"], 
                answerIndex: 3, 
                explanation: "Overfitting = too tailored to train set" 
            },
            { 
                q: "Which is a metric for classification?", 
                options: ["MSE", "RMSE", "Variance", "Accuracy"], 
                answerIndex: 3, 
                explanation: "Accuracy for classification" 
            },
            {
                q: "What does exploratory data analysis (EDA) help with?",
                options: ["Training models only", "Deploying models", "Writing code", "Understanding data patterns and distributions"],
                answerIndex: 3,
                explanation: "EDA reveals insights before modeling"
            },
            {
                q: "What is Bayes' Theorem used for?",
                options: ["Finding averages", "Counting data", "Sorting data", "Calculating conditional probability"],
                answerIndex: 3,
                explanation: "Bayes' Theorem: P(A|B) = P(B|A)×P(A)/P(B)"
            },
            {
                q: "What is a major AI ethics concern?",
                options: ["Code efficiency", "Memory usage", "Processing speed", "Bias in training data"],
                answerIndex: 3,
                explanation: "Biased data leads to unfair model predictions"
            },
            {
                q: "What does 'generative AI' do?",
                options: ["Classifies data", "Finds patterns", "Creates new content", "Sorts information"],
                answerIndex: 2,
                explanation: "Generative AI generates new text, images, etc."
            },
            {
                q: "Which algorithm is commonly used for classification?",
                options: ["K-means", "Linear regression", "Random forest", "PCA"],
                answerIndex: 2,
                explanation: "Random forest is effective for classification tasks"
            }
        ]
    }
};