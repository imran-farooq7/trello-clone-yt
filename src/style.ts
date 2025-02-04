import styled from "styled-components";
export const AppContainer = styled.div`
	display: flex;
	align-items: flex-start;
	height: 100%;
	width: 100%;
	padding: 20px;
	background-color: #3179ba;
`;
export const ColumnContainer = styled.div`
	background-color: #ebecf0;
	width: 300px;
	padding: 8px;
	min-height: 40px;
	margin-right: 20px;
	border-radius: 3px;
	flex-grow: 0;
`;
export const ColumnTitle = styled.div`
	font-weight: bold;
	padding: 6px 12px 16px;
`;

export const CardContainer = styled.div`
	background-color: #fff;
	cursor: pointer;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	max-width: 300px;
	border-radius: 3px;
	box-shadow: #091e4240 0 1px 0 0;
`;
