import Link from "next/link";

const footerData = {
  about: {
    title: "About Us",
    description:
      "We are committed to providing the best products and services to our customers.",
    socialMedia: [
      { href: "#", iconClass: "fab fa-facebook-f" },
      { href: "#", iconClass: "fab fa-twitter" },
      { href: "#", iconClass: "fab fa-instagram" },
      { href: "#", iconClass: "fab fa-linkedin-in" },
    ],
  },
  sections: [
    {
      title: "Products",
      links: [
        { href: "#", label: "Product 1" },
        { href: "#", label: "Product 2" },
        { href: "#", label: "Product 3" },
        { href: "#", label: "Product 4" },
        { href: "#", label: "Product 5" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { href: "#", label: "Contact Us" },
        { href: "#", label: "FAQ" },
        { href: "#", label: "Shipping & Returns" },
        { href: "#", label: "Privacy Policy" },
      ],
    },
  ],
};

export const FirstFooter = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">{footerData.about.title}</h2>
          <p className="text-sm mb-4">{footerData.about.description}</p>
          <div className="flex space-x-4">
            {footerData.about.socialMedia.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white"
              >
                <i className={social.iconClass}></i>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                        href={link.href}
                        className="hover:underline"
                    >
                        {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
