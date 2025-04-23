export default function formatCurrency(value: number) {
    const valueFormatter = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    })

    return valueFormatter.format(value)
}