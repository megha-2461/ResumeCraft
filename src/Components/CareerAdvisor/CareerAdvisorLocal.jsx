const careerRules = ({ skills, education, interests, workStyle, industry }) => {
 
  const s = skills.toLowerCase();
  const e = education.toLowerCase();
  const i = interests.toLowerCase();
  const w = workStyle.toLowerCase();
  const ind = industry.toLowerCase();

  if (s.includes('react') && s.includes('node') && s.includes('mongodb')) {
    return 'Full Stack MERN Developer';
  }

  if (s.includes('html') && s.includes('css') && s.includes('javascript')) {
    return 'Frontend Developer';
  }

  if (s.includes('python') && i.includes('data')) {
    return 'Data Analyst or Data Scientist';
  }

  if (s.includes('c++') && s.includes('dsa') && e.includes('engineering')) {
    return 'Competitive Programmer or Software Engineer';
  }

  if (i.includes('ai') || i.includes('machine learning')) {
    return 'AI/ML Engineer';
  }

  if (e.includes('mba') || i.includes('management')) {
    return 'Product Manager';
  }

  if (i.includes('design') || s.includes('figma') || s.includes('ui')) {
    return 'UI/UX Designer';
  }

  if (w.includes('remote') && i.includes('freelance')) {
    return 'Freelance Web Developer or Remote Consultant';
  }

  if (ind.includes('healthcare') && s.includes('python')) {
    return 'Healthcare Data Analyst';
  }

  if (ind.includes('finance') && s.includes('excel')) {
    return 'Financial Analyst';
  }

  return 'Software Developer or IT Professional';
};
