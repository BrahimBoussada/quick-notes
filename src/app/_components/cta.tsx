import { ButtonLink } from "@/components/buttons";
import { Plus } from "@/components/svg/plus";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Cta = () => {
  const plusStyle = "size-20 opacity-24";

  return (
    <div className="bg-foreground relative mx-auto my-20 max-w-5xl py-20">
      <div className="mx-auto flex max-w-5xl items-center justify-around">
        {/* LEFT */}
        <Plus className={plusStyle} />

        {/* CENTER */}
        <div className="flex flex-col gap-8">
          <h2 className="text-background text-center text-4xl font-semibold">
            Capture Your Thoughts Now!
          </h2>

          <ButtonLink
            className="text-foreground flex items-center gap-2 bg-white text-sm"
            href={"/write"}
          >
            Get Started
            <PlusIcon className="size-4" />
          </ButtonLink>
        </div>

        {/* RIGHT */}
        <Plus className={plusStyle} />
      </div>

      <Image
        src={"/noise.jpg"}
        fill
        className="object-cove pointer-events-none z-50 object-cover opacity-8"
        alt={""}
      />
    </div>
  );
};
