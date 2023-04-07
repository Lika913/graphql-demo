function formatDate(date: Date, template: string = "dd.MM.yyyy"): string {

    const days: string = date.getDate().toString().padStart(2, "0");
    const month: string = (date.getMonth() + 1).toString().padStart(2, "0");
    let year: string = date.getFullYear().toString();
    if (!template.includes("yyyy")) {
        year = year.substring(2);
    }

    return template
        .replace("dd", days)
        .replace("MM", month)
        .replace("yyyy", year)
        .replace("hh", date.getHours().toString())
        .replace("mm", date.getMinutes().toString())
        .replace("ss", date.getSeconds().toString())
}

export {formatDate}