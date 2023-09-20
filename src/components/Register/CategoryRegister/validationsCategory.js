export const validateName = (name) => {
    const length = name.trim().length;
    return length > 0 ? true : false;
}

export const validateDescription = (description) => {
    const length = description.trim().length;
    return length > 0 ? true : false;
}