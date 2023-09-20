export const validateTitle = (title) => {
    const length = title.trim().length;
    return length > 0 ? true : false;
}

export const validateImage = (urlImage) => {
    const length = urlImage.trim().length;
    return length > 0 ? true : false;
}

export const validateCategory = (category) => {
    const length = category.trim().length;
    return length > 0 ? true : false;
}

export const validateDate = (releaseDate) => {
    const length = releaseDate.trim().length;
    return length > 0 ? true : false;
}