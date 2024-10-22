import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const Profile = () => {
    return(
        <div className="max-w-[500px] w-full">
            <Card>
                <CardHeader>
                    <CardTitle className="text-center font-semibold text-2xl">Profile</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-5 mx-auto">
                    <div>
                        <h2 className="text-center text-2xl">Name</h2>
                        <h2 className="text-center text-xl">郷田 温人</h2>
                    </div>
                    <div>
                        <h2 className="text-center text-2xl">Date of birth</h2>
                        <h2 className="text-center text-xl">2004/03/05</h2>
                    </div>
                    <div>
                        <h2 className="text-center text-2xl">Qualification</h2>
                        <h2 className="text-center text-xl">基本情報技術者試験</h2>
                        <h2 className="text-center text-xl">英検２級</h2>
                    </div>
                    <div>
                        <h2 className="text-center text-2xl">Study</h2>
                        <h2 className="text-center text-xl">NLP</h2>
                        <h2 className="text-center text-xl">LMM</h2>
                    </div>
                    <div>
                        <h2 className="text-center text-2xl">Interest</h2>
                        <h2 className="text-center text-xl">Web アプリ開発</h2>
                        <h2 className="text-center text-xl">サーフィン</h2>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Profile