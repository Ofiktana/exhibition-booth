import { FaFacebookF, FaInstagram, FaLinkedin  } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {

  type link = {
    display: any,
    href: string
  }

  const lagosAddressLines:string[] = [
    'Seplat Energy Plc',
    'Head Office',
    '16A Temple Road',
    'Ikoyi',
    'Lagos',
    'Nigeria'
  ]

  const londonAddressLines:string[] = [
    'Seplat Energy UK Ltd',
    '4th Floor',
    '58 - 60 Berners Street',
    'Ikoyi',
    'London',
    'W1T 3NQ',
    'United Kingdom'
  ]

  const websiteLinks:link[] = [
    {display: 'About', href: 'https://www.seplatenergy.com/our-company/'},
    {display: 'Sustainability', href: 'https://www.seplatenergy.com/sustainability/'},
    {display: 'Investors', href: 'https://www.seplatenergy.com/investors/'},
    {display: 'Careers', href: 'https://www.seplatenergy.com/careers/'},
    {display: 'News & Insights', href: 'https://www.seplatenergy.com/news-insights/'},
    {display: 'Contact', href: 'https://www.seplatenergy.com/contact/'},
  ]

  const socialMediaLinks:link[] = [
    {display: <FaYoutube />, href: 'https://www.youtube.com/@seplatenergy' },
    {display: <FaFacebookF />, href: 'https://www.facebook.com/SEPLATENERGY/' },
    {display: <FaLinkedin />, href: 'https://www.linkedin.com/company/seplat-energy-plc/' },
    {display: <BsTwitterX />, href: 'https://x.com/seplatenergy' },
    {display: <FaInstagram />, href: 'https://www.instagram.com/seplatenergy/' },
  ]

  function renderAddress(address:string[]){
    return address.map(line => <p className="address-line" key={line}>{line}</p>)
  }

  function renderLinks(links:link[]){
    return links.map(link => <a key={link.href} href={link.href} target="_blank" className="footer-links">{link.display}</a>)
  }

  return (
    <div className="footer-container">
      <div className="footer-block footer-address">
        <p className="footer-block-title">
          Our Lagos Office
        </p>

        {renderAddress(lagosAddressLines)}
      </div>
      <div className="footer-block footer-address">
        <p className="footer-block-title">
          Our London Office
        </p>

        {renderAddress(londonAddressLines)}
      </div>

      <div className="footer-block footer-web-links">
        <p className="footer-block-title">
          Seplat Energy Plc
        </p>

        {renderLinks(websiteLinks)}
      </div>

      <hr className="footer-divider-mobile"/>

      <div className="footer-block footer-social-links">
        <small>All rights reserved.</small>
        <small>Keep in touch</small>
        <div className="footer-social-icons">
          {renderLinks(socialMediaLinks)}
        </div>
        <small>We use social media as part of our commitment to transparency & to provide timely information to our stakeholders </small>
      </div>
    </div>
  )
}

export default Footer