'use client'
import createGuest from "@/serverAction/prismaActions/createGuest";
import server from "@/serverAction/server";
import Link from "next/link";

export default function Home() {
  async function handleClick() {
    const user = await createGuest()
    console.log({ user });

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hi
      <button onClick={() => server()}>click me</button>
      <button onClick={handleClick}>click me to create user</button>
      <Link href='testall/test'>test faker</Link>
    </main>
  );
}
