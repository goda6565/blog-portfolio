import Image from "next/image"

const schools = [
    {
        name: "",
        faculty: "",
        department: "",
        start: "2026/04",
        end: "（修士課程進学予定）",
        image: {
            name: "master's",
            src: null,
        },
    },
    {
        name: "早稲田大学",
        faculty: "基幹理工学部",
        department: "情報通信学科",
        start: "2022/04",
        end: "2026/03",
        image: {
            name: "university",
            src: "/school/waseda.jpg",
        },
    },
    {
        name: "早稲田摂陵高等学校",
        faculty: "",
        department: "",
        start: "2019/04",
        end: "2022/03",
        image: {
            name: "highschool",
            src: "/school/seturyo.png",
        },
    },
]

const Timeline = () => {
    return(
        <div className="w-full flex flex-col items-center justify-center">
            {schools.map((school, index) => (
                <div key={index} className="flex justify-center min-h-[20vh] w-full">
                    <div className="flex flex-col w-[20%]">
                        <div className="rounded-full  bg-zinc-300 w-[10px] h-[10px] mx-auto"></div>
                        <div className=" bg-zinc-300 w-[2px] h-[100%] mx-auto"></div>
                    </div>
                    <div className="w-[80%]">
                        <div className="flex flex-col h-full">
                            <h2>{school.start}～{school.end}</h2>
                            <div className="flex-1 flex h-full items-center">
                                <div>
                                    {school.image.src ? (
                                        <Image
                                            className="rounded-xl mx-3"
                                            alt={school.image.name}
                                            src={school.image.src}
                                            width={100}
                                            height={100}
                                            priority
                                        />
                                    ) : null}
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold">{school.name}</h2>
                                    <p className="text-sm">{school.faculty}</p>
                                    <p className="text-sm">{school.department}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Timeline