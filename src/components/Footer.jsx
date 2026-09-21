import React from 'react';
import './Footer.css';

function Footer({
  universityName,
  campus,
  studentAuthor,
  studentRoll,
  department,
  academicYear,
  assignmentTitle
}) {
  return (
    <footer className="portal-footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        {/* Main Footer Info Grid */}
        <div className="footer-grid">
          {/* Col 1: University */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L1 7L12 12L23 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <span className="brand-name">{universityName}</span>
            </div>
            <p className="footer-desc">
              Premier academic institution committed to excellence in Computer Science, Technology, and Innovation.
            </p>
            <span className="campus-location">📍 {campus}</span>
          </div>

          {/* Col 2: Assignment Meta */}
          <div className="footer-col">
            <h4 className="footer-col-title">Assignment Context</h4>
            <ul className="footer-list">
              <li><strong>Module:</strong> {assignmentTitle}</li>
              <li><strong>Concepts:</strong> React Props, Reusability & Data Flow</li>
              <li><strong>Dataset:</strong> Dynamic Student Information Portal</li>
              <li><strong>Year:</strong> {academicYear}</li>
            </ul>
          </div>

          {/* Col 3: Student Author */}
          <div className="footer-col author-col">
            <h4 className="footer-col-title">Submitted By</h4>
            <div className="author-card">
              <div className="author-avatar">AM</div>
              <div className="author-meta">
                <span className="author-name">{studentAuthor}</span>
                <span className="author-roll">Roll: {studentRoll}</span>
                <span className="author-dept">{department}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} {universityName} • Built with React 19 & Props Architecture
          </p>
          <div className="props-flow-badge">
            Data Passed Strictly via Props ⚡
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
