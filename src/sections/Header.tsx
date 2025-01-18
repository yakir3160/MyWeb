export const Header = () => {
  return <div className={` flex justify-center items-center fixed top-3 w-full z-10`} >
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm">
      <a href="/" className="nav-link">Home</a>
      <a href="/projects" className="nav-link">Projects</a>
      <a href="/about" className="nav-link">About</a>
      <a href="/contact" className="nav-link bg-text text-background hover:bg-text/80 hover:text-background">Contact</a>
    </nav>
  </div>;
};
