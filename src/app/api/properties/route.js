import fetchData from '../../../../utils/crawler';

export async function GET() {
    const properties = await fetchData();
    return new Response(JSON.stringify(properties), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
