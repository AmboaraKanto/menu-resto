import Airtable from "airtable";

export default function retrieveRestaurantList(callback) {
  var base = new Airtable({ apiKey: "key5hCfcpO5JBNaYj" }).base(
    "appukpTZGXJdELj61"
  );
  const restaurants = [];
  let error;

  base("Restaurants")
    .select({
      // Selecting the first 3 records in Grid view:
    //   maxRecords: 3,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        try {
          records.forEach(function (record) {
            const restaurant = {};
            restaurant.id = record.id;
            restaurant.name = record.get("Nom");
            restaurant.description = record.get("Adresse");
            const images = record.get("Images");
            if (images && images.length > 0) {
              restaurant.image = images[0].url;
            }
            restaurants.push(restaurant);
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        } catch (err) {
          error = err;
          return;
        }
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        callback(error, restaurants);
      }
    );
}
