// lib/getFormattedDate.ts
export default function getFormattedDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
