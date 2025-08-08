import React from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  { title: "AI Fundamentals", instructor: "Dr. Smith" },
  { title: "ML with Python", instructor: "Prof. Jane" },
];

export default function Courses() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Courses</h2>
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}
