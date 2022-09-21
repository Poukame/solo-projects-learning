import logo from '../images/icon.png';

export default function Header() {
	return (
		<header className='header'>
			<img className='header__logo' src={logo} alt='' />
			<h1 className='header__title'>My Travel Journal</h1>
		</header>
	);
}
