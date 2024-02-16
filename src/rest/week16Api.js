const WEEK16_API_ENDPOINT =
  "https://659c8892633f9aee7907b1bf.mockapi.io/week16";

// Define the Week12API class
class Week12API {
  // Define the get method to fetch data from the API
  get = async () => {
    try {
      // Fetch data from the API
      const resp = await fetch(WEEK16_API_ENDPOINT);
      // Parse the response to JSON
      const data = await resp.json();
      // Return the parsed data
      return data;
    } catch (e) {
      // Log any errors that occur during the fetch
      console.log("Oops, looks like fetchHouses had an issue.", e);
    }
  };

  // Define the put method to update a house in the API
  put = async (week16) => {
    try {
      const resp = await fetch(`${WEEK16_API_ENDPOINT}/${week16._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(week16),
      });

      return await resp.json();
    } catch (e) {
      console.log("Oops, looks like updating houses had an issue.", e);
    }
  };

  // define the post method to post a new house in the API
  post = async (week16) => {
    try {
      const resp = await fetch(WEEK16_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(week16),
      });

      return await resp.json();
    } catch (e) {
      console.log("Oops, looks like updating houses had an issue.", e);
    }
  };

  // define the delete method to delete a house in the API
  delete = async (week16Id) => {
    try {
      const resp = await fetch(`${WEEK16_API_ENDPOINT}/${week16Id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return await resp.json();
    } catch (e) {
      console.log("Oops, looks like deleting houses had an issue.", e);
    }
  };
}

// Export an instance of the Week12API class
export const week12API = new Week12API();
