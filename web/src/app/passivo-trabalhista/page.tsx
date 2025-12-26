"use client"

import { Hero } from "@/components/hero"
import { MultiStepForm } from "@/components/multi-step-form"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Flame, Scale, TrendingUp } from "lucide-react"

export default function PassivoTrabalhistaPage() {
    const steps = [
        {
            id: "risk-assessment",
            title: "Termômetro de Risco",
            fields: [
                { name: "employeeCount", label: "Funcionários Ativos", type: "number", placeholder: "Ex: 45" },
                { name: "lawsuitsCount", label: "Processos nos últimos 2 anos", type: "number", placeholder: "Ex: 2" },
            ],
        },
        {
            id: "sector-info",
            title: "Setor e Conformidade",
            fields: [
                { name: "sector", label: "Setor de Atuação", placeholder: "Ex: Construção Civil" },
                { name: "hasAudit", label: "Última auditoria preventiva?", placeholder: "Nunca / 1 ano / 2 anos" },
            ],
        },
        {
            id: "contact",
            title: "Blindagem Jurídica",
            fields: [
                { name: "name", label: "Seu Nome", placeholder: "Gestor ou Sócio" },
                { name: "whatsapp", label: "WhatsApp Corporativo", placeholder: "(21) 99999-9999" },
            ],
        },
    ]

    const handleComplete = (data: any) => {
        console.log("Passivo Lead:", data)
        alert("Dados enviados. Uma análise preliminar de risco será enviada para o seu WhatsApp.")
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <Hero
                title="Sua empresa está sentada em uma Bomba Relógio?"
                subtitle="Passivo Trabalhista Oculto pode quebrar seu caixa. Blinde sua operação com compliance preventivo."
                ctaText="Diagnóstico de Risco"
                variant="b2b"
            />

            <section className="container max-w-5xl mx-auto px-4 -mt-10 relative z-10">
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    <Card className="bg-card/95 backdrop-blur border-t-4 border-t-destructive shadow-lg">
                        <CardHeader className="items-center text-center">
                            <Flame className="h-8 w-8 text-destructive mb-2" />
                            <CardTitle className="text-lg">O Risco Invisível</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            Pequenos erros na folha ou no controle de ponto se acumulam. Quando a fiscalização chega, a multa é retroativa de 5 anos.
                        </CardContent>
                    </Card>
                    <Card className="bg-card/95 backdrop-blur border-t-4 border-t-gold-500 shadow-lg">
                        <CardHeader className="items-center text-center">
                            <Scale className="h-8 w-8 text-gold-600 mb-2" />
                            <CardTitle className="text-lg">Acordos Preventivos</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            Instituir banco de horas e PLR da maneira correta reduz drasticamente as chances de condenação na justiça do trabalho.
                        </CardContent>
                    </Card>
                    <Card className="bg-card/95 backdrop-blur border-t-4 border-t-primary shadow-lg">
                        <CardHeader className="items-center text-center">
                            <TrendingUp className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="text-lg">Lucro Real</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            Empresa auditada vale mais. Reduzir o passivo aumenta o valuation do seu negócio imediatamente.
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Não espere a Intimação chegar</h2>
                        <p className="text-lg text-muted-foreground">
                            Atuamos na Baixada Fluminense conhecendo a realidade dos juízes e varas locais. Nossa estratégia foca em desarmar conflitos antes que virem processos.
                        </p>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-gold-500" />
                                Auditoria de contratos e terceirizados
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-gold-500" />
                                Adequação à NR e Segurança do Trabalho
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-gold-500" />
                                Defesa estratégica em Reclamatórias Trabalhistas
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 w-full" id="termometro">
                        <MultiStepForm
                            title="Termômetro de Risco Trabalhista"
                            description="Faça um check-up rápido da saúde jurídica da sua empresa."
                            steps={steps}
                            onComplete={handleComplete}
                            submitText="Receber Relatório"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
