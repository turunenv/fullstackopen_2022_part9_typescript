interface BmiInput {
  height: number,
  weight: number
}

const parseArguments = (args: Array<string>): BmiInput => {
  //check if two arguments were given from the command line
  if (args.length > 4) {
    throw new Error('Too many arguments!');
  } else if (args.length < 4) {
    throw new Error('Not enough arguments!');
  }

  //check that both input values were indeed numbers and were not coerced to NaN
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error('Provided values must be numbers!');
  }
};

export const calculateBmi = (height: number, weight: number): string => {
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
};

//console.log(calculateBmi(180,74));

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong.';

    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}

