const review = document.getElementById("review");
const imageContainer = document.getElementById("image-container");
const textContainer = document.getElementById("info")
const roleContainer = document.getElementById("role");
const nameContainer = document.getElementById("author");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Creating testimonial profiles

const testimonials = [
    {
        name: "Paulo Alto",
        job: "Senior Software Engineer",
        text: "Working with this team has been a transformative experience. Their commitment to innovation and excellence is unmatched. The collaborative environment has enabled me to push the boundaries of what's possible in software development. I look forward to many more successful projects together."
    },
    {
        name: "Susan Smith",
        job: "Corporate Lawyer",
        text: "I have been thoroughly impressed with the professionalism and dedication of this team. They have a keen understanding of legal complexities and always approach problems with a strategic mindset. Their expertise has been invaluable in navigating corporate legal matters and achieving positive outcomes."
    },
    {
        name: "John Doe",
        job: "Certified Public Accountant",
        text: "The attention to detail and thoroughness demonstrated by this team is exceptional. They have consistently delivered accurate and insightful financial analyses that have greatly benefited our company. Their proactive approach to problem-solving and financial planning has set them apart as a trusted partner in our business success."
    }
];

// Defining the image paths and image properties
const paulo = new Image();
paulo.src = 'img/paulo.jpg';
paulo.alt = 'man with glasses smiling';
paulo.title = 'Paulo Alto\'s Review';
paulo.classList.add('review-image');

const susan = new Image();
susan.src = 'img/susan.jpg';
susan.alt = 'woman smiling';
susan.title = 'Susan Smith\'s Review';
susan.classList.add('review-image');


const john = new Image();
john.src = 'img/john.jpg';
john.alt = 'man with beard smiling';
john.title = 'John Doe\'s Review';
john.classList.add('review-image');

// Adding images to an array
const imageArray = [paulo, susan, john];
let currentIndex = 0;

function updateReview() {
    // Update image
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageArray[currentIndex]);

    // Update name
    nameContainer.innerHTML = testimonials[currentIndex].name;

    // Update job
    roleContainer.innerHTML = testimonials[currentIndex].job;

    // Update review
    textContainer.innerHTML = testimonials[currentIndex].text;
}

next.addEventListener("click", () => {
    currentIndex = (currentIndex +1) % imageArray.length; // Cycle to the next image
    updateReview();
});

prev.addEventListener("click", () => {
    currentIndex = (currentIndex -1 + imageArray.length) % imageArray.length; // Cycle to the previous image
    updateReview();
});

// Initial load
updateReview();