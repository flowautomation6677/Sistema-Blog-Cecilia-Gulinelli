"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 max-w-7xl items-center justify-between px-4 md:px-8 mx-auto">
                <Link href="/" className="flex items-center gap-2 mr-4 lg:mr-8 transition-transform hover:scale-105">
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
                    <Link href="/planejamento-contributivo" className="hover:text-gold-600 transition-colors py-2">Para Empresas</Link>
                    <Link href="/b2c" className="hover:text-gold-600 transition-colors py-2">Para Você</Link>
                    <Link href="/blog" className="hover:text-gold-600 transition-colors py-2">Blog</Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* Ghost button for menu on mobile only */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-gold-600 hover:text-gold-600 hover:bg-gold-500/10 z-[60]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-[9999] h-full w-[85%] sm:w-[350px] bg-white border-l-2 border-gold-500 shadow-2xl p-0 md:hidden flex flex-col"
                            style={{ backgroundColor: '#ffffff', zIndex: 9999, opacity: 1 }}
                        >
                            {/* Menu Header with Logo and Close */}
                            <div className="flex items-center justify-between p-6 border-b border-border/50 bg-white">
                                <Image
                                    src="/logo.png"
                                    alt="Gulinelli Advocacia"
                                    width={160}
                                    height={50}
                                    className="h-10 w-auto object-contain"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsOpen(false)}
                                    className="text-muted-foreground hover:text-destructive"
                                >
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>

                            {/* Menu Items */}
                            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-2">
                                {[
                                    { href: "/", label: "Home" },
                                    { href: "/planejamento-contributivo", label: "Para Empresas" },
                                    { href: "/b2c", label: "Para Você" },
                                    { href: "/blog", label: "Blog Jurídico" },
                                ].map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-lg font-medium text-foreground/80 hover:text-gold-600 hover:bg-gold-500/5 px-4 py-3 rounded-lg transition-all border-l-2 border-transparent hover:border-gold-500"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Menu Footer */}
                            <div className="p-6 border-t border-border/50 bg-muted/20 space-y-4">
                                <div className="text-center text-sm text-muted-foreground mb-2">
                                    Precisa de atendimento urgente?
                                </div>
                                <Button variant="gold" className="w-full gap-2 shadow-lg h-12 text-base" asChild>
                                    <Link href="https://wa.me/5521979896499">
                                        <Phone className="h-5 w-5" />
                                        <span>Falar com Especialista</span>
                                    </Link>
                                </Button>

                                <div className="flex justify-center gap-4 mt-6">
                                    {/* Social proof or icons could go here */}
                                    <div className="text-xs text-muted-foreground/50 text-center w-full">
                                        © 2024 Gulinelli Advocacia
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
