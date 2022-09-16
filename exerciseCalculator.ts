interface ExerciseResult  {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number 
}

interface ExerciseInput {
  exerciseHours: Array<number>,
  target: number,
}

const parseExerciseInput = (args: Array<string>): ExerciseInput => {
  if ((process.argv.length < 4)) {
    throw new Error('Provide at least two arguments: target day1 [day2 day3 ...]');
  }

  //target is the first argument from the command line, so
  //the exerciseHours array starts from index 3
  const target = Number(args[2]);
  const exerciseHours = args.slice(3).map(arg => Number(arg));
  const allElementsAreNumbers = exerciseHours.every(arg => !isNaN(arg));

  //all array elements and target value are numbers?
  if (allElementsAreNumbers && !isNaN(target)) {
    return {
        exerciseHours,
        target,
    }
  } else {
    throw new Error('all arguments must be numbers!')
  }
}

const calculateExercises = (exerciseHours: Array<number>, target: number): ExerciseResult => {
  //number of days
  const periodLength = exerciseHours.length;
  //training days
  const trainingDays = exerciseHours.filter(hours => hours > 0).length;
  //average training amount per day
  const average = exerciseHours.reduce((acc, currentHours) => acc + currentHours, 0)/periodLength;
  //was the average over the target value?
  const success = average >= target;
  
  //performance rating from 1-3
  //3 if target was reached, 2 if average was over 80% of target, otherwise 1
  let rating;
  let ratingDescription;
  if (success) {
    rating = 3;
    ratingDescription = 'Great job on reaching the goal!';
  } else if (average > 0.8 * target) {
    rating = 2;
    ratingDescription = 'Good job, but still room for improvement!';
  } else {
    rating = 1;
    ratingDescription = 'Try to find more time to reach your goals!';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average, 
  }
}

//console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))

try {
    const { exerciseHours, target } = parseExerciseInput(process.argv);
    console.log(calculateExercises(exerciseHours, target));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong.';

    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}