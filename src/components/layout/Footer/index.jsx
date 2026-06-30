import { Link } from "react-router";

/**
 * Footer
 *
 * Global site footer containing brand information, location details,
 * social links, and secondary navigation items.
 *
 * Structure:
 * - Brand introduction and short description.
 * - Visit section with address details.
 * - Connect section for social media links.
 * - Bottom bar containing copyright and legal links.
 *
 * @returns {JSX.Element}
 */
const Footer = () => {
    return (
        <footer className="py-12 border-t border-border-light">
            <div className="container px-4 sm:px-6 mx-auto">
                {/* Main footer content */}
                <div className="grid md:grid-cols-3 mb-10 gap-4">
                    {/* Brand identity */}
                    <div>
                        <Link to="/" className="font-heading font-bold text-xl">
                            Arlowe & Bean
                        </Link>

                        <p className="mt-3 text-sm text-espresso/60 max-w-xs leading-relaxed">
                            A boutique cafe pairing ethically sourced micro-lots
                            with artisanal pastries since 2014.
                        </p>
                    </div>

                    {/* Physical location */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-caramel font-bold mb-3">
                            Visit
                        </h4>

                        <p className="text-sm text-espresso/70 leading-relaxed">
                            124 Heirloom Lane <br />
                            East Bloom, London EC2A
                        </p>
                    </div>

                    {/* Social media links */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-caramel font-bold mb-3">
                            Connect
                        </h4>

                        <div className="flex gap-6 text-sm">
                            <Link
                                to="/"
                                className="text-espresso/70 hover:text-espresso underline decoration-caramel underline-offset-4">
                                Instagram
                            </Link>

                            <Link
                                to="/"
                                className="text-espresso/70 hover:text-espresso underline decoration-caramel underline-offset-4">
                                Twitter
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-espresso/40 pt-6 border-t border-border-light">
                    {/* Copyright */}
                    <div>© 2026 Arlowe & Bean Artisanal Roasters</div>

                    {/* Secondary navigation */}
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link
                            to="/"
                            className="hover:text-espresso transition-colors">
                            Privacy
                        </Link>

                        <Link
                            to="/"
                            className="hover:text-espresso transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
