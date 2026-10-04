import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="site-shell contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-intro">
        <p className="eyebrow">Let’s make room for something good</p>
        <h2 id="contact-title">
          Your space.
          <br />
          Let’s talk<span className="accent-dot">.</span>
        </h2>
        <p>
          Have a project in mind? Tell me about your space and what you want it
          to feel like.
        </p>
      </div>
      <div className="contact-details">
        <p className="eyebrow">Email Jemma</p>
        <a href="mailto:jemmawedgwood01@gmail.com" className="contact-email">
          jemmawedgwood01@gmail.com{" "}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <p className="contact-location">
          Based in Cape Town,
          <br />
          South Africa.
        </p>
      </div>
    </section>
  );
}
