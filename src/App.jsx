
import "./App.css";

import React, { useState } from "react";
import LoginPage from "../src/component/login";


// Import images from src/assets
import zee99Logo from "./assets/zee99-logo.png";
import withdrawalBanner from "./assets/live-cricket.jpg";

// Offer images
import offerAviator from "./assets/offer-aviator.png";
import offerFirstDeposit from "./assets/offer-first-deposit.png";
import offerFreeCoins from "./assets/offer-free-coins.png";

// Sports images
import sportWv from "./assets/inplay.jpg";
import sportWl26 from "./assets/bbl.jpg";
import sportCricket from "./assets/ipl.png";
import sportSoccer from "./assets/sport-soccer.png";
import sportTennis from "./assets/sport-tennis.png";
import sportEsports from "./assets/sport-esports.png";
import sportHorseRacing from "./assets/sport-horse-racing.png";

// Promotion images
import promoCasino from "./assets/casi-blue.jpg";
import promoAviator from "./assets/avia-blue.png";

// Quick access images
import quickLiveSport from "./assets/quick-live-sport.png";
import quickLiveCasino from "./assets/quick-live-casino.png";
import quickAviator from "./assets/quick-aviator.png";
import quickStatement from "./assets/quick-statement.png";
import quickLedger from "./assets/quick-ledger.png";
import quickProfile from "./assets/quick-profile.png";
import quickRules from "./assets/quick-rules.png";
import quickPassword from "./assets/quick-password.png";
import quickHistory from "./assets/quick-history.png";
import quickUpdate from "./assets/quick-update.png";
import quickSupport from "./assets/quick-support.png";
import quickMore from "./assets/quick-more.png";

// Sports list
const sports = [
  [sportWv, "WV"],
  [sportWl26, "WL 26"],
  [sportCricket, "Cricket"],
  [sportSoccer, "Soccer"],
  [sportTennis, "Tennis"],
  [sportEsports, "eSports"],
  [sportHorseRacing, "Horse Racing"],
];

// Match data
const matches = [
  ["WBL", "Oct 29 2026 10-10 (IST)"],
  ["Himachal Pradesh v Rajasthan", "Nov 02 2026 09:30 (IST)"],
  ["Uttar Pradesh v kerala", "Nov 02 2026 09:30 (IST)"],
   ["WBL", "Oct 29 2026 10-10 (IST)"],
  ["Himachal Pradesh v Bihar", "Nov 02 2026 09:30 (IST)"],
  ["Uttar Pradesh v patna", "Nov 02 2026 09:30 (IST)"],
];

// Quick access list
const quickLinks = [
  [quickLiveSport, "LIVE SPORT"],
  [quickLiveCasino, "LIVE CASINO"],
  [quickAviator, "AVIATOR"],
  [quickStatement, "STATEMENT"],
  [quickLedger, "LEDGER"],
  [quickProfile, "MY PROFILE"],
  [quickRules, "RULES"],
  [quickPassword, "PASSWORD"],
  [quickHistory, "PLAY HISTORY"],
  [quickUpdate, "KEEP UPDATE"],
  [quickSupport, "SUPPORT"],
  [quickMore, "MORE"],
];



// Header
function Header({ onLogout }) {
  return (
    <>
      <header className="topbar">
        <img
          src={zee99Logo}
          className="brand-logo"
          alt="ZEE99"
        />

        <div className="header-actions">
          <button
          className="header-login-button"
          onClick={onLogout}
        >
          Login
        </button>

          <button className="header-icon menu-icon">☰</button>
        </div>
      </header>

      <div className="ticker">
        <span className="ticker-bell">🔔</span>
      
        <p>
          <b>Live:</b> नए सदस्य ने क्रिकेट में 12,500 Coins जीती! नए सदस्य ने क्रिकेट में 12,500 Coins जीती!नए सदस्य ने क्रिकेट में 12,500 Coins जीती!नए सदस्य ने क्रिकेट में 12,500 Coins जीती!नए सदस्य ने क्रिकेट में 12,500 Coins जीती!नए सदस्य ने क्रिकेट में 12,500 Coins जीती!नए सदस्य ने क्रिकेट में 12,500 Coins जीती!नए सदस्य ने क्रिकेट में 12,500 Coins जीती!
        </p>
      </div>
    </>
  );
}

// Offers section


function Offers() {
  const offerItems = [
    {
      icon: "✈️",
      
      subtitle: "India VS New Zealand",
    },
    {
      icon: "🎁",
      
      subtitle: "India VS Australia",
    },
    {
      icon: "🪙",
      subtitle: "India VS New Zealand",
    },
    {
      icon: "🎰",
      subtitle: "India VS Australia",
    },
  ];

  return (
    <section className="top-offers">
      <div className="offers-scroll">
        {offerItems.map((offer) => (
          <div className="offer-card" key={offer.title}>
            <span className="offer-icon">{offer.icon}</span>

            <div className="offer-text">
          
              <span>{offer.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



// Sports navigation
function SportsNavigation() {
  return (
    <section className="sports-navigation">

      {/* <div className="sports-items">
        {sports.map(([image, name]) => (
          <div className="sport-item" key={name}>
            <img src={image} alt={name} />
           
          </div>
        ))}
      </div> */}

    </section>
  );
}

// Banners and promotions
function Banners() {
  const promotions = [
    promoCasino,
    promoAviator,
    
  ];

  return (
    <>
      <img
        className="withdrawal-banner"
        src={withdrawalBanner}
        alt="24 Hours Withdrawal"
      />

      <section className="casino-promotions">
        {promotions.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Promotion"
          />
        ))}
      </section>
    </>
  );
}

// Live matches
function LiveMatches() {
  return (
    <section className="live-matches">
      <div className="matches-heading">
        <div>
          <i />
          LIVE MATCHES
        </div>

       
      </div>

      <div className="matches-content">
        {matches.map(([name, date]) => (
          <div className="match-row" key={name}>
            <div className="match-details">
              <b>{name}</b>
              <span>{date}</span>
            </div>

            <div className="match-odds">
              <div className="odds-labels">
                <b>1</b>
                <b>X</b>
                <b>2</b>
              </div>

              <div className="odds-bars">
                {Array.from({ length: 6 }, (_, index) => (
                  <span key={index}>-</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Quick access section
function QuickAccess() {
  return (
    <section className="quick-access">
      {quickLinks.map(([image, label]) => (
        <button className="quick-item" key={label}>
          <img src={image} alt="" />
          <b>{label}</b>
        </button>
      ))}
    </section>
  );
}

// Bottom navigation
function BottomNavigation() {
  const items = [
    ["⌂", "HOME"],
    ["▣", "CASINO"],
    ["▷", "PLAY"],
    ["♟", "PROFILE"],
    ["•••", "MORE"],
  ];

  return (
    <nav className="bottom-navigation">
      {items.map(([icon, label], index) => (
        <button
          className={index === 0 ? "active" : ""}
          key={label}
        >
          <span>{icon}</span>
          <b>{label}</b>
          {index === 0 && <i />}
        </button>
      ))}
    </nav>
  );
}



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const handleLogout = () => {
  setIsLoggedIn(false);
};
  if (!isLoggedIn) {
    return (
      <LoginPage
        onDemoLogin={() => setIsLoggedIn(true)}
      />
    );
  }

  return (
     <main className="page">
      <div className="page-content">
        <Header onLogout={handleLogout}/>
        <Offers />
        <SportsNavigation />
        <Banners />
        <LiveMatches />
        <QuickAccess />
      </div>

      <BottomNavigation />
    </main>
  );
}

