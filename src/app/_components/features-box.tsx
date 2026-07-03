import { Container } from "@/components/layouts/container";
import { DatabaseIcon, ItalicIcon, PaletteIcon } from "lucide-react";
import React from "react";

export const FeatureRectangle = ({
  number,
  title,
  desc,
  icon: Icon,
}: {
  number: number;
  title: string;
  desc: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="border-foreground grid grid-cols-1 md:grid-cols-[1px_1fr_1px_1fr_1px]">
      {/* LEFT LINE */}
      <div className="bg-foreground w-full" />

      {/* LEFT */}

      {/* BOX */}
      <div className="hover:bg-foreground/5 duration-300">
        {/* CONTAINER */}
        <div className="mx-auto my-20 flex max-w-sm flex-col items-center justify-center gap-4 text-center">
          {/* NUMBER + HEADING */}
          <h3 className="text-xl font-medium">
            <sup>{number}</sup> {title}
          </h3>

          {/* PARAGRAPH */}
          <p>{desc}</p>
        </div>
      </div>

      {/* MIDDLE LINE */}
      <div className="bg-foreground w-full" />
      {/* BOX */}
      <div className="hover:bg-foreground/5 duration-300">
        <div className="mx-auto my-20 flex max-w-sm items-center justify-center">
          <Icon className="size-36" strokeWidth={0.5} />
        </div>
      </div>

      {/* RIGHT LINE */}
      <div className="bg-foreground w-full" />
    </div>
  );
};

export const FeaturesGate = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="mx-auto w-fit border border-b-0 p-6 text-xl font-semibold">
        Thoughtfully Designed for Writing
      </h2>

      {/* TOP BORDER */}
      <div className="bg-foreground w-full border-b" />
      <FeatureRectangle
        number={1}
        title={"Rich Text Editor"}
        desc={
          "A flexible canvas for your thoughts, where ideas take shape naturally. Text can be highlighted, structured, and arranged to reflect the flow of your mind, turning note-taking into a seamless act of creation."
        }
        icon={ItalicIcon}
      />

      {/* DIVIDER */}
      <div className="bg-foreground w-full border-b" />

      <FeatureRectangle
        number={2}
        title={"Themes & Fonts"}
        desc={
          "Subtle choices in fonts and visual styles let the workspace adapt to your rhythm. Light or dark themes, serif or sans, create an atmosphere that encourages focus, clarity, and quiet inspiration."
        }
        icon={PaletteIcon}
      />

      {/* DIVIDER */}
      <div className="bg-foreground w-full border-b" />

      <FeatureRectangle
        number={3}
        title={"Privacy & Local Storage"}
        desc={
          "Your words remain where they belong, safe, private, and close at hand. Stored locally in the browser, your notes are always accessible, untouched by servers or accounts, and available whenever thought strikes."
        }
        icon={DatabaseIcon}
      />
      {/* BOTTOM BORDER */}
      <div className="bg-foreground w-full border-b" />
    </div>
  );
};
