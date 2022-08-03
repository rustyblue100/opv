export const fetchCalendar = (
  today
) => `*[_type =="calendrier" && date >= '${today}'] | order(date asc){
    _id,
    title,
    "slug":slug.current,
    artiste[]->,
    description,
    site,
    video,
    facebook,
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

export const fetchCalendarSingleEvent = `*[_type =="calendrier" && slug.current == $slug][0]{
  _id,
  title,
  "slug":slug.current,
  artiste[]->,
  description,
  complet,
  prix,
  date,
  video,
  site,
  facebook,
  spotify,
  itunes,
  "mainImage": mainImage.asset->url,
  "recurrents":evenements->{
  title,
  "mainImage": mainImage.asset->url,
    artiste[]->,
    description,
  }, 
}`;

export const fetchPhotosVideos = () => `*[_type =="photos"] | order(date asc){
      _id,
      title,
      description, 
      images[]
 
    } `;
