import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const pages = [
    {
        name: "top",
        url: "/",
    },
    {
        name: "about",
        url: "/about",
    },
    {
        name: "experience",
        url: "/experience",
    },
    {
        name: "works",
        url: "/works",
    },
    {
        name: "blog",
        url: "/blog",
    },
]


// ナビゲーション
const Navigation = () => {
    return (
        <header className="shadow-lg shadow-gray-100 flex">
            <div className="mx-auto flex items-center px-2 py-3 w-full md:hidden justify-between">
                <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {pages.map((page, index) => (
                                        <Link key={index} href={page.url} legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {page.name}
                                            </NavigationMenuLink>
                                        </Link>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <Link href="/" className="cursor-pointer text-xl font-bold text-end">
                    Haru Portfolio
                </Link>
            </div>
        
            <div className="hidden md:flex mx-auto flex-col justify-center items-center pt-3 w-full">
                <div>
                    <Link href="/" className="cursor-pointer text-2xl text-center font-bold flex-1">
                        Haru Portfolio
                    </Link>
                </div>
                <div className="flex justify-between w-full mt-2">
                    {pages.map((page,index) => (
                        <Link key={index} href={page.url} className="flex-1 text-center h-[100%] content-center border-b-2 font-semibold hover:border-b-2 hover:border-pink-500">
                            {page.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Navigation
