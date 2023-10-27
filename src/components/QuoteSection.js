import React, { useState, useEffect } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const apiKey = process.env.REACT_APP_QUOTE_API_KEY;
const QuoteSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example: Fetching data with a Promise
    fetch("https://api.api-ninjas.com/v1/quotes?category=success", {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        return result.json();
      })
      .then((jsonData) => {
        if (Array.isArray(jsonData) && jsonData.length > 0) {
          setData(jsonData[0]); // Set the data from the first element of the array
        } else {
          throw new Error("Invalid or empty response data");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //console.log(data.quote);
  return (
    <>
      {data ? (
        <div>
          <h2 className="mb-4 text-center font-bold text-xl">
            Thought for the day
          </h2>
          <div className=" relative mt-4 text-center">
            <RiDoubleQuotesL className="inline-block absolute -top-0.5  text-xs  text-neutral-600 dark:text-neutral-400" />
            <div className="inline-block  pl-6 text-neutral-600 dark:text-neutral-400">
              {data.quote}
            </div>
            <RiDoubleQuotesR className="inline-block absolute -top-0.5 ml-2 text-xs  text-neutral-600 dark:text-neutral-400" />
          </div>
          <div className="text-right text-neutral-600 dark:text-neutral-400 mt-1">
            {data.author}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default QuoteSection;
