// Function to convert a date-object to a formatted date string

function dateStringFormat(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default dateStringFormat;