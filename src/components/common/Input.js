import { styled } from "goober";

export const Input = styled('input')`
   padding: .4rem 1.2rem;
   border-radius: 6px;
   background: gray;
   color: white;
   font-size: inherit;
   width: 20ch;
   &::placeholder {
      font-family: inherit;
      color: inherit;
   }
`