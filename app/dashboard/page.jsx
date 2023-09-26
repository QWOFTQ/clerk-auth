import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <p className="mb-5">
        Welcome to Dashboard. 로그인된 사용자만 볼 수 있는 페이지입니다.
      </p>
      <hr />
      <br />
      <h2 className="text-xl font-bold">간단한 소개</h2>
      <div className="mb-4 bg-[#C2B4D6] p-4 m-4 rounded-lg">
        <p className="mb-2 font-bold text-lg">이름 : 강채린</p>
        <br />

        <Link
          href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istp"
          className="hover:bg-teal-500"
        >
          MBTI : ISTP
        </Link>
        <p className="mb-2">ISTP에 대한 공식 문서</p>
      </div>

      <div className="mb-4 bg-[#C2B4D6] p-4 m-4 rounded-lg">
        <Link
          href="https://github.com/QWOFTQ/"
          className="text-xl text-blue-700 font-bold hover:bg-teal-500"
        >
          Github 주소
        </Link>
        <p className="mb-2">Github 주소 안내</p>
      </div>
    </>
  )
}

export default DashboardPage
