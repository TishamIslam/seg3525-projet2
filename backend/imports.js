import en from "../locale/en"
import fr from "../locale/fr"

import cpu1 from "./cpu/cpu1.jpg"
import cpu2 from "./cpu/cpu2.jpg"
import cpu3 from "./cpu/cpu3.jpg"
import cpu4 from "./cpu/cpu4.jpg"
import cpu5 from "./cpu/cpu5.jpg"

import gpu1 from "./gpu/gpu1.jpg"
import gpu2 from "./gpu/gpu2.jpg"
import gpu3 from "./gpu/gpu3.jpg"
import gpu4 from "./gpu/gpu4.jpg"
import gpu5 from "./gpu/gpu5.jpg"

import motherboard1 from "./motherboard/motherboard1.jpg"
import motherboard2 from "./motherboard/motherboard2.jpg"
import motherboard3 from "./motherboard/motherboard3.jpg"
import motherboard4 from "./motherboard/motherboard4.jpg"
import motherboard5 from "./motherboard/motherboard5.jpg"

import psu1 from "./psu/psu1.jpg"
import psu2 from "./psu/psu2.jpg"
import psu3 from "./psu/psu3.jpg"
import psu4 from "./psu/psu4.jpg"
import psu5 from "./psu/psu5.jpg"

import hdd1 from "./storage/hdd1.jpg"
import hdd2 from "./storage/hdd2.jpg"
import hdd3 from "./storage/hdd3.jpg"
import ssd1 from "./storage/ssd1.jpg"
import ssd2 from "./storage/ssd2.jpg"
import ssd3 from "./storage/ssd3.jpg"
import nvme1 from "./storage/nvme1.jpg"
import nvme2 from "./storage/nvme2.jpg"
import nvme3 from "./storage/nvme3.jpg"

import ram1 from "./ram/ram1.jpg"
import ram2 from "./ram/ram2.jpg"
import ram3 from "./ram/ram3.jpg"
import ram4 from "./ram/ram4.jpg"
import ram5 from "./ram/ram5.jpg"

import fan1 from "./fan/fan1.jpg"
import fan2 from "./fan/fan2.jpg"
import fan3 from "./fan/fan3.jpg"
import fan4 from "./fan/fan4.jpg"
import fan5 from "./fan/fan5.jpg"

import case1 from "./case/case1.jpg"
import case2 from "./case/case2.jpg"
import case3 from "./case/case3.jpg"
import case4 from "./case/case4.jpg"
import case5 from "./case/case5.jpg"

import windows1 from "./os/windows1.jpg"
import windows2 from "./os/windows2.jpg"
import windows3 from "./os/windows3.jpg"
import windows4 from "./os/windows4.jpg"
import windows5 from "./os/windows5.jpg"

import mouse1 from "./accessory/mouse1.jpg"
import mouse2 from "./accessory/mouse2.jpg"
import mouse3 from "./accessory/mouse3.jpg"
import mouse4 from "./accessory/mouse4.jpg"
import mouse5 from "./accessory/mouse5.jpg"
import keyboard1 from "./accessory/keyboard1.jpg"
import keyboard2 from "./accessory/keyboard2.jpg"
import keyboard3 from "./accessory/keyboard3.jpg"
import keyboard4 from "./accessory/keyboard4.jpg"
import keyboard5 from "./accessory/keyboard5.jpg"
import monitor1 from "./accessory/monitor1.jpg"
import monitor2 from "./accessory/monitor2.jpg"
import monitor3 from "./accessory/monitor3.jpg"
import monitor4 from "./accessory/monitor4.jpg"
import monitor5 from "./accessory/monitor5.jpg"

import valorant from "../public/Images/Valorant.jpg"
import witcher from "../public/Images/witcher3.jpeg"
import metro from "../public/Images/metro-exodus.webp"
import cyberpunk from "../public/Images/cyberpunk-2077.jpg"

export const games = [
    { name: "Valorant", img: valorant },
    { name: "The Witcher 3", img: witcher },
    { name: "Metro Exodus", img: metro },
    { name: "Cyberpunk 2077", img: cyberpunk },
]

