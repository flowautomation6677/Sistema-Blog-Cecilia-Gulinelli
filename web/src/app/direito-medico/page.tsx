"use client"

import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, AlertCircle, HeartPulse, Hospital, Scale } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DireitoMedicoPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* SEO Focused Hero */}
            <Hero
                title="Teve seu Tratamento Negado na Baixada Fluminense?"
                subtitle="Especialistas em liminares contra planos de saúde e SUS. Defesa rápida para garantir sua cirurgia, home care ou medicamento."
                ctaText="Falar com Especialista Agora"
                variant="b2c" // Uses green theme
                ctaAction={() => window.open("https://wa.me/5521979896499?text=Olá, tive um problema com meu plano de saúde e preciso de ajuda urgente.", "_blank")}
            />

            {/* Pain Points Section - SEO Keywords: Nova Iguaçu, Caxias, Unimed Ferj */}
            <section className="py-20 bg-muted/30">
                <div className="container max-w-6xl px-4 md:px-8 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4 text-primary">Problemas com seu Plano de Saúde ou SUS?</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Atuamos com agilidade em **Nova Iguaçu, Duque de Caxias e toda a Baixada**, conhecendo os problemas locais como a crise da Unimed Ferj e a superlotação nos hospitais da região.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-red-500">
                            <CardHeader>
                                <AlertCircle className="w-12 h-12 text-red-600 mb-4" />
                                <CardTitle className="text-xl">Negativa de Cobertura</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Seu plano negou uma cirurgia, exame de alto custo ou tratamento de câncer? Conseguimos liminares na justiça para obrigar o custeio imediato.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-green-600">
                            <CardHeader>
                                <HeartPulse className="w-12 h-12 text-green-700 mb-4" />
                                <CardTitle className="text-xl">Home Care Negado</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Pacientes acamados ou idosos têm direito a internação domiciliar (Home Care) custeada pelo plano ou Estado, incluindo enfermagem 24h se necessário.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-600">
                            <CardHeader>
                                <Hospital className="w-12 h-12 text-blue-700 mb-4" />
                                <CardTitle className="text-xl">Erro Médico</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Sofrimento ou sequelas causadas por negligência em hospitais (como Saracuruna ou Hospital da Posse)? Buscamos sua indenização por danos morais e estéticos.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-gold-500">
                            <CardHeader>
                                <Scale className="w-12 h-12 text-gold-600 mb-4" />
                                <CardTitle className="text-xl">Reajuste Abusivo</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Mensalidade do plano aumentou demais aos 59 anos ou por sinistralidade? Revisamos seu contrato para reduzir o valor e recuperar o que foi pago a mais.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Authority & Speed */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl px-4 md:px-8 mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold text-primary">Por que escolher a Gulinelli Advocacia?</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg text-gold-600">Agilidade (Liminares)</h3>
                            <p className="text-muted-foreground text-sm">Sabemos que saúde não espera. Entramos com pedidos urgentes (liminares) muitas vezes no mesmo dia.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg text-gold-600">Especialistas em Saúde</h3>
                            <p className="text-muted-foreground text-sm">Não somos generalistas. Entendemos os termos médicos e as leis da ANS a fundo.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg text-gold-600">Atendimento Humanizado</h3>
                            <p className="text-muted-foreground text-sm">Tratamos cada cliente com o acolhimento necessário em momentos de fragilidade.</p>
                        </div>
                    </div>
                    <Button size="lg" variant="default" className="mt-8 bg-green-700 hover:bg-green-800 shadow-xl" asChild>
                        <Link href="https://wa.me/5521979896499">
                            Quero Analisar meu Caso sem Compromisso <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
