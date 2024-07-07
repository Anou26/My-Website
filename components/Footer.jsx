"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation';

const Footer = () => {
    const router = useRouter();

    const handleClick = () => {
        window.open('https://www.linkedin.com/in/anoushkamergoju/', '_blank');
        router.push('/Contact');
    };

    return (
        <footer className="py-4 bg-primary text-white">
            <div className="container mx-auto flex justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Anoushka Mergoju. All rights reserved.</p>
                
            </div>
        </footer>
    );
};

export default Footer;
