
export default function filepathJoin(...parts: string[]): string {
    return parts
        .filter(Boolean)
        .map((part, index) => {
            // Remove leading slashes on everything but the first
            if (index > 0) part = part.replace(/^\/+/, '');
            // Remove trailing slashes on everything but the last
            if (index < parts.length - 1) part = part.replace(/\/+$/, '');
            return part;
        })
        .join('/');
}
