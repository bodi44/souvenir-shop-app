const isValidDate = d =>
  d instanceof Date && !isNaN(d)

export default isValidDate