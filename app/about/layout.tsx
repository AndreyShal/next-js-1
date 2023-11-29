import Link from 'next/link'
import React from "react";

export default function AboutLayout({children}:{children: React.ReactNode}) {
    return (
        <div className={'flex items-center justify-center flex-col'}>
            <h1>About as</h1>
            <ul>
                <li>
                    <Link href={"/about/contacts"}>Contacts</Link>
                </li>
                <li>
                    <Link href={"/about/team"}>Team</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}