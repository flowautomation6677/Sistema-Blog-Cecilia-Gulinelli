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

export function Hero({ title, subtitle, ctaText, ctaAction, imageSrc, variant = "b2c" }: HeroProps) {
    const isB2B = variant === "b2b"

    const scrollToCalculator = () => {
        if (ctaAction) {
            ctaAction()
            return
        }
        const id = isB2B ? "termometro" : "calculadora"
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
            {/* Background Gradient */}
            <div className={cn(
                "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]",
                isB2B ? "from-gold-500/10 via-background to-background" : "from-green-800/10 via-background to-background"
            )} />

            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl px-4 md:px-8 mx-auto">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <div className={cn(
                        "inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase shadow-sm",
                        isB2B ? "border border-gold-500/30 text-gold-600 bg-gold-500/5" : "border border-green-800/30 text-primary bg-green-800/5"
                    )}>
                        Advocacia Especializada {isB2B ? "Empresarial" : "Previdenciária"}
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-primary drop-shadow-sm leading-[1.1]">
                        {title}
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {subtitle}
                    </p>

                    <Button
                        size="lg"
                        variant={isB2B ? "gold" : "default"}
                        className="text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                        onClick={scrollToCalculator}
                    >
                        {ctaText}
                    </Button>
                </motion.div>

                {/* Hero Image */}
                {imageSrc && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 w-full max-w-md lg:max-w-full relative"
                    >
                        <div className={cn(
                            "relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border-4",
                            isB2B ? "border-gold-500/20" : "border-primary/20"
                        )}>
                            <div className={cn("absolute inset-0 z-10 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply")} />
                            <img
                                src={imageSrc}
                                alt="Dra. Cecilia Gulinelli"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className={cn(
                            "absolute -bottom-6 -left-6 w-24 h-24 rounded-full -z-10 blur-2xl",
                            isB2B ? "bg-gold-500/30" : "bg-primary/30"
                        )} />
                        <div className={cn(
                            "absolute -top-6 -right-6 w-32 h-32 rounded-full -z-10 blur-3xl",
                            isB2B ? "bg-gold-500/20" : "bg-primary/20"
                        )} />
                    </motion.div>
                )}
            </div>
        </section>
    )
}
