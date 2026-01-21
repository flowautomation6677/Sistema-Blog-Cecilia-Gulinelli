"use client"

import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building2, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MissionVisionValues } from "@/components/mission-vision-values"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero
        title="Excelência Jurídica em Direito Previdenciário e planejamento contributivo para empresários"
        subtitle="Soluções jurídicas personalizadas para garantir sua aposentadoria e proteger seus direitos na saúde."
        ctaText="Fale com um Especialista"
        imageSrc="/cecilia-home.jpg"
        variant="b2b" // Keeps the gold theme base
        ctaAction={() => window.open("https://wa.me/5565999999999?text=Olá, vim pelo site e gostaria de atendimento.", "_blank")}
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl px-4 md:px-8 mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase shadow-sm border border-gold-500/30 text-gold-600 bg-gold-500/5">
              Sobre a Especialista
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Dra. Cecilia Gulinelli</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com anos de atuação dedicada, Dra. Cecilia Gulinelli construiu uma trajetória sólida na advocacia, pautada pela ética, transparência e busca incessante pelos direitos de seus clientes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialista em Direito Previdenciário e Médico, oferece um atendimento acolhedor e estratégico, garantindo que cada caso receba a atenção e a expertise necessárias para o melhor desfecho possível.
            </p>
            <Button variant="outline" className="border-gold-500 text-gold-700 hover:bg-gold-50">
              Saiba Mais
            </Button>
          </div>
          {/* Optional: You could add another image or stats here if needed, or just keep it text focused since hero has image */}
          <div className="flex-1 bg-muted/20 rounded-2xl p-8 border border-border">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold text-gold-600 mb-2">+15</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-gold-600 mb-2">+1000</div>
                <div className="text-sm text-muted-foreground">Casos Solucionados</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-gold-600 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Comprometimento</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-gold-600 mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Suporte Dedicado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" id="areas-atuacao">
        <div className="container max-w-6xl px-4 md:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Áreas de Atuação</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* B2B Card */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-gold-500 flex flex-col">
              <CardHeader>
                <Building2 className="w-12 h-12 text-gold-600 mb-4" />
                <CardTitle className="text-2xl">Para Empresas</CardTitle>
                <CardDescription>Gestão Estratégica e Tributária</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground">
                  Planejamento contributivo estratégico para empresários: pague o justo hoje para garantir o teto amanhã.
                </p>
                <Button asChild variant="gold" className="w-full mt-4">
                  <Link href="/planejamento-contributivo" className="flex items-center justify-center w-full">
                    Soluções Empresariais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* B2C Card */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-primary flex flex-col">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Para Você</CardTitle>
                <CardDescription>Previdenciário</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground">
                  Planejamento de aposentadoria, BPC/LOAS, auxílio-doença, pensão por morte e revisão de benefícios.
                </p>
                <Button asChild variant="default" className="w-full mt-4">
                  <Link href="/b2c" className="flex items-center justify-center w-full">
                    Pessoa Física <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <MissionVisionValues />

      {/* Our Offices Section */}
      <section className="py-20 bg-[#F5F5F0]"> {/* Light beige similar to image */}
        <div className="container max-w-6xl px-4 md:px-8 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#52525B]">Nossos Escritórios</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Matriz Card */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col group hover:shadow-2xl transition-all">
              <div className="bg-[#4CA7A0] p-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>

                {/* Icon/Letter */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hidden md:flex">
                  <span className="text-3xl font-bold">A</span>
                </div>

                <h3 className="text-2xl font-bold mb-1">Matriz</h3>
                <p className="text-white/90 text-sm font-medium mb-4">(Austin/ Nova Iguaçu)</p>
                <p className="text-sm opacity-90 leading-relaxed max-w-sm mx-auto">
                  Coronel Monteiro de Barros, 623, sl 01<br />
                  Austin/ Nova Iguaçu - CEP 26087-150
                </p>

                <div className="mt-6 inline-flex items-center gap-2 bg-white/20 px-6 py-2 rounded-full backdrop-blur-md border border-white/20 hover:bg-white/30 transition-colors w-fit mx-auto cursor-pointer">
                  <span className="font-bold text-lg">9 7989-6499</span>
                </div>
              </div>

              {/* Map Embed */}
              <div className="h-64 w-full bg-muted relative">
                <iframe
                  title="Mapa da Matriz em Austin"
                  src="https://maps.google.com/maps?q=Rua+Coronel+Monteiro+de+Barros,+623,+Austin,+Nova+Iguaçu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Filial Card */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col group hover:shadow-2xl transition-all">
              <div className="bg-[#1A5F58] p-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-2xl"></div>

                {/* Icon/Letter */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hidden md:flex">
                  <span className="text-3xl font-bold">B</span>
                </div>

                <h3 className="text-2xl font-bold mb-1">Filial</h3>
                <p className="text-white/90 text-sm font-medium mb-4">(Centro/ Nova Iguaçu)</p>
                <p className="text-sm opacity-90 leading-relaxed max-w-sm mx-auto">
                  Rua Getúlio Vargas, 121, sl 211<br />
                  Centro/ Nova Iguaçu - CEP 26255-060
                </p>

                <div className="mt-6 inline-flex items-center gap-2 bg-white/20 px-6 py-2 rounded-full backdrop-blur-md border border-white/20 hover:bg-white/30 transition-colors w-fit mx-auto cursor-pointer">
                  <span className="font-bold text-lg">(21) 3759-3114</span>
                </div>
              </div>

              {/* Map Embed */}
              <div className="h-64 w-full bg-muted relative">
                <iframe
                  title="Mapa da Filial no Centro de Nova Iguaçu"
                  src="https://maps.google.com/maps?q=Rua+Getúlio+Vargas,+121,+Centro,+Nova+Iguaçu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
