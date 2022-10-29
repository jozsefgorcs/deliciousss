import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { BsFillHouseDoorFill } from "react-icons/bs";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <NavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice></FaPizzaSlice>
        <h4>Italian</h4>
      </NavLink>

      <NavLink to={"/cuisine/American"}>
        <FaHamburger></FaHamburger>
        <h4>American</h4>
      </NavLink>

      <NavLink to={"/cuisine/Thai"}>
        <GiNoodles></GiNoodles>
        <h4>Thai</h4>
      </NavLink>

      <NavLink to={"/cuisine/Japanese"}>
        <GiChopsticks></GiChopsticks>
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
export default Category;
