import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer">
      <div>
        <div className="contacts">
          <h3>Connect With Me </h3>
          <div className="social-links-footer">
            <span>
              <i class="fab fa-github"></i>
            </span>
            <span>
              <i class="fab fa-linkedin-in"></i>
            </span>
            <span>
              <i class="fab fa-telegram-plane"></i>
            </span>
          </div>
        </div>
        <p className="copyright">© Copyright Simple Store, {year}</p>
      </div>
    </div>
  );
}

export default Footer;
