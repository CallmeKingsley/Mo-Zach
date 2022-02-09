
export const Generate2DArray = () => {
  const row = 6
  const col = 6

  const firstArray = []

  for (let i = 0; i < row; i++) {
    firstArray[i] = []
    for (let j = 0; j < col; j++) {
      firstArray[i][j] = { value: null, status: null, color: 'gray' }
    }
  }

  return firstArray
}

export const GenerateTask = () => {
  const task = []
  const date = new Date().getDate() // 5nd = 5
  const day = new Date().getDay() + 1 // saturday = 6
  const month = new Date().getMonth() // January = 1
  const year = new Date().getFullYear() // 2022

  const firsthalf = date * day * month
  const fullNumber = firsthalf + '' + year + 843
  const predictionString = fullNumber.slice(0, 6)
 
  for (let i = 0; i < predictionString.length; i++) {
    const sound = FindtheSound(predictionString[i])
    task[i] = { value: sound, status: 'hide', color: 'green' }
  }
  return task
}

const FindtheSound = (digit) => {
  let sound = ''

  switch (Number(digit)) {
    case 0:
      sound = 'A'
      break

    case 1:
      sound = 'Ab'
      break
    case 2:
      sound = 'B'
      break
    case 3:
      sound = 'Bb'
      break
    case 4:
      sound = 'C'
      break
    case 5:
      sound = 'D'
      break
    case 5:
      sound = 'E'
      break
    case 6:
      sound = 'Eb'
      break
    case 7:
      sound = 'F'
      break
    case 8:
      sound = 'G'
      break
    default:
      sound = 'B'
      break
  }

  return sound
}
