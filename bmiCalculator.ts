const calculateBmi = (height: number, weight: number): string => {
  const heightInMeters = height / 100;
  
  const bmi = weight / heightInMeters**2;
  let feedback;

  if (bmi < 18.5) {
    feedback = 'Underweight';
  } else if (bmi < 25) {
    feedback = 'Normal (healthy weight)';
  } else if (bmi < 30) {
    feedback = 'Overweight';
  } else {
    feedback = 'Obese';
  }

  return feedback;
}

console.log(calculateBmi(180,74));