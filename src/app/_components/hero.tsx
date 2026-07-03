import { ButtonLink } from "@/components/buttons";
import { Container } from "@/components/layouts/container";
import { AsteriskIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <Container>
      {/* HEADING AND PARAGRAPH */}
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-5xl leading-snug font-bold">
          Your Notes. Your Space. <br />
          Private & Simple.
        </h1>

        <p className="mx-auto max-w-lg font-medium">
          QuickNotes is a private, minimalist journaling tool that stores notes
          locally with simple, subtle customization.
        </p>
      </div>
      {/* EDITOR */}
      <div className="relative mx-auto my-12 aspect-3/2 max-w-4xl">
        <div className="h-full w-full bg-white" />
      </div>

      {/* BUTTON */}

      <ButtonLink href={"/write"}>Take Your First Notes</ButtonLink>

      {/* ASTERISKS */}
      <div className="flex flex-col items-center justify-center gap-8">
        <AsteriskIcon className="size-4" />
        <AsteriskIcon className="size-6" />
        <AsteriskIcon className="size-8" />
      </div>
    </Container>
  );
};
