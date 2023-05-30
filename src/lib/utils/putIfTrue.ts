export default function putIfTrue(condition: any, value: string) {
    if (condition === true) {
        return value;
    }
    return "";
}