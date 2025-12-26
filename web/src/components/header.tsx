"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 max-w-7xl items-center justify-between px-4 md:px-8 mx-auto">
                <Link href="/" className="flex items-center gap-2 mr-4 lg:mr-8 transition-transform hover:scale-105">
                    {/* Increased Desktop size: w-48 (12rem) or w-56. Mobile kept reasonable. */}
                    <Image
                        src="/logo.png"
                        alt="Gulinelli Advocacia"
                        width={240}
                        height={75}
                        className="h-12 md:h-14 lg:h-16 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop & Tablet Navigation */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-medium text-muted-foreground flex-1 justify-center">
                    <Link href="/b2b" className="hover:text-gold-600 transition-colors py-2">Para Empresas</Link>
                    <Link href="/b2c" className="hover:text-gold-600 transition-colors py-2">Para Você</Link>
                    <Link href="/blog" className="hover:text-gold-600 transition-colors py-2">Blog</Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* Ghost button for menu on mobile only */}
                    <Button variant="ghost" size="icon" className="md:hidden text-gold-600 hover:text-gold-600 hover:bg-gold-500/10">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Menu</span>
                    </Button>

                    {/* Call Button visible on tablet+ */}
                    <Button variant="gold" className="hidden md:flex gap-2 shadow-md">
                        <Link href="https://wa.me/5521979896499" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>Falar pelo WhatsApp</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
