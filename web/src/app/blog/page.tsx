import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function BlogIndex() {
    const posts = [
        {
            slug: "guia-aposentadoria-2026",
            title: "Guia da Aposentadoria em 2026: O que muda para o trabalhador do Rio de Janeiro",
            excerpt: "Regras de transição, idade mínima e o impacto do pedágio. Entenda como planejar sua saída do mercado de trabalho com segurança.",
            date: "26 Dez 2025",
            category: "Pessoa Física"
        },
        {
            slug: "empresas-baixada-fluminense-inss",
            title: "Empresas na Baixada Fluminense: Como reduzir gastos com o INSS legalmente",
            excerpt: "Recuperação tributária e gestão de FAP são as armas secretas para aumentar o fluxo de caixa de empresas em Nova Iguaçu e Caxias.",
            date: "23 Dez 2024",
            category: "Empresarial"
        }
    ]

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-primary mb-2">Blog Jurídico</h1>
                <p className="text-muted-foreground mb-12">Artigos, notícias e análises sobre Direito Previdenciário.</p>

                <div className="grid gap-8">
                    {posts.map((post) => (
                        <Card key={post.slug} className="group hover:border-gold-500/50 transition-colors">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs uppercase tracking-wider font-semibold text-gold-600">{post.category}</span>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Calendar className="h-3 w-3" /> {post.date}
                                    </span>
                                </div>
                                <CardTitle className="group-hover:text-primary transition-colors text-2xl">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="link" className="px-0 text-gold-600 group-hover:translate-x-1 transition-transform" asChild>
                                    <Link href={`/blog/${post.slug}`}>Ler Artigo Completo &rarr;</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
