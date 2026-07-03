import Link from "next/link";
import { Logo } from "../svg/logo";
import { Container } from "./container";

export const TopNavbar = () => {
  return (
    <header>
      <Container>
        <nav className="flex items-center justify-center">
          <Link href={"/"}>
            <Logo className={"h-6"} />
          </Link>{" "}
        </nav>
      </Container>
    </header>
  );
};
