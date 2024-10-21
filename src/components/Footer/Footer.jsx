import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Social Media Section */}
        <div>
          <h3 className="text-white font-bold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/results?search_query=sraddha+khapara"
              className="hover:text-white"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/groups/185354019497946"
              className="hover:text-white"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/makaut-wb/"
              className="hover:text-white"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/makaut_wb/"
              className="hover:text-white"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://makautwb.ac.in"
                className="hover:underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                MAKAUT Official Website
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="https://twitter.com/_raja_berlin" className="hover:underline hover:text-white">
                Contact Admin
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4 text-xs text-gray-500">
        © 2024 MAKAUT Alumni Association. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
