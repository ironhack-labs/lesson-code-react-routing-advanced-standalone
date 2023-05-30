import { useSearchParams } from "react-router-dom";

function QueryStringExample() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the values from the URL query strings
  // Example 1: http://localhost:5173/example?place=Miami&destType=Apartment
  // Example 2: http://localhost:5173/example?place=Paris&destType=House
  const place = searchParams.get("place");
  const destType = searchParams.get("destType");

  console.log("place", place);
  console.log("destType", destType);

  return (
    <div>
      <h2>Query String Example</h2>
      <p>Open the console to see the logged query string values</p>
    </div>
  );
}

export default QueryStringExample;
