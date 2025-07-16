import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul className="pt-2 float-end mt-3 ml-5 d-flex font-semibold text-xl">
        <Link className="Navlink px-5" href="/Home">Home</Link>
        <Link className="Navlink px-5" href="/About">About</Link>
        <Link className="Navlink px-5" href="/Contacts">Contacts</Link>
        <Link className="Navlink px-5" href="/Projects">Projects</Link>
      </ul>
    </div>
  );
}
