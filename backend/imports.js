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

import computer1 from "../public/Images/computer1.jpeg"
import computer2 from "../public/Images/computer2.png"
import computer3 from "../public/Images/computer3.jpeg"
import computer4 from "../public/Images/computer4.webp"
import computer5 from "../public/Images/computer5.jpg"

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

export const fps = [
    [300, 100, 80, 56],
    [240, 80, 60, 36],
    [360, 120, 90, 66],
    [120, 45, 40, 30],
    [175, 110, 90, 69],
]

export const computers = [
    {
        img: computer1,
        alt: "Computer with red lights",
        title: "Chui fauchée, voici mon ordi",
        components: [
            { name: "gpu", id: 1, },
            { name: "cpu", id: 1, },
            { name: "ram", id: [1], },
            { name: "storage", id: [1, 4], },
            { name: "motherboard", id: 1, },
            { name: "psu", id: 1, },
            { name: "fan", id: [1], },
            { name: "case", id: 1, },
        ]
    },
    {
        img: computer5,
        alt: "Very angular computer with red lights",
        title: "J'avais trop d'argent...",
        components: [
            { name: "gpu", id: 1, },
            { name: "cpu", id: 1, },
            { name: "ram", id: [1], },
            { name: "storage", id: [1, 4], },
            { name: "motherboard", id: 1, },
            { name: "psu", id: 1, },
            { name: "fan", id: [1], },
            { name: "case", id: 1, },
        ]
    },
    {
        img: computer4,
        alt: "Basic black and grey Dell computer",
        title: "Entry-level Gaming PC",
        components: [
            { name: "gpu", id: 1, },
            { name: "cpu", id: 1, },
            { name: "ram", id: [1], },
            { name: "storage", id: [1, 4], },
            { name: "motherboard", id: 1, },
            { name: "psu", id: 1, },
            { name: "fan", id: [1], },
            { name: "case", id: 1, },
        ]
    },
    {
        img: computer2,
        alt: "Stylish RGB computer",
        title: "Affordable Video Rendering Workstation",
        components: [
            { name: "gpu", id: 1, },
            { name: "cpu", id: 1, },
            { name: "ram", id: [1], },
            { name: "storage", id: [1, 4], },
            { name: "motherboard", id: 1, },
            { name: "psu", id: 1, },
            { name: "fan", id: [1], },
            { name: "case", id: 1, },
        ]
    },
    {
        img: computer3,
        alt: "Angular Lenovo comptuter",
        title: "ORdi pour Gaming",
        components: [
            { name: "gpu", id: 1, },
            { name: "cpu", id: 1, },
            { name: "ram", id: [1], },
            { name: "storage", id: [1, 4], },
            { name: "motherboard", id: 1, },
            { name: "psu", id: 1, },
            { name: "fan", id: [1], },
            { name: "case", id: 1, },
        ]
    },]

