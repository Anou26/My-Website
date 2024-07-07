"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Footer = () => {
    return (
        <footer className="py-4 bg-primary text-white">
            <div className="container mx-auto flex justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Anoushka Mergoju. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
