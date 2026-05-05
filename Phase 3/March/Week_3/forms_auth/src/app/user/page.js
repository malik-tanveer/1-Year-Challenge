import Card from "@/components/Card"
import ProtectedRoute from "@/components/ProtectedRoute"

export default function page() {
    return (
        <>
        <ProtectedRoute>
            <div className="bg-gray-200 grid grid-cols-3 gap-4 p-10">

                <Card 
                    name="Rohan" 
                    role="Frontend Dev" 
                    company="TechSoft"
                    details={[
                        "2+ years experience",
                        "React & Next.js",
                        "Remote",
                        "Salary: 100k",
                        "Agile team"
                    ]}
                />

                <Card 
                    name="Rameesh" 
                    role="Backend Dev" 
                    company="CodeBase"
                    details={[
                        "Node.js expert",
                        "API development",
                        "Onsite",
                        "Salary: 120k",
                        "Database handling"
                    ]}
                />

                <Card 
                    name="Harry" 
                    role="Full Stack Dev" 
                    company="DevHub"
                    details={[
                        "MERN Stack",
                        "3+ years experience",
                        "Hybrid",
                        "Salary: 150k",
                        "Team lead"
                    ]}
                />

                <Card 
                    name="Alice" 
                    role="Gen AI Dev" 
                    company="AI Labs"
                    details={[
                        "LLMs experience",
                        "Python + AI",
                        "Remote",
                        "Salary: 200k",
                        "Research work"
                    ]}
                />

                <Card 
                    name="Bob" 
                    role="Vibe Coder Dev" 
                    company="CreativeTech"
                    details={[
                        "Creative coding",
                        "Animations",
                        "Remote",
                        "Salary: 90k",
                        "Freelance projects"
                    ]}
                />

                <Card 
                    name="Ali" 
                    role="Game Dev" 
                    company="GameStudio"
                    details={[
                        "Unity / Unreal",
                        "2D/3D games",
                        "Onsite",
                        "Salary: 130k",
                        "Multiplayer systems"
                    ]}
                />

                <Card 
                    name="Tanveer" 
                    role="MERN Stack Dev" 
                    company="WebWorks"
                    details={[
                        "MongoDB, Express",
                        "React + Node",
                        "Remote",
                        "Salary: 140k",
                        "API integration"
                    ]}
                />

                {/* New Users */}

                <Card 
                    name="Usman" 
                    role="Mobile App Developer" 
                    company="AppTech"
                    details={[
                        "Flutter expert",
                        "Android & iOS",
                        "Remote",
                        "Salary: 110k",
                        "UI integration"
                    ]}
                />

                <Card 
                    name="Zara" 
                    role="UI/UX Designer" 
                    company="DesignPro"
                    details={[
                        "Figma expert",
                        "User research",
                        "Remote",
                        "Salary: 95k",
                        "Prototyping"
                    ]}
                />

            </div>
        </ProtectedRoute>
        </>
    )
}