import { Link } from 'react-router-dom'; 
import { Avatar } from 'antd';

const navLinks = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Blog',
		path: '/blog'
	},
	{
		title: 'Contact',
		path: '/contact'
	},
		{
		title: 'Login',
		path: '/login'
	}
]

export default function Navigation({user}) {
	return (
	<nav className="site-navigation">
		<span className="menu-title">My React Blog</span>
		<div id="menu" className="menu-content-container">
			<ul>
				{ navLinks.map((link, index) => (
					<li key={index}>
						<Link to={link.path}>{link.title}</Link>
					</li>
				))}
			</ul>
			<span className="menu-avatar-container">
				<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
				<span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
			</span>
		</div>
		<div id="menuToggle" className="" />
	</nav>)
}