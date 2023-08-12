import React from 'react';
import './index.css';

const HomePage = () => {
  return (
    <div>
      <section className="home-section">
        <div className="container">
          <h1>POLAN AI</h1>
          <p>
            AI-powered TV commercial adverts scripts.
          </p>
          <div className="home-btn-container">
            <a href="/login">
              <button className="home-btn">Try it out.</button>
            </a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Features</h2>
          <div className="feature">
            <div className="feature-number">1</div>
            <div className="feature-description">
              Generate captivating and compelling AI-powered creative lines for
              your TV commercial adverts. Leverage the power of artificial
              intelligence to create unique and engaging messaging that captures
              the attention of your target audience.
            </div>
          </div>
          <div className="feature">
            <div className="feature-number">2</div>
            <div className="feature-description">
              Create professional TV commercial scripts with ease. Our AI-driven
              platform helps you generate well-crafted scripts that effectively
              convey your brand's message, ensuring a memorable and impactful
              advertisement.
            </div>
          </div>
          <div className="feature">
            <div className="feature-number">3</div>
            <div className="feature-description">
              Customize the generated lines to perfectly match your brand's
              identity and campaign objectives. Tailor the AI-generated content
              to fit your brand voice, values, and target audience, ensuring a
              seamless integration into your overall marketing strategy.
            </div>
          </div>
          <div className="feature">
            <div className="feature-number">4</div>
            <div className="feature-description">
              Access a vast library of AI-generated slogans, taglines, and
              catchphrases to enhance your advertising efforts. Browse through a
              wide range of creative and impactful lines to find the perfect
              match that resonates with your brand and amplifies its presence in
              the market.
            </div>
          </div>
        </div>
      </section>

      <section className="bring-advert-to-life-section">
        <div className="container">
          <div className="bring-advert-content">
            <div className="bring-advert-image">
              <img src="/commercial.png" alt="Bring Your Advert to Life" />
            </div>
            <div className="bring-advert-text">
              <h2>Bring Your Advert to Life</h2>
              <p>
                Enhance your TV commercial with captivating visuals that leave a
                lasting impression. Our advanced technology allows you to create
                stunning visuals that perfectly complement your advertisement
                and engage your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button className="contact-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
