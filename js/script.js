const subjects = {
  MATHEMATICS: { 
    image: "images/Killjoy.png",
    logo: "images/KJLogo.png",
    line: "Mathematics",
    subline: "Featuring Killjoy",
    lessons: [
      { title: "Functions", url: "https://www.youtube.com/watch?v=5D5b3c1DjZw", desc: "Discover the fundamentals of mathematical functions, including how to evaluate, compose, and transform them. Learn about domain and range, and explore real-world applications of different function types." },
      { title: "Limits", url: "https://www.youtube.com/watch?v=YNstP0ESndU", desc: "Understand the concept of limits and their crucial role in calculus. Explore how functions behave as they approach specific values, learn limit properties, and master techniques for evaluating limits analytically and graphically." },
      { title: "Derivatives", url: "https://www.youtube.com/watch?v=5yfh5cf4-0w", desc: "Master the derivative as the foundation of calculus. Learn how to compute derivatives using the power rule, chain rule, and product rule. Understand the geometric and physical interpretation of derivatives as rates of change." },
      { title: "Application of Derivatives", url: "https://www.youtube.com/watch?v=WiOdQQYLMU4", desc: "Apply derivatives to solve real-world problems including optimization, motion analysis, and curve sketching. Learn to find critical points, determine concavity, and use derivatives to maximize or minimize quantities in practical scenarios." },
      { title: "Integrals", url: "https://www.youtube.com/watch?v=rfG8ce4nNh0", desc: "Explore integration as the reverse of differentiation. Learn indefinite and definite integrals, master fundamental integration techniques, and understand the Fundamental Theorem of Calculus that connects derivatives and integrals." },
      { title: "Application of Integrals", url: "https://www.youtube.com/watch?v=H71xfyzbkZI", desc: "Discover how to use integrals to solve practical problems such as finding areas under curves, calculating volumes of solids, and computing work and pressure. Learn both computational methods and conceptual applications." },
      { title: "Transcendants Functions", url: "https://www.youtube.com/watch?v=F_u6vAWmWl0", desc: "Study transcendental functions including exponential, logarithmic, and trigonometric functions. Understand their properties, derivatives, integrals, and applications in modeling real-world phenomena like population growth and wave behavior." }
    ]
  },
  CHEMISTRY: {
    image: "images/Viper.png",
    logo: "images/ViperLogo.png",
    line: "General Chemistry",
    subline: "Featuring Viper",
    lessons: [
      { title: "Elements, Molecules and The Periodic Table", url: "https://www.youtube.com/watch?v=TXEXWN8J8BE", desc: "Explore the organization of the periodic table and understand how elements are classified by properties and electron configuration. Learn about atomic structure, periodic trends, and how to predict element behavior based on their position in the table." },
      { title: "The Concept of Moles and Stoichiometry", url: "https://www.youtube.com/watch?v=UPhIEtYKjd8", desc: "Master the mole concept as a fundamental tool in chemistry for quantifying matter and reactions. Learn stoichiometry to predict quantities of products and reactants in chemical reactions, and solve complex mass-to-mole conversion problems." },
      { title: "Energy and It's Transformations", url: "https://www.youtube.com/watch?v=PKm4ZVNmJyQ", desc: "Understand energy transformations in chemical reactions including endothermic and exothermic processes. Learn about enthalpy, heat capacity, calorimetry, and how energy conservation principles apply to chemistry and thermodynamics." },
      { title: "Atomic Structure", url: "https://www.youtube.com/watch?v=OH-aSu-rWgk", desc: "Delve into the structure of atoms including protons, neutrons, and electrons. Understand electron configuration, quantum numbers, orbitals, and the Bohr model. Learn how atomic structure determines chemical properties and reactivity." },
      { title: "Chemical Bonds and Molecular Structure", url: "https://www.youtube.com/watch?v=H1-COuLbvzI", desc: "Explore covalent, ionic, and metallic bonds that hold atoms together. Learn about molecular geometry, Lewis structures, VSEPR theory, and how bonding determines molecular properties and reactivity." },
      { title: "Intermolecular Forces and Properties of Liquids", url: "https://www.youtube.com/watch?v=ubLcR2un-Ao", desc: "Investigate intermolecular forces including ionic interactions, dipole-dipole forces, hydrogen bonding, and London dispersion forces. Understand how these forces affect physical properties of liquids such as boiling point, solubility, and surface tension." },
      { title: "Solids", url: "https://www.youtube.com/watch?v=Z57pyi7Y5lg", desc: "Study the structure and properties of solid materials including crystalline and amorphous solids. Learn about crystal lattices, metallic bonding, ionic crystals, and covalent network solids, and how structure determines material properties." }
    ]
  },
  ENGLISH: { 
      image: "images/LunaSnow.png",
      logo: "images/LSlogo.png",
      line: "English Language",
      subline: "Featuring Luna Snow",
      lessons: [
        { title: "Past Tense, Present Tense, Future Tense", url: "https://www.youtube.com/watch?v=ld7RqdoRAM0", desc: "Master all three main tenses in English grammar. Learn simple, continuous, and perfect forms for each tense. Understand how to use tenses appropriately in writing and speech to convey actions at different times." },
        { title: "Grammar", url: "https://www.youtube.com/watch?v=QXVzmzhxWWc", desc: "Build strong foundational grammar skills including parts of speech, sentence structure, and punctuation. Learn about subject-verb agreement, proper clause use, and common grammatical errors to avoid in formal and casual writing." },
        { title: "Vocabulary", url: "https://www.youtube.com/watch?v=u1QVJ77GGgg", desc: "Expand your vocabulary through systematic learning of word families, synonyms, and antonyms. Discover memory techniques and context clues to enhance comprehension and improve your ability to express ideas precisely." },
        { title: "Pronunciation", url: "https://www.youtube.com/watch?v=NgwlinpopRQ", desc: "Develop clear and accurate pronunciation of English words. Learn phonetic symbols, stress patterns, and intonation techniques. Practice common mispronunciations and understand how to improve your spoken English fluency." },
        { title: "Advanced English", url: "https://www.youtube.com/watch?v=Iv4F-YV0TxY", desc: "Explore sophisticated English language skills including complex sentence structures, idiomatic expressions, and rhetorical devices. Master advanced writing techniques, literary analysis, and nuanced communication for professional and academic contexts." }
      ]
    },
  SPORTS: {
    image: "images/Magik.png",
    logo: "images/MLogo.png",
    line: "Sports",
    subline: "Featuring Magik",
    lessons: [
      { title: "Warm-up and Stretching Basics", url: "https://www.youtube.com/watch?v=2L2lnxIcNmo", desc: "Learn essential warm-up and stretching techniques to prepare your body for exercise and prevent injuries. Understand dynamic stretches for pre-workout preparation and static stretches for post-workout recovery and flexibility improvement." },
      { title: "Cardio Training 101", url: "https://www.youtube.com/watch?v=ml6cT4AZdqI", desc: "Master cardiovascular training fundamentals including aerobic exercise, heart rate zones, and workout intensity. Learn various cardio methods like running, cycling, and swimming to build endurance and improve overall cardiovascular health." },
      { title: "Strength Training for Beginners", url: "https://www.youtube.com/watch?v=xO3NJ7A7w5o", desc: "Start your strength training journey with proper form, appropriate weights, and safe progression. Learn basic exercises for different muscle groups, understand rep and set schemes, and discover how to build muscle safely as a beginner." },
      { title: "Study Case: Manchester United", url: "https://youtu.be/Dki5tjN0rDE?si=slRvri_8aGfygXBs", desc: "Analyze Manchester United's football strategies, team dynamics, and tactical approaches. Study real match examples to understand how formations, player positioning, and strategic planning impact game outcomes and team performance." },
      { title: "Football Tactics", url: "https://www.youtube.com/watch?v=4wAG5ZUJ4eI", desc: "Explore offensive and defensive football tactics including formations, positioning strategies, and set-piece execution. Learn how elite coaches design plays, manage transitions, and adapt strategies to overcome opponents and control match flow." }
    ]
  },
  AI: {
      image: "images/Ultron.png",
      logo: "images/ULogo.png",
      line: "Artificial Intelligence & Data Literacy",
      subline: "Featuring Ultron",
      lessons: [
        { title: "Types of Data and Sampling Methods", url: "https://www.youtube.com/watch?v=jk68oU9nu5E", desc: "Understand different data types including categorical, numerical, and time-series data. Learn sampling methods such as simple random, stratified, cluster, and systematic sampling to ensure representative and reliable datasets for analysis." },
        { title: "Exploratory Data Analysis (EDA)", url: "https://www.youtube.com/watch?v=Liv6eeb1VfE", desc: "Master exploratory data analysis techniques to understand data characteristics, distributions, and relationships. Learn to use visualizations and statistical summaries to identify patterns, outliers, and insights before building predictive models." },
        { title: "Univariate and Bivariate Data Analysis", url: "https://www.youtube.com/watch?v=g5OmksmzaWI", desc: "Analyze single variables and relationships between two variables using statistical methods and visualizations. Learn about correlation, regression, and techniques for understanding how variables interact and influence one another." },
        { title: "Probability and Bayes' Theorem", url: "https://www.youtube.com/watch?v=XQoLVl31ZfQ", desc: "Explore probability theory and conditional probability concepts. Master Bayes' Theorem for updating probabilities based on new evidence, and understand its applications in machine learning, statistics, and decision-making." },
        { title: "Definition of Artificial Intelligence (AI)", url: "https://www.youtube.com/watch?v=JcXKbUIebrU", desc: "Understand what artificial intelligence encompasses including machine learning, deep learning, and natural language processing. Learn how AI differs from traditional programming and explore the various subfields and applications of AI technology." },
        { title: "Intelligent Agent Levels and Types of Machine Learning", url: "https://www.youtube.com/watch?v=fXizBc03D7E", desc: "Discover intelligent agents and their levels of sophistication from reactive to learning-based systems. Understand the three main types of machine learning: supervised, unsupervised, and reinforcement learning, and their distinct applications." },
        { title: "Supervised Machine Learning", url: "https://www.youtube.com/watch?v=Mu3POlNoLdc", desc: "Master supervised learning algorithms including linear regression, decision trees, and support vector machines. Learn how to train models on labeled data, evaluate performance, and apply supervised learning to classification and regression problems." },
        { title: "Generative AI Large Language Model (LLM)", url: "https://www.youtube.com/watch?v=AneKPA_0b0s", desc: "Explore generative AI and large language models that create new text, images, and content. Understand transformer architecture, training methods, and real-world applications of LLMs in chatbots, text generation, and creative AI systems." },
        { title: "AI Ethics and Case Studies", url: "https://www.youtube.com/watch?v=YT-lPqYbv9k", desc: "Examine ethical considerations in AI development including bias, fairness, transparency, and accountability. Study real-world case studies demonstrating AI's impact on society and learn best practices for developing responsible and ethical AI systems." }
      ]
    }
};


