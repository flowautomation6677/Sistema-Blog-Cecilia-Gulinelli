"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroProps {
    title: string
    subtitle: string
    ctaText: string
    ctaAction?: () => void
    imageSrc?: string
    variant?: "b2b" | "b2c"
}

export function Hero({ title, subtitle, ctaText, variant = "b2c" }: HeroProps) {
    const isB2B = variant === "b2b"

    const scrollToCalculator = () => {
        const id = isB2B ? "termometro" : "calculadora"
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section className="relative overflow-hidden py-20 lg:py-32">
            {/* Background Gradient */}
            <div className={cn(
                "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]",
                isB2B ? "from-gold-500/10 via-background to-background" : "from-green-800/10 via-background to-background"
            )} />

            <div className="container flex max-w-7xl flex-col items-center gap-8 text-center px-4 md:px-8 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 flex flex-col items-center"
                >
                    <div className={cn(
                        "inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase shadow-sm",
                        isB2B ? "border border-gold-500/30 text-gold-600 bg-gold-500/5" : "border border-green-800/30 text-primary bg-green-800/5"
                    )}>
                        Advocacia Especializada {isB2B ? "Empresarial" : "Previdenciária"}
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-primary max-w-5xl mx-auto drop-shadow-sm leading-[1.1]">
                        {title}
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Button
                        size="lg"
                        variant={isB2B ? "gold" : "default"}
                        className="text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                        onClick={scrollToCalculator}
                    >
                        {ctaText}
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
