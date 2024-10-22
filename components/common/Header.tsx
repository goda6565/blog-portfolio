"use client"

import Link from "next/link"

// ナビゲーション
const Header = () => {
    return (
        <header className="shadow-lg shadow-gray-100">
            <div className="mx-auto flex max-w-screen-md items-center justify-center px-2 py-3">
                <Link href="/" className="cursor-pointer text-xl font-bold">
                    Haru Portfolio
                </Link>
            </div>
        </header>
    )
}

export default Header
