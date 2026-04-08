/* =========================================================
   HopeBridge Trust – Main JavaScript
   ========================================================= */

/* ----------------------------------------------------------
   Data
   ---------------------------------------------------------- */
const projects = [
  {
    name: "Project Vidya (Education)",
    goal: "₹8,00,000 raised",
    progress: 68,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format",
    desc: "Building digital classrooms in 20 villages."
  },
  {
    name: "Swasthya Healthcare",
    goal: "₹12,00,000 raised",
    progress: 45,
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&auto=format",
    desc: "Mobile health units & medical camps."
  },
  {
    name: "Green Earth Initiative",
    goal: "₹4,50,000 raised",
    progress: 82,
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format",
    desc: "Reforestation & clean water projects."
  }
];

const testimonials = [
  {
    quote: "HopeBridge gave my daughter a scholarship. Today she's a nurse!",
    author: "– Sunita, Mother"
  },
  {
    quote: "I volunteered for the healthcare drive and witnessed real change.",
    author: "– Rohan, Volunteer"
  },
  {
    quote: "Their transparency is unmatched. I donate monthly with trust.",
    author: "– Meera, Donor"
  }
];

/* ----------------------------------------------------------
   Render: Projects
   ---------------------------------------------------------- */
function loadProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (proj) => `
    <div class="project-card">
      <div class="project-img" style="background-image: url('${proj.img}');"></div>
      <div class="project-content">
        <h3>${proj.name}</h3>
        <p>${proj.desc}</p>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${proj.progress}%;"></div>
        </div>
        <p><strong>${proj.goal}</strong> · ${proj.progress}% funded</p>
        <button class="cta-btn donateProjectBtn" style="padding:0.5rem 1rem; font-size:0.9rem; margin-top:0.75rem;">
          Support this project
        </button>
      </div>
    </div>
  `
    )
    .join("");

  document.querySelectorAll(".donateProjectBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("❤️ Thank you! You will be redirected to our donation gateway.");
    });
  });
}

/* ----------------------------------------------------------
   Render: Testimonials
   ---------------------------------------------------------- */
function loadTestimonials() {
  const container = document.getElementById("testimonialsContainer");
  if (!container) return;

  container.innerHTML = testimonials
    .map(
      (t) => `
    <div class="testimonial">
      <i class="fas fa-quote-left" style="color:var(--secondary);"></i>
      <p>${t.quote}</p>
      <h4>${t.author}</h4>
    </div>
  `
    )
    .join("");
}

/* ----------------------------------------------------------
   Donation: Toggle One-time / Recurring
   ---------------------------------------------------------- */
let isRecurring = true;

const oneTimeBtn      = document.getElementById("oneTimeBtn");
const recurringBtn    = document.getElementById("recurringBtn");
const donationTypeText = document.getElementById("donationTypeText");

function updateDonationUI() {
  if (isRecurring) {
    donationTypeText.textContent = "🔄 Monthly recurring gift – steady impact for communities.";
    recurringBtn.classList.add("active");
    oneTimeBtn.classList.remove("active");
  } else {
    donationTypeText.textContent = "💚 One-time donation – immediate difference today.";
    oneTimeBtn.classList.add("active");
    recurringBtn.classList.remove("active");
  }
}

if (oneTimeBtn && recurringBtn) {
  oneTimeBtn.addEventListener("click", () => {
    isRecurring = false;
    updateDonationUI();
  });
  recurringBtn.addEventListener("click", () => {
    isRecurring = true;
    updateDonationUI();
  });
}

/* ----------------------------------------------------------
   Donation: Amount Selector
   ---------------------------------------------------------- */
const customAmountInput = document.getElementById("customAmount");
const amountOptions     = document.querySelectorAll(".amount-option");

amountOptions.forEach((opt) => {
  opt.addEventListener("click", function () {
    amountOptions.forEach((o) => o.classList.remove("selected"));
    this.classList.add("selected");
    if (customAmountInput) {
      customAmountInput.value = this.getAttribute("data-amt");
    }
  });
});

/* ----------------------------------------------------------
   Donation: Process Button
   ---------------------------------------------------------- */
const processDonateBtn = document.getElementById("processDonateBtn");
if (processDonateBtn) {
  processDonateBtn.addEventListener("click", () => {
    let amount = customAmountInput ? customAmountInput.value.trim() : "";
    if (!amount || isNaN(parseInt(amount, 10))) amount = "500";
    const type = isRecurring ? "monthly recurring" : "one-time";
    alert(
      `✅ Thank you for your ${type} donation of ₹${amount}!\nA receipt will be sent to your email.\n(Demo transaction – secure)`
    );
    console.log(`Donation logged: ${type} amount ₹${amount}`);
  });
}

/* ----------------------------------------------------------
   Volunteer Form
   ---------------------------------------------------------- */
const volForm = document.getElementById("volunteerFormElem");
if (volForm) {
  volForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name    = document.getElementById("volName").value.trim();
    const msgDiv  = document.getElementById("volMessage");
    if (name) {
      msgDiv.innerHTML = `🎉 Thanks <strong>${name}</strong>, our team will reach out within 48 hours!`;
      volForm.reset();
    } else {
      msgDiv.textContent = "Please fill in your name.";
    }
  });
}

/* ----------------------------------------------------------
   Contact Form
   ---------------------------------------------------------- */
const contactForm = document.getElementById("contactForm");
const feedbackDiv = document.getElementById("formFeedback");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    feedbackDiv.innerHTML = '<span style="color:green;">✨ Message sent! We\'ll reply shortly. (demo)</span>';
    contactForm.reset();
    setTimeout(() => (feedbackDiv.innerHTML = ""), 3500);
  });
}

/* ----------------------------------------------------------
   Hero Donate Button – Smooth Scroll
   ---------------------------------------------------------- */
const heroDonateBtn = document.getElementById("heroDonateBtn");
if (heroDonateBtn) {
  heroDonateBtn.addEventListener("click", () => {
    document.getElementById("donation")?.scrollIntoView({ behavior: "smooth" });
  });
}

/* ----------------------------------------------------------
   Mobile Menu Toggle
   ---------------------------------------------------------- */
const mobileBtn   = document.getElementById("mobileMenuBtn");
const navLinksDiv = document.getElementById("navLinks");

if (mobileBtn && navLinksDiv) {
  mobileBtn.addEventListener("click", () => {
    navLinksDiv.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksDiv.classList.remove("active");
    });
  });
}

/* ----------------------------------------------------------
   Live Counter Effect
   ---------------------------------------------------------- */
const livesSpan = document.getElementById("livesCount");
if (livesSpan) {
  let count = 5342;
  setInterval(() => {
    count += Math.floor(Math.random() * 5);
    livesSpan.textContent = count.toLocaleString("en-IN") + "+";
  }, 5000);
}

/* ----------------------------------------------------------
   Init
   ---------------------------------------------------------- */
loadProjects();
loadTestimonials();
updateDonationUI();
