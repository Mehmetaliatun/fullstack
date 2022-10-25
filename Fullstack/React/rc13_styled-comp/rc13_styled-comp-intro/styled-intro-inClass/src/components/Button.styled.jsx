import styled from "styled-components";

//! component olustur, style verecegimiz icin styled yaz,
//! button olmasini istedigimiz icin adini ona gore veriyoruz.
//! daha sonra back tick ile yazilan alani dolduruyoruz.
export const Button = styled.button`
  /* background-color: hotpink; */
  /* color: white; */
  background-color: ${(props) => (props.primary ? "white" : "hotpink")};

  color: ${({ primary }) => (primary ? "hotpink" : "white")};
  cursor: pointer;
  width: 7rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border-color: pink;
  font-size: 0.8rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  &:hover {
    transform: scale(0.97);
  }
`;

export const TomatoButton = styled(Button)`
  background-color: ${(props) => (props.primary ? "white" : "tomato")};
  color: ${({ primary }) => (primary ? "tomato" : "white")};
  border: 1px solid tomato;
`;
