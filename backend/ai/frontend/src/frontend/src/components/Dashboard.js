import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [recommendations, setRecs] = useState([]);
  useEffect(() => {
    axios.get('/api/recommendations?userId=1')
      .then(res => setRecs(res.data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <h2>Course Recommendations</h2>
      <ul>{recommendations.map((c, i) => <li key={i}>{c}</li>)}</ul>
    </div>
  );
}
