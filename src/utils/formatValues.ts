export function formatNumber(summary: number){
  return (
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(summary)
  )
}


export function formatDate(date: string){
  return (
    new Intl.DateTimeFormat('pt-br').format(new Date(date))
  );
}
