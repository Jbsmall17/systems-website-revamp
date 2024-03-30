// Helper function to check if the request body is empty
function isRequestBodyEmpty(data) {
  return Object.keys(data).length === 0;
}

function populationFormat(record) {
  return {
    "id": record.id,
    "type": record.fields['Type'],
    "count": record.fields['Count']
  }
}

function formatDate(isoDate) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(isoDate).toLocaleDateString(undefined, options);
}

function newsFormat(record) {
    let image = record.fields['Image'];
    let imageUrl = image[0].url;
    
    const formattedDate = formatDate(record.fields['Date']);
    return {
        "id": record.id,
        "newsTitle": record.fields['Title'],
        "newsStory": record.fields['Content'],
        "url": imageUrl,
        "link": record.fields['Link'],
        "newsDate": formattedDate
    }
}

function projectsFormat(record) {
    let image = record.fields['Image'];
    let imageUrl;
    if (!image) {
      imageUrl = ''
    }
    else {
      imageUrl = image[0].url; 
    }
    
    let pdf = record.fields['Pdf'];
    let pdfUrl;
    if (!pdf) {
      pdfUrl = ''
    }
    else {
      pdfUrl =  pdf[0].url; 
    }

    let video = record.fields['Video'];
    let videoUrl;
    if (!video) {
      videoUrl = ''
    }
    else {
      videoUrl =  video[0].url; 
    }

    let isTopProject = record.fields['IsTopProject'] || false;

    return {
        "id": record.id,
        "student_name": record.fields['StudentName'],
        "title": record.fields['Title'],
        "image": imageUrl,
        "video": videoUrl,
        "pdf": pdfUrl,
        "topProject":  isTopProject ? true : false
    }
}


function alumniFormat(record) {
  return {
    "id": record.id,
    "name": record.fields['Name'],
    "notes": record.fields['Notes']
  }
}

function galleryFormat(record) {
  let image = record.fields['Image'];
  let imageUrl = image[0].url;
  return {
      "id": record.id,
      "name": record.fields['Name'],
      "image": imageUrl
  }
}

function staffFormat(record) {
  let image = record.fields['Image'];
  let imageUrl
  if (!image) {
    imageUrl = ''
  }
  else {
    imageUrl = image[0].url; 
  }
  return {
      "id": record.id,
      "name": record.fields['Name'],
      "title": record.fields['Title'],
      "image": imageUrl,
      "position": record.fields['Position']
  }
}

function admissionsFormat(record) {
  let criteriaList = record.fields['Criteria']
    .split('\n')
    .map(criterion => criterion.trim())
    .filter(criterion => criterion !== '');
  return {
      "id": record.id,
      "name": record.fields['Name'],
      "criteria": criteriaList
  }
}

function storiesFormat(record) {
  let image = record.fields['Image'];
  let imageUrl = image[0].url;
  return {
      "id": record.id,
      "name": record.fields['Name'],
      "award": record.fields['Award'],
      "content": record.fields['Content'],
      "image": imageUrl
  }
}

function questionBank(record) {
  const pdfLinks = record.fields['Pdf'].map((pdf) => pdf.url);
  return {
    "id": record.id,
    "level": record.fields['Level'],
    "session": record.fields['Session'],
    "pdf": pdfLinks,
    "semester": record.fields['Semester']
  }
}

export {
  isRequestBodyEmpty, populationFormat, newsFormat, projectsFormat,
  alumniFormat, galleryFormat, staffFormat,
  admissionsFormat, storiesFormat, questionBank
}