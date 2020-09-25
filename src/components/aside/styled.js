/* eslint-disable no-tabs */
import { styled } from 'goober'
// eslint-disable-next-line no-unused-vars
import asideBg from '../../assets/Cloud-background.png'

export const Title = styled('span')`
   text-transform: capitalize;
   font-size: 4rem; 
`
export const Header = styled('header')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2rem;
   margin-bottom: 2rem;
`
export const Aside = styled('aside')`
   background-color: var(--primary);
   text-align: center;
`
export const Settings = styled('button')`
   border-radius: 50%;
   font-size: 1.4rem;
   padding: 10px;
   background-color: gray;
`
export const Temperature = styled('span')`
   display: block;
   font-size: 6em;
`
export const Main = styled('main')`
	text-align: center;
	font-size: 1.4rem;
	margin-bottom: 2rem;
	span:nth-child(3) {
		opacity: 0.8;
	}
	.today-pic {
		width: 55%;
	}
`
