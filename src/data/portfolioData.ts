import mechanic from '../assets/black-white-mechanic.jpg';
import view from '../assets/blue-red-view.jpg';
import flower from '../assets/flower-blue.jpg';
import lines from '../assets/lines-orange-white.jpg';
import neuron from '../assets/neuron.jpg';
import tree from '../assets/snow-tree.jpg';
import map from '../assets/map-pins.jpg';

interface PortfolioData {
    img: string
    alt: string
    cols: string
    link: string
};

const data:PortfolioData[] = [
    {img: mechanic, alt: "some cool company", cols: "4", link: "#"},
    {img: view, alt: "some cool company", cols: "4", link: "#"},
    {img: map, alt: "some cool company", cols: "6", link: "#"},
    {img: lines, alt: "some cool company", cols: "5", link: "#"},
    {img: flower, alt: "some cool company", cols: "8", link: "#"},
    {img: neuron, alt: "some cool company", cols: "7", link: "#"},
    {img: tree, alt: "some cool company", cols: "6", link: "#"}
]

export default data