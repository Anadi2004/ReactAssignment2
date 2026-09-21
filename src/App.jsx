import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import { studentsData, universityInfo } from './data/studentsData';
import './App.css';

function App() {
  // State management for sorting, filtering, and search
  const [sortOrder, setSortOrder] = useState('desc'); // default to 'desc' (highest CGPA first)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');

  // Compute overall KPI stats from master data to pass to Header via props
  const { totalStudents, topCgpa, averageCgpa } = useMemo(() => {
    const total = studentsData.length;
    const maxCgpa = Math.max(...studentsData.map(s => s.cgpa));
    const avg = studentsData.reduce((sum, s) => sum + s.cgpa, 0) / total;
    return { totalStudents: total, topCgpa: maxCgpa, averageCgpa: avg };
  }, []);

  // Compute department filters and counts to pass to StudentList via props
  const departments = useMemo(() => {
    const deptMap = { ALL: studentsData.length };
    studentsData.forEach(s => {
      const key = s.shortDept;
      deptMap[key] = (deptMap[key] || 0) + 1;
    });

    return [
      { key: 'ALL', label: 'All Departments', count: deptMap['ALL'] },
      { key: 'BCA', label: 'BCA', count: deptMap['BCA'] || 0 },
      { key: 'B.Tech CSE', label: 'B.Tech CSE', count: deptMap['B.Tech CSE'] || 0 },
      { key: 'AI & DS', label: 'AI & Data Science', count: deptMap['AI & DS'] || 0 },
      { key: 'MCA', label: 'MCA', count: deptMap['MCA'] || 0 },
      { key: 'IT', label: 'IT', count: deptMap['IT'] || 0 }
    ];
  }, []);

  // Sorting handlers passed down via props
  const handleSortToggle = () => {
    setSortOrder(prev => {
      if (prev === 'none') return 'desc';
      if (prev === 'desc') return 'asc';
      return 'desc';
    });
  };

  const handleSortChange = (newOrder) => {
    setSortOrder(newOrder);
  };

  // Compute filtered & sorted students to pass to StudentList via props
  const processedStudents = useMemo(() => {
    let result = [...studentsData];

    // Filter by department
    if (selectedDept !== 'ALL') {
      result = result.filter(s => s.shortDept === selectedDept);
    }

    // Filter by search query (name or roll number)
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase().trim();
      result = result.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.rollNo.includes(q) ||
        s.department.toLowerCase().includes(q)
      );
    }

    // Sort by CGPA
    if (sortOrder === 'desc') {
      result.sort((a, b) => b.cgpa - a.cgpa);
    } else if (sortOrder === 'asc') {
      result.sort((a, b) => a.cgpa - b.cgpa);
    }

    return result;
  }, [selectedDept, searchTerm, sortOrder]);

  return (
    <div className="app-container">
      {/* 1. Header Component with props */}
      <Header
        title={universityInfo.portalTitle}
        subtitle={universityInfo.portalSubtitle}
        universityName={universityInfo.name}
        campus={universityInfo.campus}
        totalStudents={totalStudents}
        topCgpa={topCgpa}
        averageCgpa={averageCgpa}
      />

      {/* 2. Main Student List Component with props */}
      <main className="main-content">
        <StudentList
          students={processedStudents}
          sortOrder={sortOrder}
          onSortToggle={handleSortToggle}
          onSortChange={handleSortChange}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedDept={selectedDept}
          onDeptChange={setSelectedDept}
          departments={departments}
          totalAvailable={studentsData.length}
        />
      </main>

      {/* 3. Footer Component with props */}
      <Footer
        universityName={universityInfo.name}
        campus={universityInfo.campus}
        studentAuthor={universityInfo.studentAuthor}
        studentRoll={universityInfo.studentRoll}
        department={universityInfo.department}
        academicYear={universityInfo.academicYear}
        assignmentTitle={universityInfo.assignmentTitle}
      />
    </div>
  );
}

export default App;
