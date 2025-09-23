const subjects = {
    MATH: { //ganti link
        image: "Viper2.png",
      line: "QUICK MAFS",
      lessons: [
        { title: "Functions", url: "https://www.youtube.com/watch?v=5D5b3c1DjZw" },
        { title: "Limits", url: "https://www.youtube.com/watch?v=YNstP0ESndU" },
        { title: "Derivatives", url: "https://www.youtube.com/watch?v=5yfh5cf4-0w" },
        { title: "Application of Derivatives", url: "https://www.youtube.com/watch?v=WiOdQQYLMU4"},
        { title: "Integrals", url: "https://www.youtube.com/watch?v=rfG8ce4nNh0" },
        { title: "Application of Integrals", url: "https://www.youtube.com/watch?v=H71xfyzbkZI"},
        { title: "Transcendants Functions", url: "https://www.youtube.com/watch?v=F_u6vAWmWl0" }
      ]
    },
    CHEM: {
      image: "Viper2.png",
      line: "Chemistry Help",
      lessons: [
        { title: "Elements, Molecules and The Periodic Table", url: "https://www.youtube.com/watch?v=TXEXWN8J8BE" },
        { title: "The Concept of Moles and Stoichiometry", url: "https://www.youtube.com/watch?v=UPhIEtYKjd8" },
        { title: "Energy and It's Transformations", url: "https://www.youtube.com/watch?v=PKm4ZVNmJyQ"},
        { title: "Atomic Structure", url: "https://www.youtube.com/watch?v=OH-aSu-rWgk" },
        { title: "Chemical Bonds and Molecular Structure", url: "https://www.youtube.com/watch?v=H1-COuLbvzI" },
        { title: "Intermolecular Forces and Properties of Liquids", url: "https://www.youtube.com/watch?v=ubLcR2un-Ao" },
        { title: "Solids", url: "https://www.youtube.com/watch?v=Z57pyi7Y5lg" }
      ]
    },
    ENGLISH: { //ganti link
        image: "Viper2.png",
        line: "Come on England!",
        lessons: [
          { title: "Past Tense, Present Tense, Future Tense", url: "https://www.youtube.com/watch?v=ld7RqdoRAM0" },
          { title: "Grammar", url: "https://www.youtube.com/watch?v=QXVzmzhxWWc" },
          { title: "Vocabulary", url: "https://www.youtube.com/watch?v=u1QVJ77GGgg" },
          { title: "Pronunciation", url: "https://www.youtube.com/watch?v=NgwlinpopRQ" }
        ]
      },
    SPORTS: {
      image: "Viper2.png",
      line: "Train your body, train your mind!",
      lessons: [
        { title: "Warm-up and Stretching Basics", url: "https://www.youtube.com/watch?v=2L2lnxIcNmo" },
        { title: "Cardio Training 101", url: "https://www.youtube.com/watch?v=ml6cT4AZdqI" },
        { title: "Strength Training for Beginners", url: "https://www.youtube.com/watch?v=k1a2tbhbPXY" },
        { title: "Importance of Rest and Recovery", url: "https://www.youtube.com/watch?v=9z5sPZPjMsk" }
      ]
    },
    AI: { //ganti link
        image: "Viper2.png",
        line: "Ultronn!",
        lessons: [
          { title: "Types of Data and Sampling Methods", url: "https://www.youtube.com/watch?v=jk68oU9nu5E" },
          { title: "Exploratory Data Analysis (EDA)", url: "https://www.youtube.com/watch?v=Liv6eeb1VfE" },
          { title: "Univariate and Bivariate Data Analysis", url: "https://www.youtube.com/watch?v=g5OmksmzaWI" },
          { title: "Probability and Bayes' Theorem", url: "https://www.youtube.com/watch?v=XQoLVl31ZfQ" },
          { title: "Definition of Artificial Intelligence (AI)", url: "https://www.youtube.com/watch?v=JcXKbUIebrU" },
          { title: "Intelligent Agent Levels and Types of Machine Learning", url: "https://www.youtube.com/watch?v=fXizBc03D7E" },
          { title: "Supervised Machine Learning", url: "https://www.youtube.com/watch?v=Mu3POlNoLdc" },
          { title: "Generative AI Large Language Model (LLM)", url: "https://www.youtube.com/watch?v=AneKPA_0b0s" },
          { title: "AI Ethics and Case Studies", url: "https://www.youtube.com/watch?v=YT-lPqYbv9k" }
        ]
      }
  };


const navItems = document.querySelectorAll("nav li");
const characterImg = document.querySelector(".character img");
const starterLine = document.querySelector(".starter-line");
const lessonsContainer = document.querySelector(".lessons");

function loadSubject(subject) {
  const data = subjects[subject];
  if (!data) return;

  characterImg.src = data.image;
  starterLine.textContent = data.line;

  lessonsContainer.innerHTML = "";

  data.lessons.forEach(lesson => {
    const card = document.createElement("div");
    card.classList.add("lesson-card");

    const link = document.createElement("a");
    link.href = lesson.url;
    link.target = "_blank";
    link.textContent = lesson.title;

    card.appendChild(link);
    lessonsContainer.appendChild(card);
  });

  navItems.forEach(li => li.classList.remove("active"));
  document.querySelector(`nav li:nth-child(${getTabIndex(subject)})`).classList.add("active");
}

function getTabIndex(subject) {
  switch(subject) {
    case "MATH": return 1;
    case "CHEM": return 2;
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

loadSubject("MATH");
