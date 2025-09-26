import Image from "next/image"
import React from "react"

const StickySidebar = () => {
    return (
        <div className="sticky mt-5 top-24 flex flex-col items-center">
            <div className="rounded-2xl flex flex-col relative p-10 bg-neutral-900">
                <Image className="rounded-full" src="/me.jpg" alt="avatar" width={100} height={100} />
                <h2 className="text-xl font-bold mt-4">Ayanfeoluwa Runsewe</h2>
                <p className="font-bold mb-4">Software Engineer</p>
                <p className="text-sm leading-relaxed">
                    I&apos;m Ayanfeoluwa Runsewe, a third year Software Enginnering student at Pan-Atlantic University looking to build a strong foundation in server-side development, database management, and API integration. Skilled in programming languages such as Python, Java, and Node.js, with hands-on experience in building scalable and efficient backend systems.
                </p>
            </div>

        </div>
    )
}

export default StickySidebar