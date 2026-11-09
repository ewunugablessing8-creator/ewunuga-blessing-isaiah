import "../App.css";

function Contact() {
  return (
    <section className="contact">
      <p className="contact-label">LET'S CONNECT</p>

      <h1>Contact Me</h1>

      <p className="contact-description">
        Have a project in mind? I'd love to hear from you.
        Reach out through WhatsApp, or email.
      </p>

      <div className="contact-links">
        <a
          href="https://wa.me/2347032949337"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp ↗
        </a>

        <a href="mailto:ewunugablessing8@gmail.com">
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;