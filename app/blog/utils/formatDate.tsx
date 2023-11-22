export async function formatDate(publishedDate: string | number | Date) {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: '2-digit' };
    const date = new Date(publishedDate);
    return date.toLocaleDateString('en-US', options);
  }