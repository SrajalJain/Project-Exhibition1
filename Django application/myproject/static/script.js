// Smooth scrolling for nav links
const navLinks = document.querySelectorAll(".topnav-links a"); // Updated to select from the correct class

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    // Use Locomotive Scroll's scrollTo method for smooth scrolling
    scroll.scrollTo(targetElement, {
      offset: -70, // Adjust for navbar height
      duration: 1000, // Duration of the scrolling animation
    });
  });
});

// Image Upload Preview and Message
const uploadForm = document.getElementById("upload-form");
const imageInput = document.getElementById("image-input");
const outputMessage = document.getElementById("output-message");
const previewImage = document.getElementById("preview-image");

uploadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewImage.style.display = "block";
      outputMessage.textContent = "Image ready for analysis!";
    };
    reader.readAsDataURL(file);
  }
});

// Chatbot Functionality
const chatInput = document.getElementById("chat-input");
const chatboxMessages = document.getElementById("chatbox-messages");
const sendBtn = document.getElementById("send-btn");
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbox = document.getElementById("chatbox");

sendBtn.addEventListener("click", () => {
  const userMessage = chatInput.value;
  if (userMessage) {
    const userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = You: ${userMessage};
    chatboxMessages.appendChild(userMessageDiv);
    chatInput.value = "";
    // Simulate AI response
    setTimeout(() => {
      const botResponseDiv = document.createElement("div");
      botResponseDiv.textContent = AI: How can I assist you?;
      chatboxMessages.appendChild(botResponseDiv);
      chatboxMessages.scrollTop = chatboxMessages.scrollHeight; // Auto-scroll
    }, 1000);
  }
});

// Toggle Chatbot
chatbotToggle.addEventListener("click", () => {
  chatbox.style.display =
    chatbox.style.display === "none" || chatbox.style.display === ""
      ? "flex"
      : "none";
});