const navItems = document.querySelectorAll(".sub-header nav li");
const characterBg = document.querySelector(".character-bg");
const starterLine = document.querySelector(".starter-line");
const lessonsContainer = document.querySelector(".lessons");
const logobg = document.querySelector(".logo-bg");
const subline = document.querySelector(".subline");


function loadSubject(subject) {
  const data = subjects[subject];
  if (!data) return;

  characterBg.style.backgroundImage = `url(${data.image})`;
  logobg.style.backgroundImage = `url(${data.logo})`;
  starterLine.textContent = data.line;
  subline.textContent = data.subline || "";

  lessonsContainer.innerHTML = "";

  data.lessons.forEach(lesson => {
    const card = document.createElement("div");
    card.classList.add("lesson-card");
    card.innerHTML = `<span class="lesson-title">${lesson.title}</span>`;

    card.addEventListener("click", () => openCourseModal(lesson));

    lessonsContainer.appendChild(card);
  });

  navItems.forEach(li => {
    li.classList.remove("active");
    if (li.textContent.trim().toUpperCase() === subject){
      li.classList.add("active")
    }
  });
}

function getTabIndex(subject) {
  switch(subject) {
    case "MATHEMATICS": return 1;
    case "CHEMISTRY": return 2;
    case "ENGLISH": return 3;
    case "SPORTS": return 4;
    case "AI": return 5;
  }
}

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const subject = item.textContent.trim();
    loadSubject(subject);
  });
});

loadSubject("MATHEMATICS");

const modal = document.getElementById("courseModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPdf = document.getElementById("modalPdf");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close-btn");

function openCourseModal(lesson) {
  modalTitle.textContent = lesson.title;
  modalDescription.textContent = lesson.desc || "No description available.";

  const safeName = lesson.title.replace(/\s+/g, "_").toLowerCase();
  modalPdf.href = `materials/${safeName}.pdf`;
  modalVideo.href = lesson.url;

  modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
