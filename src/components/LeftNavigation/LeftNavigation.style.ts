import styled from "styled-components";

export const LeftNavWrapper = styled.nav`
    margin-bottom: 20px;

    
.Navbar {
  box-shadow: 0 0 10px var(--light-gray);
  border-radius: 20px;
  padding: calc(1vw + 11px);
  background-color: rgba(0, 0, 0, 0.668);
  color: var(--light-gray);
  fill: white;
  margin-bottom: 2rem;
  
  .navbar__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .Badge {
        background-color: #7209b7 ;
        color: white;
      }


  .navbar__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;

    border-radius: 10px;
    padding: 10px 15px;
    list-style: none;
    // white-space: nowrap;
    transition: 200ms;

    .icon {
      flex: 0 1 25px;
      height: calc(1vw + 5px); //? 1440 - 20 | 1920 - 25
      object-fit: contain;
      fill: var(--prime-color);
    }

    .item__name {
      flex: 1 1 auto;
    }

    &:hover {
      background-color: var(--light-gray);
      color: var(--dark-gray);
      .icon {
        fill: var(--dark-gray);
      }
    }

    &:active {
      transition: 100ms;
      background-color: var(--dark-gray);
      color: white;

      .icon {
        fill: white;
      }

      .Badge {
        background-color: #0079ff;
        color: white;
      }
    }
  }
}

`