export const computers = [
    {
        alt: "Ordinateur noir avec un écran à maille et deux ventilateurs lumineux en couleurs arc-en-ciel (RGB)",
        title: "Chui fauchée, voici mon ordi",
        components: {
            gpu: 1,
            cpu: 2,
            ram: [3],
            storage: [0],
            motherboard: 4,
            psu: 1,
            fan: [1],
            case: 3,
        }
    },
    {
        alt: "Ordinateur qui regarde un peu comme un pangolin",
        title: "J'avais trop d'argent...",
        components: {
            gpu: 2,
            cpu: 1,
            ram: [2, 2],
            storage: [2, 4, 7],
            motherboard: 1,
            psu: 0,
            fan: [4, 2],
            case: 0,
        }
    },
    {
        alt: "Ordinateur noir avec un écran à maille et des ventilateurs lumineux en couleurs arc-en-ciel (RGB)",
        title: "Entry-level Gaming PC",
        components: {
            gpu: 1,
            cpu: 4,
            ram: [1],
            storage: [6],
            motherboard: 2,
            psu: 4,
            fan: [0],
            case: 4,
        }
    },
    {
        alt: "Ordinateur en forme hexagonale avec plusieurs ventilateurs lumineux de couleur jaune-vert",
        title: "Affordable Video Rendering Workstation",
        components: {
            gpu: 3,
            cpu: 1,
            ram: [1],
            storage: [2,5],
            motherboard: 4,
            psu: 3,
            fan: [2, 2, 2],
            case: 1,
        }
    },
    {
        alt: "Ordinateur avec des lumières verts",
        title: "ORdi pour Gaming",
        components: {
            gpu: 2,
            cpu: 3,
            ram: [4, 4],
            storage: [1, 4],
            motherboard: 3,
            psu: 3,
            fan: [4],
            case: 2,
        }
    },]

