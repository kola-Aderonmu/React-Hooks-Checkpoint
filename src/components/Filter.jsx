import React from "react";
import { Input, Select } from "antd";

const { Search } = Input;

const Filter = ({ memorizedMovies: { myMemorizedMovies }, setmyMovies }) => {
  // filter movies by Rating
 const filterByRate = (rate) => {
   let filteredMovies = myMemorizedMovies.filter(
     (item) => item.rating === Number(rate)
   );
   setmyMovies(filteredMovies);
 }

 const filterBySearch = (value) => {
   let filteredMovies = myMemorizedMovies.filter((item) =>
     item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase().trim())
   );
   setmyMovies(filteredMovies);
 }

  return (
    <div className="flex gap-72 max-w-4xl mx-auto">
      <Search
        placeholder="Input search text"
        allowClear
        enterButton="Search"
        size="large"
        // onSearch={onSearch}
        style={{ width: "250px", marginRight: "-12rem" }}
        onSearch={(value) => filterBySearch(value)}
      />

      {/* for filtering movies by rate  */}
      <Select
        defaultValue="Filter By Rate"
        style={{
          width: 150,
        }}
        onChange={(value) => filterByRate(value)}
        options={[
          {
            value: "1",
            label: "⭐️",
          },
          {
            value: "2",
            label: "⭐️⭐️",
          },
          {
            value: "3",
            label: "⭐️⭐️⭐️",
          },
          {
            value: "4",
            label: "⭐️⭐️⭐️⭐️",
          },
          {
            value: "5",
            label: "⭐️⭐️⭐️⭐️⭐️👍",
          },
        ]}
      />
    </div>
  );
};

export default Filter;
