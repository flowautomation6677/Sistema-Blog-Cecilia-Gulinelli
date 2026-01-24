"use client"

import Link from "next/link"
import { MapPin, Phone, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-green-900 text-white pt-16 pb-8 border-t border-gold-500/30">
            <div className="container px-4 md:px-8 mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left">
                {/* Brand & Resume */}
                <div className="space-y-4 flex flex-col items-center md:items-start">
                    {/* Using text for Logo in footer for better contrast/color control or svg if available. 
                 If image is transparent PNG, it works. I'll use the Next Image if possible or text fallback.
             */}
                    <div className="bg-white/90 p-2 rounded-md inline-block w-40">
                        <Image src="/logo.png" alt="Gulinelli Advocacia" width={160} height={50} className="w-full h-auto object-contain" />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto md:mx-0">
                        Escritório especializado em Direito Previdenciário Empresarial e para Pessoas Físicas. Garantindo direitos e recuperando créditos com segurança jurídica.
                    </p>
                    <div className="flex gap-4 pt-2 justify-center md:justify-start">
                        <Link href="#" className="hover:text-gold-500 transition-colors"><Instagram className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-gold-500 transition-colors"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-gold-500 transition-colors"><Linkedin className="h-5 w-5" /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-gold-500 font-semibold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h3>
                    <ul className="space-y-3 text-sm text-gray-300 w-full">
                        <li><Link href="/b2b" className="hover:text-white transition-colors">Para Empresas</Link></li>
                        <li><Link href="/planejamento-contributivo" className="hover:text-white transition-colors">Planejamento Contributivo</Link></li>
                        <li><Link href="/b2c" className="hover:text-white transition-colors">Para Pessoas Físicas</Link></li>
                        <li><Link href="/bpc-loas" className="hover:text-white transition-colors">BPC/LOAS (Indeferidos)</Link></li>
                        <li><Link href="/passivo-trabalhista" className="hover:text-white transition-colors">Gestão de Passivo</Link></li>
                        <li><Link href="/blog" className="hover:text-white transition-colors">Blog Jurídico</Link></li>
                    </ul>
                </div>

                {/* NAP - Local SEO Goldmine */}
                <div className="md:col-span-2 flex flex-col items-center md:items-start">
                    <h3 className="text-gold-500 font-semibold mb-6 uppercase tracking-wider text-sm">Atendimento & Localização</h3>
                    <div className="grid sm:grid-cols-2 gap-8 w-full max-w-2xl">
                        <div className="space-y-6 text-sm text-gray-300 flex flex-col items-center md:items-start">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 md:mt-0.5" />
                                <div>
                                    <strong className="block text-white mb-1">Nova Iguaçu (Sede)</strong>
                                    <p>Rua Getúlio Vargas, 131, Sala 211</p>
                                    <p>Centro, Edifício Metropolis</p>
                                    <p>Nova Iguaçu - RJ</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 md:mt-0.5" />
                                <div>
                                    <strong className="block text-white mb-1">Austin (Filial)</strong>
                                    <p>Rua Coronel Monteiro de Barros, 623, Sala 01</p>
                                    <p>Austin, Nova Iguaçu - RJ</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 text-sm text-gray-300 flex flex-col items-center md:items-start">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 md:mt-0.5" />
                                <div>
                                    <strong className="block text-white mb-1">Atendimento Online</strong>
                                    <p>Abrangência: Todo Rio de Janeiro e Duque de Caxias.</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0 md:mt-0.5" />
                                <div>
                                    <p>(21) 97989-6499</p>
                                    <p>(21) 98808-3592</p>
                                </div>
                            </div>
                            <Button variant="gold" className="w-full mt-2 font-semibold" asChild>
                                <Link href="https://wa.me/5521979896499" target="_blank" className="flex flex-row items-center justify-center gap-2">
                                    <MessageCircle className="h-5 w-5" />
                                    Falar com Advogada
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-8 mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs text-white">
                <p>© {new Date().getFullYear()} Gulinelli Advocacia. Todos os direitos reservados. OAB/RJ Suspensão e Reativação sob consulta.</p>
                <p className="mt-2">Desenvolvido com foco em alta performance.</p>
            </div>
        </footer>
    )
}
