export async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data **API is DOWN...**');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: **API is DOWN...**', error);
        throw error;
    }
}

