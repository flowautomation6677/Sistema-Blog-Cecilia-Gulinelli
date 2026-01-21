"use client"

import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, FileText, Gavel, Scale } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DefesaMedicaPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Corporate/Premium Hero */}
            <Hero
                title="Defesa Jurídica Especializada para Médicos e Clínicas"
                subtitle="Proteção completa para sua carreira e patrimônio. Defesa ética no CRM, processos judiciais e compliance médico."
                ctaText="Agendar Consultoria Sigilosa"
                variant="b2b" // Uses Gold theme
                ctaAction={() => window.open("https://wa.me/5521979896499?text=Sou médico e gostaria de agendar uma consultoria jurídica.", "_blank")}
            />

            <section className="py-20 bg-muted/30">
                <div className="container max-w-6xl px-4 md:px-8 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary">Blindagem e Defesa Profissional</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-gold-500">
                            <CardHeader>
                                <Gavel className="w-12 h-12 text-gold-600 mb-4" />
                                <CardTitle className="text-xl">Defesa Ética (CRM/CFM)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Acompanhamento técnico em sindicâncias e Processos Ético-Profissionais (PEP) perante os conselhos de classe. Defesa estratégica para evitar penalidades.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-primary">
                            <CardHeader>
                                <Shield className="w-12 h-12 text-primary mb-4" />
                                <CardTitle className="text-xl">Responsabilidade Civil</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Defesa em ações indenizatórias por suposto erro médico. Atuação técnica para demonstrar a correção da conduta profissional e afastar o dever de indenizar.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-gray-600">
                            <CardHeader>
                                <FileText className="w-12 h-12 text-gray-700 mb-4" />
                                <CardTitle className="text-xl">Compliance e Documentos</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Elaboração e revisão de Termos de Consentimento Livre e Esclarecido (TCLE), contratos de prestação de serviços e prontuários para prevenção de litígios.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Specialist Matters */}
            <section className="py-20 bg-white">
                <div className="container max-w-5xl px-4 md:px-8 mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Por que um escritório especializado?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            O Direito Médico possui particularidades que exigem conhecimento técnico aprofundado, tanto da legislação quanto da prática clínica.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Nossa atuação visa não apenas defender o médico em processos já instaurados, mas atuar preventivamente para garantir a segurança na tomada de decisões e na gestão da clínica.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3">
                                <Scale className="w-5 h-5 text-gold-600" />
                                <span className="font-medium">Sigilo Absoluto e Discrição</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Scale className="w-5 h-5 text-gold-600" />
                                <span className="font-medium">Domínio das Resoluções do CFM</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Scale className="w-5 h-5 text-gold-600" />
                                <span className="font-medium">Assistência Jurídica Permanente</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center">
                        {/* Placeholder for a professional abstract image or icon composition */}
                        <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-primary/10 to-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/20">
                            <Shield className="w-32 h-32 text-gold-600/20" />
                        </div>
                    </div>
                </div>
                <div className="container max-w-5xl px-4 mx-auto mt-12 text-center">
                    <Button size="lg" variant="gold" className="px-12 py-6 text-lg shadow-xl" asChild>
                        <Link href="https://wa.me/5521979896499">
                            Falar com Advogado Especialista em Defesa Médica <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
