import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Home',
        icon: 'glyphicon-home',
        route: 'public/home',
        isloginrequired: false,
        submenu: null,
    },
    {
        text: 'About Us',
        icon: 'glyphicon-globe',
        route: 'public/about',
        isloginrequired: false,
        submenu: null,
    },
    {
        text: 'Services',
        icon: 'glyphicon-list',
        route: 'public/services',
        isloginrequired: false,
        submenu: null
    },
    {
        text: 'Careers',
        icon: 'glyphicon-education',
        route: 'public/careers',
        isloginrequired: false,
        submenu: null
    },
    {
        text: 'ERP Solutions',
        icon: 'glyphicon-th',
        route: 'public/erp-solutions',
        isloginrequired: false,
        submenu: null
    },
    {
        text: 'Contact Us',
        icon: 'glyphicon-bullhorn',
        route: 'public/contact',
        isloginrequired: false,
        submenu: null
    },
    {
        text: 'Msc-India',
        icon: 'glyphicon-equalizer',
        route: 'public/msc-india',
        isloginrequired: false,
        submenu: null
    }
];