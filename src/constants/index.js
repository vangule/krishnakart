import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export const SOCIALS = [
    { key : 'youtube', link : 'https://www.youtube.com/channel/example', icon : FaYoutube },
    { key : 'instagram', link : 'https://www.instagram.com', icon : FaInstagram },
    { key : 'twitter', link : 'https://www.twitter.com', icon : FaTwitter },
];

export const NAVIGATION_MAPPING = [
    { key: 'home', name : 'Home', to : '/' },
    { key: 'about', name : 'About', to : '/about' },
    { key: 'products', name : 'Products', to : '/products' },
    { key: 'contact', name : 'Contact', to : '/contact' },
    { key: 'cart', name : 'Cart', to : '/cart' }
  ];