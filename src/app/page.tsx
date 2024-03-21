import Image from "next/image";

import { Colors } from "./_components/colors/colors";
import { Button } from "./_components/button";
export default function Home() {
  return (
    <>
      <section className="bg-hero-pattern mt-5 xl:mt-20 xl:bg-left">
        <div className="container flex flex-col-reverse items-center xl:flex-row">
          <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
            <h3 className="text-xl dark:text-info xl:text-2xl">
              خوش اومدی به ...
            </h3>
            <h1 className="text-3xl font-black gradient lg:text-3xl xl:text-5xl">
              مسیر صعود به قله های برنامه نویسی
            </h1>

            <p className="text-lg font-bold leading-8">
              هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
              کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
              هواتو داریم.
            </p>
            <Button variant="accent" size="large" >
              دوره های ری اکت و نکست
            </Button>
            <Image
              className="grayscale mt-4 opacity-70 m-auto xl:m-0"
              src="/images/frameworks.png"
              width={412}
              height={39}
              alt=""
            />
          </div>
          <Image
            src="/images/programmer-landing.svg"
            width={702}
            height={521}
            alt="کلاسبن"
          />
        </div>
      </section>
      <div className="container">
        <Button variant="info" size="large" shape="wide" animatedIcon={true}>
          ثبت نام
        </Button>
      </div>
    </>
  );
}
