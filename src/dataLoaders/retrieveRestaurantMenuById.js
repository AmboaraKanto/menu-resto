import Airtable from "airtable";

export default function retrieveRestaurantMenuById(id, callback) {
    const base = new Airtable({apiKey: 'key5hCfcpO5JBNaYj'}).base('appukpTZGXJdELj61');

    let error;
    const menus = [];

    base('Menus').select({
        // Selecting the first 3 records in Grid view:
        // maxRecords: 3,
        view: "Grid view",
        filterByFormula: `SEARCH("${id}", {Restaurants})`
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        try {
            records.forEach(function(record) {
                const menu = {};
                menu.name = record.get('Nom');
                menu.details = record.get('Détails');
                menu.category = record.get('Catégorie');
                menus.push(menu);
            });
        
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
        } catch(err) {
            error = err;
            return;
        }
    
    }, function done(err) {
        if (err) { console.error(err); return; }
        callback(error, menus);
    });
}