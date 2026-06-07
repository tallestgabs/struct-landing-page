import { Struct_Logo } from "./Struct";

export function Footer() {
  return (
    <footer className="inset -x-0 fixed bottom-0 flex w-full justify-center bg-gray-900 p-1 text-white/60">
      <h1 className="p-2 text-[40px]">{"{struct}"}</h1>
      <p className="p-6">Copyright © 2024 | Created by Us</p>
    </footer>
  );
}
