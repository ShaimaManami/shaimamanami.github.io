(function () {
  "use strict";

  var EMAILJS_SERVICE_ID = "service_ujx5chp";
  var EMAILJS_TEMPLATE_ID = "template_oylv20a";
  var EMAILJS_PUBLIC_KEY = "oSvTdk-_IRtfOWm1N";
  var TO_EMAIL = "shaimaa.alshariif@gmail.com";

  var EMAIL_RE = /(.+)@(.+){2,}\.(.+){2,}/;

  function showFieldError(input, hasError) {
    var container = input.closest(".field");
    if (container) container.setAttribute("data-error", String(hasError));
  }

  function showFormError(form, message) {
    var banner = form.querySelector(".contact-page__error");
    if (!banner) {
      banner = document.createElement("div");
      banner.className = "contact-page__error";
      banner.innerHTML =
        '<div class="contact-page__error-content">' +
        '<div class="contact-page__error-message">' +
        '<span class="contact-page__error-text"></span>' +
        "</div></div>";
      var submitBtn = form.querySelector('button[type="submit"]');
      form.insertBefore(banner, submitBtn);
    }
    banner.querySelector(".contact-page__error-text").textContent = message;
    banner.style.setProperty("--height", "auto");
    requestAnimationFrame(function () {
      banner.style.setProperty("--height", banner.scrollHeight + "px");
      banner.setAttribute("data-visible", "true");
    });
  }

  function clearFormError(form) {
    var banner = form.querySelector(".contact-page__error");
    if (banner) {
      banner.setAttribute("data-visible", "false");
      banner.style.setProperty("--height", "0px");
    }
  }

  function showComplete(form) {
    var container = form.parentElement;
    var complete = container.querySelector(".contact-page__complete");
    if (!complete) {
      complete = document.createElement("div");
      complete.className = "contact-page__complete";
      complete.innerHTML =
        '<h1 class="heading contact-page__complete-title" data-status="entered">Message sent</h1>' +
        '<p class="text contact-page__complete-text" data-align="auto" data-size="l" data-weight="auto" data-status="entered">' +
        "Thanks for reaching out — I&#8217;ll get back to you as soon as I can.</p>";
      container.appendChild(complete);
    }
    form.style.display = "none";
    complete.style.display = "flex";
  }

  function init() {
    var form = document.querySelector(".contact-page__form");
    if (!form) return;

    var emailInput = form.querySelector('input[name="email"]');
    var messageInput = form.querySelector('textarea[name="message"]');
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var emailValue = emailInput.value.trim();
      var messageValue = messageInput.value.trim();
      var errors = {};

      if (!emailValue || !EMAIL_RE.test(emailValue)) {
        errors.email = "Please enter a valid email address.";
      } else if (emailValue.length > 512) {
        errors.email = "Email address must be shorter than 512 characters.";
      }

      if (!messageValue) {
        errors.message = "Please enter a message.";
      } else if (messageValue.length > 4096) {
        errors.message = "Message must be shorter than 4096 characters.";
      }

      showFieldError(emailInput, !!errors.email);
      showFieldError(messageInput, !!errors.message);

      var firstError = errors.email || errors.message;
      if (firstError) {
        showFormError(form, firstError);
        return;
      }

      clearFormError(form);
      submitBtn.setAttribute("data-sending", "true");
      submitBtn.setAttribute("data-loading", "true");

      if (typeof emailjs === "undefined") {
        showFormError(form, "There was an error sending your message. Please try again later or email me directly.");
        submitBtn.setAttribute("data-sending", "false");
        submitBtn.setAttribute("data-loading", "false");
        return;
      }

      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_email: emailValue,
            to_email: TO_EMAIL,
            message: messageValue,
            subject: "Portfolio message from " + emailValue
          },
          EMAILJS_PUBLIC_KEY
        )
        .then(function () {
          form.reset();
          showComplete(form);
        })
        .catch(function (err) {
          console.error("EmailJS error:", err);
          showFormError(
            form,
            "There was an error sending your message. Please try again later or email me directly."
          );
        })
        .finally(function () {
          submitBtn.setAttribute("data-sending", "false");
          submitBtn.setAttribute("data-loading", "false");
        });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
