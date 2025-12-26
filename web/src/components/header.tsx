"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Gulinelli Advocacia" width={180} height={60} className="h-auto w-40 object-contain" priority />
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/b2b" className="hover:text-gold-600 transition-colors">Para Empresas</Link>
                    <Link href="/b2c" className="hover:text-gold-600 transition-colors">Para Você</Link>
                    <Link href="/sobre" className="hover:text-gold-600 transition-colors">Sobre</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                    <Button variant="gold" className="hidden md:flex gap-2">
                        <Phone className="h-4 w-4" />
                        Falar pelo WhatsApp
                    </Button>
                </div>
            </div>
        </header>
    )
}
