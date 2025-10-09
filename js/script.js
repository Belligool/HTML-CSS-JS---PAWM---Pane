const subjects = {
    MATHEMATICS: { 
        image: "images/Killjoy.png",
        logo: "images/KJLogo.png",
      line: "Mathematics",
      subline: "Featuring Killjoy",
      lessons: [
        { title: "Functions", url: "https://www.youtube.com/watch?v=5D5b3c1DjZw", desc: "Learn how function works!" },
        { title: "Limits", url: "https://www.youtube.com/watch?v=YNstP0ESndU", desc: "Learn how limits works!"},
        { title: "Derivatives", url: "https://www.youtube.com/watch?v=5yfh5cf4-0w", desc: "Learn about Derivatives!" },
        { title: "Application of Derivatives", url: "https://www.youtube.com/watch?v=WiOdQQYLMU4", desc: "Learn about the Application of Derivatives!"},
        { title: "Integrals", url: "https://www.youtube.com/watch?v=rfG8ce4nNh0", desc: "Learn about Integrals!" },
        { title: "Application of Integrals", url: "https://www.youtube.com/watch?v=H71xfyzbkZI", desc: "Learn about the application of integrals!"},
        { title: "Transcendants Functions", url: "https://www.youtube.com/watch?v=F_u6vAWmWl0", desc: "Learn about transcendant functions!" }
      ]
    },
    CHEMISTRY: {
      image: "images/Viper.png",
      logo: "images/ViperLogo.png",
      line: "General Chemistry",
      subline: "Featuring Viper",
      lessons: [
        { title: "Elements, Molecules and The Periodic Table", url: "https://www.youtube.com/watch?v=TXEXWN8J8BE", desc: "Learn all about the periodic table!" },
        { title: "The Concept of Moles and Stoichiometry", url: "https://www.youtube.com/watch?v=UPhIEtYKjd8", desc: "Learn about moles and stoichiometry!" },
        { title: "Energy and It's Transformations", url: "https://www.youtube.com/watch?v=PKm4ZVNmJyQ", desc: "Learn about energies and how it transforms!"},
        { title: "Atomic Structure", url: "https://www.youtube.com/watch?v=OH-aSu-rWgk", desc: "Learn about the structures of atoms!" },
        { title: "Chemical Bonds and Molecular Structure", url: "https://www.youtube.com/watch?v=H1-COuLbvzI", desc: "Learn about chemical bonds!" },
        { title: "Intermolecular Forces and Properties of Liquids", url: "https://www.youtube.com/watch?v=ubLcR2un-Ao", desc: "Learn various things about intermolecular forces!" },
        { title: "Solids", url: "https://www.youtube.com/watch?v=Z57pyi7Y5lg", desc: "Learn about solids in chemistry!" }
      ]
    },
    ENGLISH: { 
        image: "images/LunaSnow.png",
        logo: "images/LSlogo.png",
        line: "English Language",
        subline: "Featuring Luna Snow",
        lessons: [
          { title: "Past Tense, Present Tense, Future Tense", url: "https://www.youtube.com/watch?v=ld7RqdoRAM0", desc: "Learn about the various tenses in the English language!" },
          { title: "Grammar", url: "https://www.youtube.com/watch?v=QXVzmzhxWWc", desc: "Learn about how to use grammars correctly!" },
          { title: "Vocabulary", url: "https://www.youtube.com/watch?v=u1QVJ77GGgg", desc: "Learn how to build your vocabulary!" },
          { title: "Pronunciation", url: "https://www.youtube.com/watch?v=NgwlinpopRQ", desc: "Learn how to pronounce some words!" },
          { title: "Advanced English", url: "https://www.youtube.com/watch?v=Iv4F-YV0TxY", desc: "Learn about advanced English!"}
        ]
      },
    SPORTS: {
      image: "images/Magik.png",
      logo: "images/MLogo.png",
      line: "Sports",
      subline: "Featuring Magik",
      lessons: [
        { title: "Warm-up and Stretching Basics", url: "https://www.youtube.com/watch?v=2L2lnxIcNmo", desc: "Learn the basics before you workout!" },
        { title: "Cardio Training 101", url: "https://www.youtube.com/watch?v=ml6cT4AZdqI", desc: "Learn how to properly train cardio!" },
        { title: "Strength Training for Beginners", url: "https://www.youtube.com/watch?v=xO3NJ7A7w5o", desc: "Learn how to up your strength!" },
        { title: "Study Case: Manchester United", url: "https://youtu.be/Dki5tjN0rDE?si=slRvri_8aGfygXBs", desc: "Learn how NOT to play football so you don't make the same mistake!" },
        { title: "Football Tactics", url: "https://www.youtube.com/watch?v=4wAG5ZUJ4eI", desc: "Learn from The Special One!"}
      ]
    },
    AI: {
        image: "images/Ultron.png",
        logo: "images/ULogo.png",
        line: "Artificial Intelligence & Data Literacy",
        subline: "Featuring Ultron",
        lessons: [
          { title: "Types of Data and Sampling Methods", url: "https://www.youtube.com/watch?v=jk68oU9nu5E", desc: "Learn about the various data types!" },
          { title: "Exploratory Data Analysis (EDA)", url: "https://www.youtube.com/watch?v=Liv6eeb1VfE", desc: "Learn about advanced data analysis!" },
          { title: "Univariate and Bivariate Data Analysis", url: "https://www.youtube.com/watch?v=g5OmksmzaWI", desc: "Learn about the two types of data analysis!" },
          { title: "Probability and Bayes' Theorem", url: "https://www.youtube.com/watch?v=XQoLVl31ZfQ", desc: "Learn about probability!" },
          { title: "Definition of Artificial Intelligence (AI)", url: "https://www.youtube.com/watch?v=JcXKbUIebrU", desc: "Learn exactly what an AI is!" },
          { title: "Intelligent Agent Levels and Types of Machine Learning", url: "https://www.youtube.com/watch?v=fXizBc03D7E", desc: "Learn how an AI learn!" },
          { title: "Supervised Machine Learning", url: "https://www.youtube.com/watch?v=Mu3POlNoLdc", desc: "Learn how an AI study under supervision!" },
          { title: "Generative AI Large Language Model (LLM)", url: "https://www.youtube.com/watch?v=AneKPA_0b0s", desc: "Learn about generative AI!" },
          { title: "AI Ethics and Case Studies", url: "https://www.youtube.com/watch?v=YT-lPqYbv9k", desc: "Learn about the ethics of AI usage!" }
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
    card.innerHTML = `
      <span class="lesson-title">${lesson.title}</span>
      <span class="lesson-desc">${lesson.desc || ""}</span>
      `;

    card.addEventListener("click", () => {
      openCourseModal(lesson);
    });

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
