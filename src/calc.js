export const printQuantity = (n, l) => {
  if (n == 0) {
    return ''
  }
  let c = ''
  if (n % 100 >= 10 && n % 100 <= 20) {
    c = l.m
  } else {
    switch (n % 10) {
      case 2:
      case 3:
      case 4:
        c = l.n234
        break
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 0:
        c = l.n567890
        break
      case 1:
        c = n > 1 ? l.nx : l.n1
        break
      default:
        c = l.n1
        break
    }
  }
  return `${n} ${c}`
}

const day = 24 * 60 * 60 * 1000

export const printPeriod = (
  start,
  finish,
  localeAnd,
  localeYear,
  localeMonth
) => {
  const f = finish ? Date.parse(finish) : new Date()
  const p = f - Date.parse(start)
  const y = p / (365 * day)
  const fullYears = Math.floor(y)
  const fullMonths = Math.floor((y - fullYears) * 12)
  const a = printQuantity(fullYears, localeYear)
  const b = printQuantity(fullMonths, localeMonth)
  return `${a}${a !== '' && b !== '' ? ' ' + localeAnd + ' ' : ''}${b}`
}

export const printAge = (birthday, locale, localeYear) => {
  const fullYears = Math.floor(
    (new Date() - Date.parse(birthday)) / (365 * day)
  )
  switch (locale) {
    case 'en':
      return `${fullYears} years old`
    default:
      return printQuantity(fullYears, localeYear)
  }
}

export const dateInWords = (d, l) => {
  return new Date(d).toLocaleString(l, {
    month: 'short',
    year: 'numeric',
  })
}
