import axios from 'axios';
import cheerio from 'cheerio';

const fetchData = async () => {
    try {
        const { data } = await axios.get('https://www.icicibank.com/notice-board/properties#faqaccordion-6');
        const $ = cheerio.load(data);
        const properties = [];

        $('table tbody tr').each((index, element) => {
            const tds = $(element).find('td');
            properties.push({
                sno: $(tds[0]).text().trim(),
                borrowerName: $(tds[1]).text().trim(),
                propertyAddress: $(tds[2]).text().trim(),
                propertyArea: $(tds[3]).text().trim(),
                propertyType: $(tds[4]).text().trim(),
                reservePrice: $(tds[5]).text().trim(),
                auctionDate: $(tds[6]).text().trim(),
                propertyCity: $(tds[7]).text().trim(),
                state: $(tds[8]).text().trim(),
            });
        });

        return properties;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default fetchData;
