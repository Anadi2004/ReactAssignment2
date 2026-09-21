import React from 'react';
import './Header.css';

function Header({
  title,
  subtitle,
  universityName,
  campus,
  totalStudents,
  topCgpa,
  averageCgpa
}) {
  return (
    <header className="portal-header">
      <div className="header-glow"></div>
      <div className="header-container">
        {/* University Branding Bar */}
        <div className="university-badge-wrapper">
          <div className="university-logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L1 7L12 12L23 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinelinecap="round" strokeLinelinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinelinecap="round" strokeLinelinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinelinecap="round" strokeLinelinejoin="round"/>
            </svg>
          </div>
          <div className="university-meta">
            <span className="university-name">{universityName}</span>
            <span className="university-campus">{campus}</span>
          </div>
          <div className="status-live-pill">
            <span className="pulse-dot"></span>
            <span>React Props Demo</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="header-title-section">
          <h1 className="header-title">
            <span className="gradient-text">{title}</span>
          </h1>
          <p className="header-subtitle">{subtitle}</p>
        </div>

        {/* Live Academic KPI Stat Badges */}
        <div className="header-stats-grid">
          <div className="stat-card">
            <div className="stat-icon-box cyan">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="stat-details">
              <span className="stat-label">Total Enrolled</span>
              <span className="stat-value">{totalStudents} Students</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box gold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="stat-details">
              <span className="stat-label">Top CGPA</span>
              <span className="stat-value text-gold">{topCgpa.toFixed(2)} / 10.0</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box emerald">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <div className="stat-details">
              <span className="stat-label">Average CGPA</span>
              <span className="stat-value text-emerald">{averageCgpa.toFixed(2)} / 10.0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
