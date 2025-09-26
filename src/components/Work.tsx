import React from "react"
import Title from "./ui/Title"
import ProjectCard from "./ui/ProjectCard"

const Work = () => {
    return (
        <div id="work">
            <Title text="Work" />
            <div className="grid md:grid-cols-2 gap-5 my-5">
                <ProjectCard
                    imageSrc="/todo.png"
                    title="Todo App"
                    description="A simple console application that manages daily tasks using CRUD operations. Users can add, view, update, and delete tasks through a text-based menu."
                    linkHref="https://github.com/arunsewe/Kaabo/tree/main"
                    linkText="View in GitHub"
                />
                <ProjectCard
                    imageSrc="/leave.png"
                    title="Leave Management System"
                    description="This is a console-based application that simulates a real-world HR tool for managing interns’ leave requests. Interns can apply for leave, while administrators review and either approve or reject the requests. All leave data is stored in a JSON file for persistence, with built-in validation to check overlapping dates and leave limits."
                    linkHref="https://github.com/arunsewe/Kaabo/tree/main"
                    linkText="View in GitHub"
                />
                <ProjectCard
                    imageSrc="/qr.png"
                    title="QR-Code Generator"
                    description="A console-driven application that manages student access using unique QR codes. It allows student lookup by ID, assigns QR codes, updates activation status, filters by active/inactive passes, and generates summary reports. The system ensures clean, efficient logic using modern JavaScript features."
                    linkHref="https://github.com/arunsewe/Kaabo/tree/main"
                    linkText="View in GitHub"
                />
                <ProjectCard
                    imageSrc="/email.png"
                    title="Email Newsletter System"
                    description="A Node.js application that manages subscribers and blog posts, and sends the latest newsletters using Nodemailer. It generates email templates, selects recipients, and delivers updates directly to users inboxes in a clean and automated way."
                    linkHref="https://github.com/arunsewe/Kaabo/tree/main"
                    linkText="View in GitHub"
                />
                <ProjectCard
                    imageSrc="/auth.jpg"
                    title="Authentication and Authorization API"
                    description="A Node.js application that provides secure user management with endpoints to create, log in, and delete users. It uses password hashing, JWT tokens, and role-based access control to enforce both authentication (verifying identity) and authorization (enforcing permissions). Sensitive data is protected through encryption and modern security best practices."
                    linkHref="https://github.com/arunsewe/Kaabo/tree/main"
                    linkText="View in GitHub"
                />
            </div>
        </div>
    )
}

export default Work