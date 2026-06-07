export function Navbar() {
  return (
    <nav className="flex w-full justify-center bg-gray-900 p-3">
      <a
        href="https://struct.unb.br/#sobrenos"
        target="_blank"
        className="flex flex-row px-7 text-[20px] text-white/60"
      >
        Sobre Nós
      </a>
      <a
        href="https://github.com/tallestgabs/struct-landing-page"
        target="_blank"
        className="px-7 text-[20px] text-white/60"
      >
        Github
      </a>
    </nav>
  );
}
