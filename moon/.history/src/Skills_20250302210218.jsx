import React from 'react';

const skills = {
  frontend: [
    { name: 'CSS3', link: 'https://www.w3schools.com/css/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg' },
    { name: 'Dart', link: 'https://dart.dev/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg' },
    { name: 'Figma', link: 'https://www.figma.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/figma-icon.svg' },
    { name: 'Flutter', link: 'https://flutter.dev/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg' },
    { name: 'HTML5', link: 'https://en.wikipedia.org/wiki/HTML5', imgSrc: 'https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg' },
    { name: 'JavaScript', link: 'https://www.javascript.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/javascript-original.svg' },
    { name: 'Java', link: 'https://www.java.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg' },
    { name: 'Power BI', link: 'https://powerbi.microsoft.com/en-us/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/powerbi.png' },
    { name: 'React', link: 'https://reactjs.org/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg' },
    { name: 'Tailwind CSS', link: 'https://www.tailwindcss.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/tailwindcss.svg' },
  ],
  backend: [
    { name: 'C', link: 'https://www.cprogramming.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/c-original.svg' },
    { name: 'C++', link: 'https://www.cplusplus.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg' },
    { name: 'C#', link: 'https://docs.microsoft.com/en-us/dotnet/csharp/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/csharp-original.svg' },
    { name: 'Git', link: 'https://github.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg' },
    { name: 'Linux', link: 'https://www.linux.org/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/linux-original.svg' },
    { name: 'MongoDB', link: 'https://www.mongodb.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg' },
    { name: 'MySQL', link: 'https://www.mysql.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg' },
    { name: 'PHP', link: 'https://www.php.net/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/php-original.svg' },
    { name: 'Python', link: 'https://www.python.org/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/python-original.svg' },
    { name: 'Redux', link: 'https://redux.js.org/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/redux-original.svg' },
    { name: 'Spring', link: 'https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html#:~:text=The%20Spring%20Expression%20Language%20(SpEL,and%20basic%20string%20templating%20functionality.', imgSrc: 'https://profilinator.rishav.dev/skills-assets/springio-icon.svg' },
  ],
  devops: [
    { name: 'AWS', link: 'https://aws.amazon.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg' },
    { name: 'Bash', link: 'https://www.gnu.org/software/bash/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg' },
    { name: 'Docker', link: 'https://www.docker.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg' },
    { name: 'Git', link: 'https://github.com/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg' },
    { name: 'Jenkins', link: 'https://www.jenkins.io/', imgSrc: 'https://profilinator.rishav.dev/skills-assets/jenkins-icon.svg' },
  ],
};

const SkillIcons = ({ category, skills }) => (
  <div>
    <h3>{category}</h3>
    <div className="icon-container">
      {skills.sort((a, b) => a.name.localeCompare(b.name)).map(skill => (
        <a key={skill.name} href={skill.link} target="_blank" rel="noopener noreferrer">
          <img src={skill.imgSrc} alt={skill.name} height="50" />
        </a>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
    <h2>My Skill Set</h2>
    <div className="skill-container">
      <SkillIcons category="Frontend" skills={skills.frontend} />
      <SkillIcons category="Backend" skills={skills.backend} />
      <SkillIcons category="DevOps" skills={skills.devops} />
    </div>
  </div>
);

export default Skills;
