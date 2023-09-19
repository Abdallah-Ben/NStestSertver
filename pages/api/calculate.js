export default async function calculate(req, res) {
  const { operator, num1, num2 } = req.body

  let result
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    switch (operator) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case '*':
        result = num1 * num2
        break
      default:
        result = 'Invalid operator'
    }
  } else {
    result = 'Invalid numbers.'
  }

  res.json({ result })
}
