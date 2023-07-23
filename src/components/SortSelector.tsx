import { Menu, Button, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string | "";
  setOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, setOrder }: Props) => {
  const sortOrders = [
    { value: "primary_release_date.asc", label: "Release Date asc" },
    { value: "primary_release_date.desc", label: "Release Date desc" },
    { value: "vote_average.desc", label: "Vote Average desc" },
    { value: "vote_average.asc", label: "Vote Average asc" },
    { value: "revenue.desc", label: "Revenue desc" },
    { value: "revenue.asc", label: "Revenue asc" },
    { value: "popularity.desc", label: "Popularity desc" },
    { value: "popularity.asc", label: "Popularity asc" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Popularity desc"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.label}
            value={order.value}
            onClick={() => setOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
