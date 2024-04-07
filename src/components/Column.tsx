import { ColumnContainer, ColumnTitle } from "../style";
import Card from "./Card";

interface Props {
	text: string;
}
const Column = ({ text }: Props) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			<Card text="First item" />
			<Card text="second item" />
			<Card text="third item" />
		</ColumnContainer>
	);
};
export default Column;
