import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="flex flex-col items-center justify-center">
        <div className="grid gap-x-60 gap-y-8 text-center lg:text-left">
          <div>
            <h3 className="text-md font-semibold mb-4 text-[#d4a373]">
              Connect with us
            </h3>
            <div className="flex justify-center space-x-2">
              {resourcesLinks.map((link, index) => (
                <div key={index}>
                  {link.isIcon ? (
                    <SocialIcon
                      url={link.href}
                      style={{ height: 25, width: 25 }}
                    />
                  ) : (
                    <a href={link.href} className="hover:text-[#ccd5ae]">
                      {link.text}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* <div>
            <h3 className="text-md font-semibold mb-4 text-[#d4a373]">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-[#ccd5ae]"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 text-[#d4a373]">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-[#ccd5ae]"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
