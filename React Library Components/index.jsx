import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu/index';
import Badge from './components/Badge/Badge';
import Banner from './components/Banner/Banner';
import Card from './components/Cards/index';
import { IoCloudUploadOutline } from 'react-icons/io5';

function App() {
	return (
		<>
			<h1>Dropdown Menu</h1>
			<Menu>
				<Menu.Button size='lg' variant='warning'>
					Menu
				</Menu.Button>
				<Menu.Dropdown>
					<Menu.Item>Option 1</Menu.Item>
					<Menu.Item>Option 2</Menu.Item>
					<Menu.Item>Option 3</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			<h1>Badges</h1>
			<Badge variant='pill' color='blue'>
				Badge Blue Pill
			</Badge>
			<Badge variant='square' color='red'>
				Badge Red Square
			</Badge>
			<Badge variant='pill' color='yellow'>
				Badge Yellow Pill
			</Badge>
			<Badge variant='square' color='green'>
				Badge Green Square
			</Badge>
			<Badge />
			<h1>Banners</h1>
			<Banner status='warning'>Watch out for the bug!</Banner>
			<Banner status='error'></Banner>
			<Banner status='neutral'>There is an update</Banner>
			<Banner status='success' />
			<h1>Cards</h1>
			<div className='card-demo'>
				<Card icon={<IoCloudUploadOutline />} boxColor='blue' iconColor='white'>
					<Card.Title>Easy Deployement</Card.Title>
					<Card.Text>
						Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
					</Card.Text>
				</Card>
				<Card>
					<Card.Title>Default Card</Card.Title>
					<Card.Text>
						This card has no props.
					</Card.Text>
				</Card>
			</div>
		</>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
