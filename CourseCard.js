import React from 'react';

export default function CourseCard({ course }) {
  return (
    <div style={{ margin: '10px', padding: '15px', border: '1px solid #ccc' }}>
      <h3>{course.title}</h3>
      <p>Instructor: {course.instructor}</p>
    </div>
  );
}
