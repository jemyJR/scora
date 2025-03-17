export const getPlanColor = (plan) => {
  switch (plan) {
    case 'TIER_ONE': return 'success';
    case 'TIER_FOUR': return 'warning';
    default: return 'primary';
  }
};

export const formatSeasonYear = (startDate) => {
  return new Date(startDate).getFullYear();
};