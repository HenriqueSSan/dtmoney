import LogoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export const Header = () => {
	return (
		<Container>
			<Content>
				<figure>
					<img src={LogoImg} alt="logo application from Dt money" />
				</figure>
				<button type="button">Nova Transação</button>
			</Content>
		</Container>
	);
};
