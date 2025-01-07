//Function to calculate read time of a blog post

function readTimeCalculator(blogContent) {
    const wordCount = blogContent.split(' ').length;
    const readTime = Math.round(wordCount / 100 * 0.3);
    console.log(`Het lezen van ${wordCount} woorden kost ${wordCount / 100 * 0.3} minuten om te lezen. Afgerond is dat ${readTime} minuten.`);
    return readTime
}

export default readTimeCalculator;