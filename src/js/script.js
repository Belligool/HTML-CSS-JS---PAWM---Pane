const subjects = {
    MATHEMATICS: { 
        image: "images/Viper2.png",
        logo: "images/ViperLogo.png",
      line: "Mathematics",
      subline: "XXXX",
      lessons: [
        { title: "Functions", url: "https://www.youtube.com/watch?v=5D5b3c1DjZw", desc: "bla bla bla" },
        { title: "Limits", url: "https://www.youtube.com/watch?v=YNstP0ESndU", desc: "bla bla bla"},
        { title: "Derivatives", url: "https://www.youtube.com/watch?v=5yfh5cf4-0w", desc: "bla bla bla" },
        { title: "Application of Derivatives", url: "https://www.youtube.com/watch?v=WiOdQQYLMU4", desc: "bla bla bla"},
        { title: "Integrals", url: "https://www.youtube.com/watch?v=rfG8ce4nNh0", desc: "bla bla bla" },
        { title: "Application of Integrals", url: "https://www.youtube.com/watch?v=H71xfyzbkZI", desc: "bla bla bla"},
        { title: "Transcendants Functions", url: "https://www.youtube.com/watch?v=F_u6vAWmWl0", desc: "bla bla bla" }
      ]
    },
    CHEMISTRY: {
      image: "images/Viper2.png",
      logo: "images/ViperLogo.png",
      line: "General Chemistry with Viper",
      subline: "Explore Chemistry",
      lessons: [
        { title: "Elements, Molecules and The Periodic Table", url: "https://www.youtube.com/watch?v=TXEXWN8J8BE", desc: "bla bla bla" },
        { title: "The Concept of Moles and Stoichiometry", url: "https://www.youtube.com/watch?v=UPhIEtYKjd8", desc: "bla bla bla" },
        { title: "Energy and It's Transformations", url: "https://www.youtube.com/watch?v=PKm4ZVNmJyQ", desc: "bla bla bla"},
        { title: "Atomic Structure", url: "https://www.youtube.com/watch?v=OH-aSu-rWgk", desc: "bla bla bla" },
        { title: "Chemical Bonds and Molecular Structure", url: "https://www.youtube.com/watch?v=H1-COuLbvzI", desc: "bla bla bla" },
        { title: "Intermolecular Forces and Properties of Liquids", url: "https://www.youtube.com/watch?v=ubLcR2un-Ao", desc: "bla bla bla" },
        { title: "Solids", url: "https://www.youtube.com/watch?v=Z57pyi7Y5lg", desc: "bla bla bla" }
      ]
    },
    ENGLISH: { 
        image: "images/LunaSnow.png",
        logo: "images/LSlogo.png",
        line: "English Language",
        subline: "XXXX",
        lessons: [
          { title: "Past Tense, Present Tense, Future Tense", url: "https://www.youtube.com/watch?v=ld7RqdoRAM0", desc: "bla bla bla" },
          { title: "Grammar", url: "https://www.youtube.com/watch?v=QXVzmzhxWWc", desc: "bla bla bla" },
          { title: "Vocabulary", url: "https://www.youtube.com/watch?v=u1QVJ77GGgg", desc: "bla bla bla" },
          { title: "Pronunciation", url: "https://www.youtube.com/watch?v=NgwlinpopRQ", desc: "bla bla bla" },
          { title: "Advanced English", url: "https://www.youtube.com/watch?v=Iv4F-YV0TxY", desc: "bla bla bla"}
        ]
      },
    SPORTS: {
      image: "images/Magik.png",
      logo: "images/MLogo.png",
      line: "Sports",
      subline: "XXXX",
      lessons: [
        { title: "Warm-up and Stretching Basics", url: "https://www.youtube.com/watch?v=2L2lnxIcNmo", desc: "bla bla bla" },
        { title: "Cardio Training 101", url: "https://www.youtube.com/watch?v=ml6cT4AZdqI", desc: "bla bla bla" },
        { title: "Strength Training for Beginners", url: "https://www.youtube.com/watch?v=xO3NJ7A7w5o", desc: "bla bla bla" },
        { title: "Study Case: Manchester United", url: "https://youtu.be/Dki5tjN0rDE?si=slRvri_8aGfygXBs", desc: "bla bla bla" },
        { title: "Football Tactics", url: "https://www.youtube.com/watch?v=4wAG5ZUJ4eI", desc: "bla bla bla"}
      ]
    },
    AI: {
        image: "images/Viper2.png",
        logo: "images/ViperLogo.png",
        line: "Artificial Intelligence & Data Literacy",
        subline: "XXXX",
        lessons: [
          { title: "Types of Data and Sampling Methods", url: "https://www.youtube.com/watch?v=jk68oU9nu5E", desc: "bla bla bla" },
          { title: "Exploratory Data Analysis (EDA)", url: "https://www.youtube.com/watch?v=Liv6eeb1VfE", desc: "bla bla bla" },
          { title: "Univariate and Bivariate Data Analysis", url: "https://www.youtube.com/watch?v=g5OmksmzaWI", desc: "bla bla bla" },
          { title: "Probability and Bayes' Theorem", url: "https://www.youtube.com/watch?v=XQoLVl31ZfQ", desc: "bla bla bla" },
          { title: "Definition of Artificial Intelligence (AI)", url: "https://www.youtube.com/watch?v=JcXKbUIebrU", desc: "bla bla bla" },
          { title: "Intelligent Agent Levels and Types of Machine Learning", url: "https://www.youtube.com/watch?v=fXizBc03D7E", desc: "bla bla bla" },
          { title: "Supervised Machine Learning", url: "https://www.youtube.com/watch?v=Mu3POlNoLdc", desc: "bla bla bla" },
          { title: "Generative AI Large Language Model (LLM)", url: "https://www.youtube.com/watch?v=AneKPA_0b0s", desc: "bla bla bla" },
          { title: "AI Ethics and Case Studies", url: "https://www.youtube.com/watch?v=YT-lPqYbv9k", desc: "bla bla bla" }
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

    const link = document.createElement("a");
    link.href = lesson.url;
    link.target = "_blank";
    link.classList.add("lesson-card");
    link.textContent = lesson.title;
    link.innerHTML = `
      <span class="lesson-title">${lesson.title}</span>
      <span class="lesson-desc">${lesson.desc || ""}</span>
    `;

    lessonsContainer.appendChild(link);
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
