/**
 * Main JavaScript file for TECHIESpirals website
 */

// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  // Import Lucide icons (or declare lucide if it's already available globally)
  // This assumes you're using a module bundler like Webpack or Parcel.
  // If not, you'll need to include Lucide via a <script> tag in your HTML.
  // import * as lucide from "lucide"; // Uncomment if using a module bundler

  // If lucide is included via a <script> tag, ensure it's available globally.
  // If not, you might need to adjust how you initialize icons.

  // Initialize icons
  lucide.createIcons()

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden")
        // Change to X icon
        this.innerHTML = '<i data-lucide="x" class="h-6 w-6"></i>'
      } else {
        mobileMenu.classList.add("hidden")
        // Change back to menu icon
        this.innerHTML = '<i data-lucide="menu" class="h-6 w-6"></i>'
      }

      // Reinitialize icons after changing the HTML
      lucide.createIcons()
    })
  }

  // Form validation
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      const emailInput = document.getElementById("email")
      if (emailInput && !isValidEmail(emailInput.value)) {
        event.preventDefault()
        showError(emailInput, "Please enter a valid email address")
      }
    })
  }

  // Email validation helper
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Show error message
  function showError(input, message) {
    const errorElement = document.createElement("p")
    errorElement.className = "text-red-500 text-sm mt-1"
    errorElement.textContent = message

    // Remove any existing error messages
    const existingError = input.parentNode.querySelector(".text-red-500")
    if (existingError) {
      existingError.remove()
    }

    // Add error class to input
    input.classList.add("border-red-500")

    // Add error message after input
    input.parentNode.appendChild(errorElement)

    // Focus on the input
    input.focus()
  }
})
