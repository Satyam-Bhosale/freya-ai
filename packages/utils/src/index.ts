export function toTitleCase(str: string){
    const splitStr = str.split(' ');
    const titleCase = splitStr.map(el => el[0]?.toUpperCase()+el.slice(1)).join(' ');

    return titleCase
}