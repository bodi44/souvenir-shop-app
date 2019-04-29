//API fetcher
const API = 'http://data.fixer.io/api/latest?access_key=26d6132618a9e2ec422be84ba48a260a'

const handleErrors = res => {
  if (!res.ok)
    throw new Error(res.statusText)
  else return res
}

export const getAllCurrencies = async () =>
  handleErrors(await fetch(API)).json()