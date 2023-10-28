"use client"; //
import React from "react";
import { Main } from "@/Components/Main/Main";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex flex-col items-center justify-between h-full">
        <Main />
      </main>
    </NextUIProvider>
  );
}
