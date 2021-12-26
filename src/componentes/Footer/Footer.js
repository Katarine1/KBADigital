import React from 'react';

import LogoFooter from '../Logos/LogoFooter';
import LinkEmail from '../Links/LinkEmail';
import LinkLinkedinFooter from '../Links/LinkLinkedinFooter';

const Footer = () => {
	return (
		<footer id="footer">
			
			<LogoFooter />

			<section id="contato">
				
				<LinkEmail />
				
				<LinkLinkedinFooter />

			</section>
		</footer>
	);
}

export default Footer;
