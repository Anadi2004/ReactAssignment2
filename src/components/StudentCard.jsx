import React from 'react';
import './StudentCard.css';

function StudentCard({
  name,
  rollNo,
  department,
  shortDept,
  semester,
  cgpa,
  photo,
  avatarBg,
  email,
  skills,
  achievement,
  rank
}) {
  // Determine CGPA grade indicator and badge color
  const getCgpaBadge = (score) => {
    if (score >= 9.5) return { label: 'Outstanding', class: 'grade-platinum', star: '★' };
    if (score >= 9.0) return { label: 'Excellent', class: 'grade-gold', star: '★' };
    if (score >= 8.0) return { label: 'Very Good', class: 'grade-emerald', star: '●' };
    return { label: 'Good Standing', class: 'grade-blue', star: '●' };
  };

  const badgeInfo = getCgpaBadge(cgpa);

  // Compute initials for photo fallback
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    : 'ST';

  return (
    <div className="student-card">
      {/* Rank Indicator */}
      {rank && (
        <div className={`student-rank-badge ${rank <= 3 ? `top-${rank}` : ''}`}>
          <span>#{rank}</span>
        </div>
      )}

      {/* Card Header with Photo */}
      <div className="student-card-header">
        <div className="student-photo-wrapper">
          <img
            src={photo}
            alt={`${name}'s photo`}
            className="student-photo"
            onError={(e) => {
              // Graceful fallback to initial avatar if image fails
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="student-photo-fallback" style={{ background: avatarBg || 'var(--primary-gradient)' }}>
            {initials}
          </div>
          <span className="online-indicator" title="Active Student Record"></span>
        </div>

        <div className="student-identity">
          <h3 className="student-name">{name}</h3>
          <div className="student-roll-box">
            <span className="roll-label">Roll No:</span>
            <code className="roll-number">{rollNo}</code>
          </div>
        </div>
      </div>

      {/* Academic Information Grid */}
      <div className="student-academic-info">
        <div className="info-row">
          <div className="info-item">
            <span className="info-label">Department</span>
            <span className="info-value dept-name" title={department}>
              {department}
            </span>
          </div>
        </div>

        <div className="info-dual-row">
          <div className="info-item">
            <span className="info-label">Semester</span>
            <span className="info-value sem-badge">{semester}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Current CGPA</span>
            <div className={`cgpa-display-box ${badgeInfo.class}`}>
              <span className="cgpa-number">{cgpa.toFixed(2)}</span>
              <span className="cgpa-scale">/ 10</span>
            </div>
          </div>
        </div>
      </div>

      {/* CGPA Performance Badge */}
      <div className={`performance-badge ${badgeInfo.class}`}>
        <span className="badge-star">{badgeInfo.star}</span>
        <span className="badge-text">{badgeInfo.label} Performance</span>
      </div>

      {/* Skills / Tags */}
      {skills && skills.length > 0 && (
        <div className="student-skills-section">
          <div className="skills-tags">
            {skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
            {skills.length > 3 && (
              <span className="skill-tag more">+{skills.length - 3}</span>
            )}
          </div>
        </div>
      )}

      {/* Card Footer: Email / Achievement */}
      <div className="student-card-footer">
        <div className="student-email" title={email}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
