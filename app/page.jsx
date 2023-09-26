import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mb-4 font-bold">Welcome Home</h1>
      <div className="mb-4 bg-[#C2B4D6] p-4 m-4 rounded-lg">
        <Link
          href="https://clerk.com/"
          className="text-xl text-blue-700 font-bold hover:bg-teal-500"
        >
          clerk.com
        </Link>
        <p className="mb-2">
          This is a demo of Clerk authentication. Clerk is more than a "sign-in
          box." Integrate complete user management UIs and APIs, purpose-built
          for React, Next.js, and the Modern Web.
        </p>
      </div>

      <div className="mb-4 bg-[#C2B4D6] p-4 m-4 rounded-lg">
        <Link
          href="https://api.github.com/"
          className="text-xl text-blue-700 font-bold hover:bg-teal-500"
        >
          api.github.com
        </Link>
        <p className="mb-2">Explore github repositories using Fetch API</p>
      </div>

      <div className="mb-4 bg-[#C2B4D6] p-4 m-4 rounded-lg">
        <Link
          href="http://localhost:3000/api/courses"
          className="text-xl text-blue-700 font-bold hover:bg-teal-500"
        >
          Backend API
        </Link>
        <p className="mb-2">
          Provide Backend API service that provide extensive courses information
          in web development
        </p>
      </div>
      <footer className="w-full text-center h-60px relative">
        &copy; 2023 중부대학교 정보보호학과 강채린
      </footer>
    </>
  )
}
