const pathPushQueryParams = (eventIndex: number, value: string) => {
  return `/calendrier?i=${eventIndex}&m=${value.replace(" ", "-")}`;
};

export default pathPushQueryParams;
