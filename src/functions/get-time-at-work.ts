import moment from "moment";

export const getTimeAtWork = (dateOfCreation: moment.Moment): string => {
  const currentMoment = moment();
  const duration = moment.duration(currentMoment.diff(dateOfCreation));

  if (duration.asDays() >= 1) {
    return `${Math.floor(duration.asDays())} days`;
  } else if (duration.asHours() >= 1) {
    return `${Math.floor(duration.asHours())} hours`;
  } else {
    return `${Math.floor(duration.asMinutes())} minutes`;
  }
};
