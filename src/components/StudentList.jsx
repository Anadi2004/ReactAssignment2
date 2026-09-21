import React from 'react';
import StudentCard from './StudentCard';
import './StudentList.css';

function StudentList({
  students,
  sortOrder,
  onSortToggle,
  onSortChange,
  searchTerm,
  onSearchChange,
  selectedDept,
  onDeptChange,
  departments,
  totalAvailable
}) {
  return (
    <section className="student-list-section">
      <div className="list-container">
        {/* Management Toolbar */}
        <div className="portal-toolbar">
          {/* Search Bar */}
          <div className="search-bar-wrapper">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search by student name or roll number..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="clear-search-btn" 
                onClick={() => onSearchChange('')}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Controls: Sorting & Filter Actions */}
          <div className="toolbar-controls">
            {/* Sort by CGPA Main Mechanism */}
            <div className="sort-controls-group">
              <span className="control-label">CGPA Sorting:</span>
              <button
                className={`sort-toggle-btn ${sortOrder === 'desc' ? 'active-desc' : sortOrder === 'asc' ? 'active-asc' : ''}`}
                onClick={onSortToggle}
                title="Click to toggle CGPA sort order"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 15l5 5 5-5"/>
                  <path d="M7 9l5-5 5 5"/>
                </svg>
                <span>
                  {sortOrder === 'desc' && 'CGPA: High to Low (↓)'}
                  {sortOrder === 'asc' && 'CGPA: Low to High (↑)'}
                  {sortOrder === 'none' && 'Sort by CGPA (Click)'}
                </span>
                {sortOrder !== 'none' && (
                  <span className="sort-badge-indicator">
                    {sortOrder === 'desc' ? 'Highest 1st' : 'Lowest 1st'}
                  </span>
                )}
              </button>

              {/* Direct Sort Selector Buttons */}
              <div className="direct-sort-buttons">
                <button
                  className={`sort-pill-btn ${sortOrder === 'desc' ? 'selected' : ''}`}
                  onClick={() => onSortChange('desc')}
                >
                  High → Low
                </button>
                <button
                  className={`sort-pill-btn ${sortOrder === 'asc' ? 'selected' : ''}`}
                  onClick={() => onSortChange('asc')}
                >
                  Low → High
                </button>
                {sortOrder !== 'none' && (
                  <button
                    className="sort-pill-btn reset"
                    onClick={() => onSortChange('none')}
                    title="Reset to original order"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Department Filter Pills */}
        <div className="department-filters-bar">
          <span className="filter-label">Filter Dept:</span>
          <div className="dept-pills-list">
            {departments.map((dept) => (
              <button
                key={dept.key}
                className={`dept-pill ${selectedDept === dept.key ? 'active' : ''}`}
                onClick={() => onDeptChange(dept.key)}
              >
                <span>{dept.label}</span>
                <span className="pill-count">{dept.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="results-metadata-bar">
          <div className="showing-count">
            Showing <strong className="highlight">{students.length}</strong> of <strong>{totalAvailable}</strong> Students
            {selectedDept !== 'ALL' && <span className="active-filter-badge">Department: {selectedDept}</span>}
            {sortOrder !== 'none' && (
              <span className="active-filter-badge sort">
                Sorted by CGPA ({sortOrder === 'desc' ? 'Descending' : 'Ascending'})
              </span>
            )}
          </div>
        </div>

        {/* Students Grid */}
        {students.length > 0 ? (
          <div className="student-grid">
            {students.map((student, index) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                rollNo={student.rollNo}
                department={student.department}
                shortDept={student.shortDept}
                semester={student.semester}
                cgpa={student.cgpa}
                photo={student.photo}
                avatarBg={student.avatarBg}
                email={student.email}
                skills={student.skills}
                achievement={student.achievement}
                rank={sortOrder !== 'none' ? index + 1 : null}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="empty-results-state">
            <div className="empty-icon">🔍</div>
            <h3>No Students Found</h3>
            <p>No student records match your search query "{searchTerm}" in the selected department.</p>
            <button
              className="reset-filters-btn"
              onClick={() => {
                onSearchChange('');
                onDeptChange('ALL');
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default StudentList;