export function getComputerComponents(locale) {
    const t = locale === 'en' ? en : fr

    return {
        gpu: [
            { img: gpu1, name: "ROG Strix 8 GB", price: 560, details: ["VRAM: 8 GB, 65 MHz"], gamePower: 212 },
            { img: gpu2, name: "GeForce 1060 4 GB", price: 230, details: ["VRAM: 4 GB, 60 MHz"], gamePower: 176 },
            { img: gpu3, name: "ASUS GeForce RTX 3070 16 GB", price: 1000, details: ["VRAM: 16 GB, 120 MHz"], gamePower: 289 },
            { img: gpu4, name: "ASUS GeForce GTX 1050Ti 4 GB", price: 200, details: ["VRAM: 4 GB, 80 MHz"], gamePower: 156 },
            { img: gpu5, name: "MSI GeForce RTX 3060Ti 12 GB", price: 900, details: ["VRAM: 12 GB, 40 MHz"], gamePower: 255 },
        ],
        cpu: [
            { img: cpu1, name: "Intel Core i7-10700F", price: 330, details: [t.coeurs + ": 8", t.vitesse + ": 4.8 GHz"], gamePower: 45 },
            { img: cpu2, name: "AMD Ryzen 7 5800X3D", price: 580, details: [t.coeurs + ": 8", t.vitesse + ": 4.5 GHz"], gamePower: 66 },
            { img: cpu3, name: "AMD RYZEN 5 5600", price: 250, details: [t.coeurs + ": 6", t.vitesse + ": 3.5 GHz"], gamePower: 32 },
            { img: cpu4, name: "Intel Core i5-10400", price: 200, details: [t.coeurs + ": 6", t.vitesse + ": @2.7 GHz"], gamePower: 22 },
            { img: cpu5, name: "Intel Core i9-11900K", price: 500, details: [t.coeurs + ": 8", t.vitesse + ": @5.3 GHz"], gamePower: 59 },
        ],
        motherboard: [
            { img: motherboard1, name: "ASUS ROG Strix B450-F", price: 150, details: ["Ports: 2 USB 3.0, 2 USB 2.0"], gamePower: 5 },
            { img: motherboard2, name: "ASUS Prime Z590-A LGA", price: 250, details: ["Ports: 3 USB 3.0, 2 USB 2.0, Ethernet"], gamePower: 8 },
            { img: motherboard3, name: "ASUS ROG Strix B560-A ", price: 200, details: ["Ports: 5 USB 3.0, Ethernet"], gamePower: 12 },
            { img: motherboard4, name: "MSI MPG Z490", price: 170, details: ["Ports: 1 USB 3.0, 3 USB 2.0"], gamePower: 1 },
            { img: motherboard5, name: "MSI MAG B450", price: 145, details: ["Ports: 2 USB 3.0, 2 USB 2.0, Ethernet"], gamePower: 2 },
        ],
        psu: [
            { img: psu1, name: "EVGA 750GA 750 W", details: ["750 W"], price: 100 },
            { img: psu2, name: "ThermalTake Smart 500 W", details: ["500 W"], price: 50 },
            { img: psu3, name: "Corsair VS600 600 W", details: ["600 W"], price: 60 },
            { img: psu4, name: "EVGA 600 W", details: ["600 W"], price: 75 },
            { img: psu5, name: "Corsair CS650F RGB 650 W", details: ["650 W"], price: 125 },
        ],
        storage: [
            { img: hdd1, name: "Seagate Barracuda 2 TB", details: [t.capacite + ": 2 TB", "R/W: 70 MB/s"], price: 65, gamePower: -10 },
            { img: hdd2, name: "WD Blue 4 TB", details: [t.capacite + ": 4 TB", "R/W: 80 MB/s"], price: 125, gamePower: -10 },
            { img: hdd3, name: "WD Black 8 TB", details: [t.capacite + ": 8 TB", "R/W: 80 MB/s"], price: 250, gamePower: -10 },
            { img: ssd1, name: "WD Blue Sata SSD 1 TB", details: [t.capacite + ": 1 TB", "R/W: 700 MB/s"], price: 125, gamePower: 10 },
            { img: ssd2, name: "Crucial SSD 2 TB", details: [t.capacite + ": 2 TB", "R/W: 800 MB/s"], price: 150, gamePower: 10 },
            { img: ssd3, name: "SP SSD 512 GB", details: [t.capacite + ": 512 GB", "R/W: 750 MB/s"], price: 100, gamePower: 10 },
            { img: nvme1, name: "Samsung 980 NVMe SSD 1 TB", details: [t.capacite + ": 1 TB", "R/W: 9800 MB/s"], price: 200, gamePower: 25 },
            { img: nvme2, name: "Samsung 980 Pro NVMe SSD 2 TB", details: [t.capacite + ": 2 TB", "R/W: 11000 MB/s"], price: 350, gamePower: 40 },
            { img: nvme3, name: "WD Black SN770 NVMe SSD 512 GB", details: [t.capacite + ": 512 GB", "R/W: 9000 MB/s"], price: 250, gamePower: 20 },
        ],
        ram: [
            { img: ram1, name: "Corsair Vengeance 8 GB x2", details: [t.capacite + ": 8 GB x 2", "DDR4 3600 MHz"], price: 100, gamePower: 25 },
            { img: ram2, name: "X Power 8 GB x2", details: [t.capacite + ": 8 GB x 2", "DDR4 3200 MHz"], price: 175, gamePower: 20 },
            { img: ram3, name: "Crucial CL40 32 GB x2", details: [t.capacite + ": 32 GB x 2", "DDR5 4800 MHz"], price: 425, gamePower: 50 },
            { img: ram4, name: "XPG D60G 8 GB x 2", details: [t.capacite + ": 8 GB x 2", "DDR4 3200 MHz"], price: 85, gamePower: 20 },
            { img: ram5, name: "Corsair Vengeance 16GB x2", details: [t.capacite + ": 16 GB x 2", "DDR4 3200 MHz"], price: 170, gamePower: 30 },
        ],
        fan: [
            { img: fan1, name: "upHere NT12043-5 x5", details: [t.bruit + ": 25 dB", "CFM: 300"], price: 100 },
            { img: fan2, name: "Artic F12 x5", details: [t.bruit + ": 32 dB", "CFM: 200"], price: 50 },
            { img: fan3, name: "Noctua NF-P12", details: [t.bruit + ": 27 dB", "CFM: 235"], price: 20 },
            { img: fan4, name: "Cooler Master MF120 RGB x3", details: [t.bruit + ": 24 dB", "CFM: 270"], price: 55 },
            { img: fan5, name: "Corsair CO-9050072-WW x5", details: [t.bruit + ": 14 dB", "CFM: 290"], price: 125 },
        ],
        case: [
            { img: case1, name: "Vetroo K1 Pangolin", details: [t.ventilPasInclus], price: 250 },
            { img: case2, name: "KEDIERS", details: [t.ventilInclus + " (x7)"], price: 200 },
            { img: case3, name: "Razer NXT250", details: [t.ventilPasInclus], price: 150 },
            { img: case4, name: "Cooler Master MasterBox MB311L", details: [t.ventilInclus + " (2)"], price: 100 },
            { img: case5, name: "Cooler Master MasterBox TD500", details: [t.ventilInclus + " (3)"], price: 125 },
        ],
        os: [
            { img: windows1, name: "Windows 10 Home", price: 150 },
            { img: windows2, name: "Windows 10 Pro", price: 250 },
            { img: windows3, name: "Windows 10 OEM", price: 100 },
            { img: windows4, name: "Windows 11 Pro", price: 100 },
            { img: windows5, name: "Windows 11 Home", price: 125 },
        ],
        accessory: [
            { img: monitor1, name: "Samsung T350 Series", details: [t.grandeur + ": 24\" / 60cm @1920/1080p", t.tauxRefraiche + " : 75Hz"], price: 180 },
            { img: monitor2, name: "LG 27EA430V-B", details: [t.grandeur + ": 27\" / 68cm @1920/1080p", t.tauxRefraiche + " : 75Hz"], price: 200 },
            { img: monitor3, name: "LG 22BK430H-B", details: [t.grandeur + ": 22\" / 55cm @1920/1080p", t.tauxRefraiche + " : 75Hz"], price: 160 },
            { img: monitor4, name: "ViewSonic VA2247-MH ", details: [t.grandeur + ": 22\" / cm @1920/1080p", t.tauxRefraiche + " : 75Hz"], price: 160 },
            { img: monitor5, name: "MSI Curved Gaming Monitor", details: [t.grandeur + ": 24\" / 60cm @1920/1080p", t.tauxRefraiche + " : 144Hz", t.courbe], price: 210 },
            { img: mouse1, name: "VersionTech RGB Mouse", details: [], price: 50 },
            { img: mouse2, name: "Hotlife Wireless Mouse", details: [t.sansFil], price: 20 },
            { img: mouse3, name: "Logitech Wireless Mouse", details: [t.sansFil], price: 35 },
            { img: mouse4, name: "Anker Ergonomic Mouse", details: [], price: 60 },
            { img: mouse5, name: "Logitech G502", details: [], price: 80 },
            { img: keyboard1, name: "SteelSeries Apex RGB", details: [t.grandeur + ": 80% (TKL)"], price: 150 },
            { img: keyboard2, name: "MageGee MK-Box", details: [t.grandeur + ": 60%"], price: 250 },
            { img: keyboard3, name: "Ltvystore Keyboard", details: [t.grandeur + ": 60%"], price: 100 },
            { img: keyboard4, name: "OMOTON Wireless Keyboard", details: [t.grandeur + ": 90%", t.sansFil], price: 100 },
            { img: keyboard5, name: "YoChic Keyboard", details: [t.grandeur + ": 100%"], price: 125 },
        ],
    }
}

export const components = [
    "cpu",
    "motherboard",
    "storage",
    "ram",
    "fan",
    "gpu",
    "case",
    "psu",
    "os",
    "accessory"
]

export const componentMetadata = {
    cpu: {
        required: true,
        multiple: false,
    },
    motherboard: {
        required: true,
        multiple: false,
    },
    storage: {
        required: true,
        multiple: true,
    },
    ram: {
        required: true,
        multiple: true,
    },
    fan: {
        required: false,
        multiple: true,
    },
    gpu: {
        required: false,
        multiple: false,
    },
    case: {
        required: true,
        multiple: false,
    },
    psu: {
        required: true,
        multiple: false,
    },
    os: {
        required: false,
        multiple: false,
    },
    accessory: {
        required: false,
        multiple: true,
    },
}