import Image from "next/image";

export default function Home() {
  return (
    <main className="grid place-content-center h-screen bg-primary gap-12">
      <div className="flex flex-col items-center justify-between gap-12">
        <div className="leading-none text-9xl font-extrabold text-center font-geep bg-white px-[2rem] py-[1rem] rounded-full text-black outline-secondary outline-offset-[12px] outline-[12px] outline">
          <h1 className="select-none relative top-[-66%] left-[-50%] translate-x-[50%] translate-y-[50%]">
            geep
          </h1>
        </div>

        <button className="bg-secondary rounded-full flex items-center justify-center w-fit px-[2rem] py-[1rem] font-extrabold text-4xl font-geep">
          enter site
        </button>
      </div>
    </main>
  );
}
