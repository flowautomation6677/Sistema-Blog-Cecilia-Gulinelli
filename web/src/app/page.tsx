"use client"

import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building2, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero
        title="Excelência e Estratégia em Direito Previdenciário"
        subtitle="Soluções jurídicas personalizadas para garantir o futuro da sua empresa e a sua aposentadoria."
        ctaText="Conheça Nossas Áreas"
        variant="b2b" // Uses gold theme generally
      />

      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl px-4 md:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Como podemos ajudar?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* B2B Card */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-gold-500">
              <CardHeader>
                <Building2 className="w-12 h-12 text-gold-600 mb-4" />
                <CardTitle className="text-2xl">Para Empresas</CardTitle>
                <CardDescription>Gestão Estratégica e Tributária</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Recuperação de créditos previdenciários, gestão de FAP/RAT e redução de passivo tributário na folha de pagamento.
                </p>
                <Button asChild variant="gold" className="w-full">
                  <Link href="/b2b">
                    Soluções Empresariais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* B2C Card */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Para Você</CardTitle>
                <CardDescription>Planejamento e Aposentadoria</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Planejamento previdenciário, aposentadoria especial e revisão de benefícios. Garanta o melhor valor para o seu futuro.
                </p>
                <Button asChild variant="default" className="w-full">
                  <Link href="/b2c">
                    Serviços para Pessoa Física <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
