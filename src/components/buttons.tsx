import { cn } from "@/lib/ultis";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = React.ComponentProps<typeof Link>;

const style =
  "bg-foreground text-background mx-auto flex w-fit rounded-[4px] px-4 py-2 font-medium";

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button type="button" className={cn(style, className)} {...props}>
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link className={cn(style, className)} {...props}>
      {children}
    </Link>
  );
};
