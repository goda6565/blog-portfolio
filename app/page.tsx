import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    name: "github",
    url: "https://github.com/goda6565",
    src: "/icon/github-icon.png",
  },
  {
    name: "hugging-face",
    url: "https://huggingface.co/Harutiin",
    src: "/icon/hg-icon.png",
  },
  {
    name: "qiita",
    url: "https://qiita.com/Harutin",
    src: "/icon/qiita-icon.png",
  },
]

export default function Home() {
  return (
    <div className="flex xl:flex-row flex-col items-center justify-center w-full">
      <div className="flex-1 text-center content-center flex flex-col items-center justify-center p-2">
        <h1 className="font-semibold text-3xl mb-5 md:text-5xl">Haruto Goda</h1>
        <p className="mb-3 text-xl">早稲田大学</p>
        <p className="my-3 text-xl">基幹理工学部 情報通信学科学部３年</p>
        <p className="my-3 text-xl">河原研究室</p>
        <div className="flex">
          {icons.map((icon,index) => (
            <Link
              key={index}
              target="_blank" 
              rel="noopener noreferrer" 
              href={icon.url}
              >
              <Image
                className="rounded-xl mx-3"
                alt={icon.name}
                src={icon.src}
                width={30}
                height={30}
                priority />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <Image
          className="rounded-xl mx-auto"
          alt="top"
          src={"/top.png"}
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
}
