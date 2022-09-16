interface exerciseResult  {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number 
}

const calculateExercises = (exerciseHours: Array<number>, target: number): exerciseResult => {
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))