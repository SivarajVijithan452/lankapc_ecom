import Image from "next/image";

export default function Home() {
  return (
    <main>
      welcome home

      <Image src="/assets/images/logo.svg" width={200} height={200} alt="logo" />
    </main>
  );
}
