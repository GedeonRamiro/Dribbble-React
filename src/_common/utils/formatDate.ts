

const formatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

const formatDate = (date: Date = new Date()) => formatter.format(date)

export default formatDate