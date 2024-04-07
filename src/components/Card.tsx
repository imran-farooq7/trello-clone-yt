import { CardContainer } from "../style";

interface Props {
	text: string;
}
const Card = ({ text }: Props) => {
	return <CardContainer>{text}</CardContainer>;
};
export default Card;
