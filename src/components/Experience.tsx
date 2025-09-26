import React from "react"
import Title from "./ui/Title"
import JobCard from "./ui/JobCard"

const Experience = () => {
  return (
    <div id="experience" className="relative">
      <Title text="Experience" />
      <p className="text-sm pt-5 text-neutral-300">
        Recently, I have started taking up intern roles to gain practical experience in software engineering and I am looking forward to taking up more roles in the future.
      </p>
      <div className="my-10 grid md:grid-cols-2 gap-5">
        <JobCard
          company="Kaabo"
          position="Backend Engineer Intern"
          years="Jul 2025 - Sept 2025"
          description="Gained practical experience with technologies such as Node.js, Express, and SQL/NoSQL databases. Contributed to writing clean, well-documented code and participated in code reviews."
        />
      
      </div>
    </div>
  )
}

export default Experience