export const computerComponents = {
    gpu: [
        { img: gpu1, alt: "GPU 1", name: "GPU 1", price: 2500 },
        { img: gpu2, alt: "GPU 2", name: "GPU 2", price: 1500 },
        { img: gpu3, alt: "GPU 3", name: "GPU 3", price: 3000 },
        { img: gpu4, alt: "GPU 4", name: "GPU 4", price: 1750 },
        { img: gpu5, alt: "GPU 5", name: "GPU 5", price: 1000 },
    ],
    cpu: [
        { img: cpu1, alt: "CPU 1", name: "CPU 1", price: 2500 },
        { img: cpu2, alt: "CPU 2", name: "CPU 2", price: 1500 },
        { img: cpu3, alt: "CPU 3", name: "CPU 3", price: 3000 },
        { img: cpu4, alt: "CPU 4", name: "CPU 4", price: 1750 },
        { img: cpu5, alt: "CPU 5", name: "CPU 5", price: 1000 },
    ],
    motherboard: [
        { img: motherboard1, alt: "Carte-mère 1", name: "Carte-mère 1", price: 200 },
        { img: motherboard2, alt: "Carte-mère 2", name: "Carte-mère 2", price: 250 },
        { img: motherboard3, alt: "Carte-mère 3", name: "Carte-mère 3", price: 300 },
        { img: motherboard4, alt: "Carte-mère 4", name: "Carte-mère 4", price: 150 },
        { img: motherboard5, alt: "Carte-mère 5", name: "Carte-mère 5", price: 175 },
    ],
    psu: [
        { img: psu1, alt: "Alimentation électrique 1", name: "Alimentation électrique 1", price: 100 },
        { img: psu2, alt: "Alimentation électrique 2", name: "Alimentation électrique 2", price: 50 },
        { img: psu3, alt: "Alimentation électrique 3", name: "Alimentation électrique 3", price: 60 },
        { img: psu4, alt: "Alimentation électrique 4", name: "Alimentation électrique 4", price: 75 },
        { img: psu5, alt: "Alimentation électrique 5", name: "Alimentation électrique 5", price: 125 },
    ],
    storage: [
        { img: hdd1, alt: "Seagate Barracude 2TB", name: "Seagate Barracude 2TB", price: 65 },
        { img: hdd2, alt: "HDD 2", name: "HDD 2", price: 125 },
        { img: hdd3, alt: "HDD 3", name: "HDD 3", price: 250 },
        { img: ssd1, alt: "SSD 1", name: "SSD 1", price: 100 },
        { img: ssd2, alt: "SSD 2", name: "SSD 2", price: 125 },
        { img: ssd3, alt: "SSD 3", name: "SSD 3", price: 200 },
        { img: nvme1, alt: "Samsung M.2 NVMe 1TB", name: "Samsung M.2 NVMe 1TB", price: 100 },
        { img: nvme2, alt: "NVMe 2", name: "NVMe 2", price: 450 },
        { img: nvme3, alt: "NVMe 3", name: "NVMe 3", price: 250 },
    ],
    ram: [
        { img: ram1, alt: "RAM 1", name: "RAM 1", price: 100 },
        { img: ram2, alt: "RAM 2", name: "RAM 2", price: 175 },
        { img: ram3, alt: "RAM 3", name: "RAM 3", price: 150 },
        { img: ram4, alt: "RAM 4", name: "RAM 4", price: 75 },
        { img: ram5, alt: "RAM 5", name: "RAM 5", price: 125 },
    ],
    fan: [
        { img: fan1, alt: "Ventilateur 1", name: "Ventilateur 1", price: 100 },
        { img: fan2, alt: "Ventilateur 2", name: "Ventilateur 2", price: 50 },
        { img: fan3, alt: "Ventilateur 3", name: "Ventilateur 3", price: 60 },
        { img: fan4, alt: "Ventilateur 4", name: "Ventilateur 4", price: 75 },
        { img: fan5, alt: "Ventilateur 5", name: "Ventilateur 5", price: 125 },
    ],
    case: [
        { img: case1, alt: "Boîtier 1", name: "Boîtier 1", price: 250 },
        { img: case2, alt: "Boîtier 2", name: "Boîtier 2", price: 200 },
        { img: case3, alt: "Boîtier 3", name: "Boîtier 3", price: 150 },
        { img: case4, alt: "Boîtier 4", name: "Boîtier 4", price: 100 },
        { img: case5, alt: "Boîtier 5", name: "Boîtier 5", price: 125 },
    ],
    os: [
        { img: windows1, alt: "Windows 10 Home", name: "Windows 10 Home", price: 150 },
        { img: windows2, alt: "Windows 10 Pro", name: "Windows 10 Pro", price: 250 },
        { img: windows3, alt: "Windows 10 OEM", name: "Windows 10 OEM", price: 100 },
        { img: windows4, alt: "Windows 11 Pro", name: "Windows 11 Pro", price: 100 },
        { img: windows5, alt: "Windows 11 Home", name: "Windows 11 Home", price: 125 },
    ],
    accessory: [
        { img: monitor1, alt: "Écran 1", name: "Écran 1", price: 150 },
        { img: monitor2, alt: "Écran 2", name: "Écran 2", price: 250 },
        { img: monitor3, alt: "Écran 3", name: "Écran 3", price: 100 },
        { img: monitor4, alt: "Écran 4", name: "Écran 4", price: 100 },
        { img: monitor5, alt: "Écran 5", name: "Écran 5", price: 125 },
        { img: mouse1, alt: "Souris 1", name: "Souris 1", price: 150 },
        { img: mouse2, alt: "Souris 2", name: "Souris 2", price: 250 },
        { img: mouse3, alt: "Souris 3", name: "Souris 3", price: 100 },
        { img: mouse4, alt: "Souris 4", name: "Souris 4", price: 100 },
        { img: mouse5, alt: "Souris 5", name: "Souris 5", price: 125 },
        { img: keyboard1, alt: "Clavier 1", name: "Clavier 1", price: 150 },
        { img: keyboard2, alt: "Clavier 2", name: "Clavier 2", price: 250 },
        { img: keyboard3, alt: "Clavier 3", name: "Clavier 3", price: 100 },
        { img: keyboard4, alt: "Clavier 4", name: "Clavier 4", price: 100 },
        { img: keyboard5, alt: "Clavier 5", name: "Clavier 5", price: 125 },
    ],


}