export const fetchCalendar = (
  today
) => `*[_type =="calendrier" && date >= '${today}'] | order(date asc){
    _id,
    title,
    "slug":slug.current,
    artiste[]->,
    description,
    complet,
    prix,
    date,
    mainImage,
    "recurrents":evenements->{
      title,
      mainImage,
      artiste[]->,
      description,
      "slug":slug.current
    }, 
  } `;

export const fetchPhotosVideos = () => `*[_type =="photos"] | order(date asc){
      _id,
      title,
      description, 
      images[]
 
    } `;
