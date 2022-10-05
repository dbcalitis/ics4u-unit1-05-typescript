/**
 * The program calculates the length
 * of the wood that is 1 board foot in dimension
 *
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-09-19
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * @param {number} width Width of the wood
 * @param {number} height Height of the wood
 * @returns {number} length Length of the wood
 */
function BoardLength(width: number, height: number): number {
  const BOARD_FOOT = 144
  const length = BOARD_FOOT / (width * height)
  return length
}

console.log(
  'This program figures out the length of a wooden board that is 1 board foot in dimension. (1 board foot is 144 inches³ of wood)'
)

// Gets the width of the wood
const userWidth = prompt('Enter the width (inch): ')
const userWidthFloat = parseFloat(userWidth)

// Checks if the input width is a number
if (isNaN(userWidthFloat)) {
  console.log('Invalid Input.')
} else {
  // Gets the length of the wood
  const userHeight = prompt('Enter the height (inch): ')
  const userHeightFloat = parseFloat(userHeight)

  // Checks if the input height is a number
  if (isNaN(userHeightFloat)) {
    console.log('Invalid Input.')
  } else {
    console.log(
      `\nThe wood should be ${BoardLength(
        userWidthFloat,
        userHeightFloat
      )} inch(es) long.`
    )
  }
}

console.log('\nDone.')
