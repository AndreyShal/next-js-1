import Link from "next/link";

const TheHeader = () => {
    return (
        <header>
            <nav className={"flex items-center justify-between flex-wrap bg-teal-500 p-6"}>
                <Link className={"mr-6"} href={'/'}>home </Link>
                <Link className={"mr-6"} href={'/blog'}>blog </Link>
                <Link className={"mr-6"} href={'/about'}>about </Link>
            </nav>
        </header>
    )
}

export {TheHeader};