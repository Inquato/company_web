import Image from "next/image";
export function Logo({ light = false }: { light?: boolean }) {
  return <Image src="/logo.png" alt="INQUATO" width={723} height={216} priority className={`h-7 w-auto ${light ? "brightness-0 invert" : ""}`} />;
}
