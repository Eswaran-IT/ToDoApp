import React from "react";

const SkillSet = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex flex-col items-center justify-center px-4 py-8 overflow-y-auto">
      <h1 className="text-4xl text-center font-bold text-white mb-6">My Skill Set</h1>

      <div className="w-full flex justify-center flex-wrap gap-8 max-w-6xl">
        {/* Frontend */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://reactjs.org/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" />
            </a>
            <a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" />
            </a>
            <a href="https://www.w3schools.com/css/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" />
            </a>
            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" />
            </a>
            <a href="https://www.javascript.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" />
            </a>
            <a href="https://www.java.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" alt="Java" height="50" />
            </a>
            <a href="https://powerbi.microsoft.com/en-us/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/powerbi.png" alt="Power Bi" height="50" />
            </a>
            <a href="https://www.tailwindcss.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" alt="Tailwind CSS" height="50" />
            </a>
            <a href="https://flutter.dev/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg" alt="Flutter" height="50" />
            </a>
            <a href="https://dart.dev/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg" alt="Dart" height="50" />
            </a>
            <a href="https://www.figma.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="50" />
            </a>
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Backend</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.cplusplus.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" alt="C++" height="50" />
            </a>
            <a href="https://www.php.net/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/php-original.svg" alt="PHP" height="50" />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" />
            </a>
            <a href="https://www.linux.org/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/linux-original.svg" alt="Linux" height="50" />
            </a>
            <a href="https://www.python.org/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" />
            </a>
            <a href="https://github.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" />
            </a>
            <a href="https://www.gnu.org/software/bash/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg" alt="Bash" height="50" />
            </a>
            <a href="https://www.cprogramming.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/c-original.svg" alt="C" height="50" />
            </a>
            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#" height="50" />
            </a>
            <a href="https://www.mysql.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="50" />
            </a>
            <a href="https://redux.js.org/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" height="50" />
            </a>
            <a href="https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html#:~:text=The%20Spring%20Expression%20Language%20(SpEL,and%20basic%20string%20templating%20functionality." target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/springio-icon.svg" alt="Spring" height="50" />
            </a>
          </div>
        </div>

        {/* DevOps */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-4">DevOps</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://aws.amazon.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg" alt="AWS" height="50" />
            </a>
            <a href="https://www.gnu.org/software/bash/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg" alt="Bash" height="50" />
            </a>
            <a href="https://www.docker.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" alt="Docker" height="50" />
            </a>
            <a href="https://www.jenkins.io/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/jenkins-icon.svg" alt="Jenkins" height="50" />
            </a>
            <a href="https://github.com/" target="_blank" className="hover:scale-110 transition-transform duration-300">
              <img src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
