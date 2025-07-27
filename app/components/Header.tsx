import Link from "next/link";

export default function Header() {
    const LinkStyling = "p-1 m-2 text-x1 hover:underline";

    return (
        <header>
            <h2>Cat API Display</h2>
            <nav>
                <Link href="/" className={LinkStyling}>Home</Link>
                <Link href="display" className={LinkStyling}>Display</Link>   
            </nav>
        </header>
    )
}